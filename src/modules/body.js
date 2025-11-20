import "./body.css"
import { useState } from "react";
import axios from "axios";
const filters = ['All', 'Pending', 'Completed']
function Body(props) {
    const tasks = props.tasks
    const [filter, changeFilter] = useState(0) // ultilizes filters spot on the array
    const [taskName, edit] = useState("") // for inputting new tasks
    const [error, setError] = useState("");
    const onChange = (evt) => {
        edit(evt.target.value)
    }
    const onSubmit = async (evt) => { // creates the new task and submits it to the api
    evt.preventDefault()
     setError(""); // clear previous errors

    // Check if title already exists
    const exists = tasks.some(t => t.title.toLowerCase() === taskName.toLowerCase());
    if (exists) {
        setError("A task with this name already exists.");
        return; // stop submission
    }

    let task = {id: tasks.length+1, title: taskName, status: false, created: new Date().toLocaleString()}
    await axios.post('http://localhost:9000/tasks', task).then(() => {
      props.setTasks([...tasks, task])
      edit('')
    }).catch(err => console.log(err))
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
        <div className="tasks">
            {tasks.length >= 1 ? filtered.map((task) => {
            return <div className="card">
            <div className="card-header" key={task.id}>
                <h2>{task.title}</h2>
                <h3>{task.status ? "completed" : "pending"}</h3>
            </div>
            <h5>{task.created}</h5>
            <div className="card-footer"> 
                <button className="change" onClick={() => props.change(task)}>Change Status</button>
                <button className="delete" onClick={() => props.del(task.id)}>Delete</button>
            </div>
            </div>
        }) : <h1>create some tasks for them to be listed here!</h1>}
        </div>
        <div>
        <form className="task-creator" onSubmit={onSubmit}>
          {error && <p className="error">{error}</p>}

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

    </div>
  );
}

export default Body;
