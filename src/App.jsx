import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => console.log(tasks), [tasks]);

  const handleAddTask = () => {
    let newTask = {
      id: Date.now(),
      date: new Date(),
      name: inputValue,
      priority: 0,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
      vero dicta pariatur odit blanditiis quidem placeat quasi explicabo,
      temporibus, nostrum accusantium. Delectus sint et ratione aliquam
      perspiciatis a nostrum repellendus!`,
      isDone: false,
    };
    let oldArray = [...tasks, newTask];
    setTasks(oldArray);
  };

  const editTask = (id) => {

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
        <Input
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleAddTask={handleAddTask}
        />
        <List
          tasks={tasks}
          deleteTask={deleteTask}
          setCompletedTask={setCompletedTask}
        />
      </div>
    </div>
  );
}

export default App;
