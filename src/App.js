import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Body from "./modules/body"
import axios from 'axios'
import './App.css';
function App() {
  useEffect(() => {
    // add axios
    setTasks()
  }, [])
  const [tasks, setTasks] = useState([])
  const change = (id) => {
    let newTasks = tasks.map((task) => task.id === id ? {...task, status: !task.status} : task)
    setTasks(newTasks)
    // add axios
  }
  const del = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Manager</h2>
      </header>

      <Body tasks={tasks} change={change} del={del} setTasks={setTasks}/>

    </div>
  );
}

export default App;
