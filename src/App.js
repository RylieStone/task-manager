import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
const uptasks = [{title: "homework", status: false, created: '11:30'}, {title: "coding", status: false, created: '11:11'}, {title: "dishes", status: true, created: '11:35'}]
function App() {
  useEffect(() => {
    setTasks(uptasks)
  }, [])
  const {tasks, setTasks} = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Manager</h2>
      </header>

      <div className='body'>
        <h1>hi</h1>
      </div>

    </div>
  );
}

export default App;
