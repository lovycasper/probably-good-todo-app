import React from "react";
import style from "./Task.module.css";

function Task({ id, name, isDone, deleteTask, setCompletedTask }) {
  return (
    <div className={style.Item}>
      <input
        type="checkbox"
        onChange={(e) => setCompletedTask(e.target.checked, id)}
        checked={isDone}
      />
      <h2>{name}</h2>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}

export default Task;
