import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  useEffect(() => {

  }, [])
  const {tasks, setTasks} = useState()
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
