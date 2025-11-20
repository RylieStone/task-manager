import { useState, useEffect } from 'react';
import Body from "./modules/body";
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get('http://localhost:9000/tasks')
        .then((res) => {
          const normalized = res.data.map(t => ({
          id: t.task_id,
          title: t.title,
          status: t.status,
          created: t.created_at
        }))
        setTasks(normalized)
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);

  const change = async (taskc) => {
    const updatedStatus = !taskc.status;

    // PATCH correct data
    await axios.patch(`http://localhost:9000/tasks/${taskc.id}`, {
      status: updatedStatus
    }).catch(err => console.log(err));

    // Update UI
    let newTasks = tasks.map((task) =>
      task.id === taskc.id ? { ...task, status: updatedStatus } : task
    );
    setTasks(newTasks);
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:9000/tasks/${id}`).catch(err => console.log(err));
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Manager</h2>
      </header>

      <Body tasks={tasks} change={change} del={del} setTasks={setTasks} />
    </div>
  );
}

export default App;
