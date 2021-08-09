import React, { useState } from "react";
import TaskExtended from "../TaskExtended/TaskExtended";
import style from "./Task.module.scss";

function Task({ task, deleteTask, setCompletedTask, editTask }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={style.Task}>
      <input
        type="checkbox"
        id="setAsCompleted"
        onChange={(e) => setCompletedTask(e.target.checked, task.id)}
        checked={task.isDone}
      />
      <h2 onClick={() => setVisible(!visible)}>{task.name}</h2>
      <div>
        <button onClick={() => editTask(task.id)}>
          <span>E</span>
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <span>D</span>
        </button>
      </div>

      {visible && (
        <TaskExtended
          priority={task.priority}
          description={task.description}
          date={task.date}
        />
      )}
    </div>
  );
}

export default Task;
