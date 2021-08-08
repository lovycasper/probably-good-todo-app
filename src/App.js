import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
      <div className="tasksWrapper">
        <Input setInputValue={setInputValue} inputValue={inputValue} handleAddTask={handleAddTask} />
        <List tasks={tasks} deleteTask={deleteTask} setCompletedTask={setCompletedTask} />
      </div>
    </div>
  );
}

export default App;
