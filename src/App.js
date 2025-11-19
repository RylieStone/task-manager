import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Body from "./modules/body"
import axios from 'axios'
import './App.css';
let uptasks = [{id: 1, title: "homework", status: false, created: '11:30'}, {id: 2, title: "coding", status: false, created: '11:11'}, {id: 3, title: "dishes", status: true, created: '11:35'}]
function App() {
  useEffect(() => {
    setTasks(uptasks)
  }, [])
  const [tasks, setTasks] = useState([])
  const change = (id) => {
    console.log('ran')
    console.log(uptasks.find((task) => task.id === id))
  }
  const del = (id) => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Manager</h2>
      </header>

      <Body tasks={tasks} change={change} del={del}/>

    </div>
  );
}

export default App;
