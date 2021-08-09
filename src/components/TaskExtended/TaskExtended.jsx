import React from "react";
import style from "./TaskExtended.module.scss";

function TaskExtended({ priorityIndex, description, date }) {
  const priorityIndexToString = (priorityIndex) => {
    switch (priorityIndex) {
      case 0:
        return "Low";
      case 1:
        return "Medium";
      case 2:
        return "High";
      default:
        return "Unset";
    }
  };
  
  return (
    <div className={style.TaskExtended}>
      <div className={style.generalInfo}>
        <h2>Priority: {priorityIndexToString(priorityIndex)}</h2>
        <h2>{date.toUTCString()}</h2>
      </div>
      <h2 className={style.description}>{description}</h2>
    </div>
  );
}

export default TaskExtended;
