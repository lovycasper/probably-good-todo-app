import React from "react";
import style from "./Input.module.css";

function Input( { addTask } ) {
  
  return (
    <div>
      <input
        type="text"
        required
        placeholder="What you need to do?"
        onKeyPress={(e) => {
          let isSuccess = addTask(e.key, e.target.value);
          // if task added successfully we wipe input value
          if (isSuccess) e.target.value = '';
        }}
      />
    </div>
  );
}

export default Input;
