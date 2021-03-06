import React from "react";
import style from "./Input.module.scss";

function Input({ setInputValue, inputValue, handleAddTask }) {
  return (
    <div className={style.Input}>
      <input
        type="text"
        required
        placeholder="Give a short title for your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? handleAddTask() : null)}
      />
    </div>
  );
}

export default Input;
