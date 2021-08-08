import React from "react";
import style from "./Task.module.scss";

function Task({ id, name, isDone, deleteTask, setCompletedTask }) {
  return (
    <div className={style.Task}>
      <input
        type="checkbox"
        id="setAsCompleted"
        onChange={(e) => setCompletedTask(e.target.checked, id)}
        checked={isDone}
      />
      <label htmlFor="setAsCompleted">{name}</label>
      <button onClick={() => deleteTask(id)}>
        <span>X</span>
      </button>
    </div>
  );
}

export default Task;
