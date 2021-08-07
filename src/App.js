import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Current state: ', tasks);
  }, [tasks]);

  const addTask = (inputKey, inputValue) => {
    if (inputKey === 'Enter') {
      const newTask = {
        id: Date.now(),
        name: inputValue,
        isDone: false
      };    
      let tempTasks = [...tasks, newTask];  
      setTasks(tempTasks);
      return true; // returns true to <Input /> and it resets current input value
    }
  };

  const deleteTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const setCompletedTask = (isDone, id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = isDone;
        return task;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <Input addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} setCompletedTask={setCompletedTask} />
    </div>
  );
}

export default App;
