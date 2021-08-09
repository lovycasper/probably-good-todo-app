import React from "react";
import style from "./List.module.scss";

import Task from "./../Task/Task";

function List({ tasks, deleteTask, setCompletedTask }) {
  return (
    <div className={style.List}>
      {tasks && tasks.length ? (
        tasks.map((task) => (
          <React.Fragment key={task.id}>
            <Task
              task={task}
              deleteTask={deleteTask}
              setCompletedTask={setCompletedTask}
            />
          </React.Fragment>
        ))
      ) : (
        <h2 className={style.emptyList}>
          😔 It's seams lonely here, what about adding your first task?
        </h2>
      )}
    </div>
  );
}

export default List;
