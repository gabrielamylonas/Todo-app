import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handlInputValue = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add Task..."
        onChange={handlInputValue}
      />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
