import React from "react";
import style from "./List.module.scss";

import Task from "./../Task/Task";

function List({ tasks, deleteTask, setCompletedTask }) {
  return (
    <div className={style.List}>
      {(tasks && tasks.length) ? tasks.map((task) => (
        <React.Fragment key={task.id}>
          <Task
            id={task.id}
            name={task.name}
            isDone={task.isDone}
            deleteTask={deleteTask}
            setCompletedTask={setCompletedTask}
          />
        </React.Fragment>
      )) : <h1>EMPTY!</h1>}
    </div>
  );
}

export default List;
