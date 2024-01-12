import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import { Stats } from "./Stats";

const TasksList = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  };

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div>
      <div className="container">
        <h1>Task Controller</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </div>
  );
};

export default TasksList;
