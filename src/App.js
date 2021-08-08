import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Current tasks state: ', tasks);
  }, [tasks]);

  useEffect(() => {
    console.log('Current inputValue state: ', inputValue);
  }, [inputValue]);

  const handleAddTask = () => {
    let newTask = {
      id: Date.now(),
      name: inputValue,
      isDone: false
    }
    let oldArray = [...tasks, newTask];
    setTasks(oldArray);
  }

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
      <Input setInputValue={setInputValue} inputValue={inputValue} handleAddTask={handleAddTask} />
      <List tasks={tasks} deleteTask={deleteTask} setCompletedTask={setCompletedTask} />
    </div>
  );
}

export default App;
