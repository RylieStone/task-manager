import "./body.css"
import { useState } from "react";
const filters = ['All', 'Pending', 'Completed']
function Body(props) {
    const tasks = props.tasks
    const [filter, changeFilter] = useState(0) // ultilizes filters spot on the array
    const [taskName, edit] = useState("") // for inputting new tasks
    const onChange = (evt) => {
        edit(evt.target.value)
    }
    const onSubmit = (evt) => { // creates the new task and submits it to the api
    evt.preventDefault()
    let task = {id: tasks.length+1, title: taskName, status: false, created: Date.now()}
    props.setTasks([...tasks, task])
    // add axios
  }
    const changeFil = () => { // changes filter
        if (filter +1 >= filters.length) {
            changeFilter(0)
        } else {
            changeFilter(filter +1)
        }
    }
    const filtered = filters[filter] === 'All' ? tasks : tasks.filter((task) => task.status === (filters[filter] === 'Completed'))
  return (
    <div className="body">

      <div className='task-body'>
        <button className="filter" onClick={changeFil}>Filtering by: {filters[filter]}</button>
        {tasks.length >= 1 ? filtered.map((task) => {
            return <div className="card">
            <div className="card-header" key={task.id}>
                <h2>{task.title}</h2>
                <h3>{task.status ? "completed" : "pending"}</h3>
            </div>
            <h5>{new Date(task.created).toLocaleString()}</h5>
            <div className="card-footer"> 
                <button className="change" onClick={() => props.change(task.id)}>Change Status</button>
                <button className="delete" onClick={() => props.del(task.id)}>Delete</button>
            </div>
            </div>
        }) : <h1>create some tasks for them to be listed here!</h1>}
        <form className="task-creator" onSubmit={onSubmit}>
            <label children='Enter task:'></label>
                <input
                maxLength={20}
                value={taskName}
                onChange={onChange}
                placeholder="Enter task"
                id="task"/>
            <button type='submit'>create</button>
        </form>
      </div>

    </div>
  );
}

export default Body;
