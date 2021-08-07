import React from "react";
import style from "./List.module.css";

import Task from "./../Task/Task";

function List({ tasks, deleteTask, setCompletedTask }) {
  return (
    <div className={style.List}>
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          name={task.name}
          isDone={task.isDone}
          deleteTask={deleteTask}
          setCompletedTask={setCompletedTask}
        />
      ))}
    </div>
  );
}

export default List;
