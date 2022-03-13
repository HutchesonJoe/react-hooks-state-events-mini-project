import React from "react";
import Task from "./Task"
// import { v4 as uuid } from "uuid";

function TaskList({tasks, setTaskList}) {
  const thisTaskList = tasks.map(task => 
      <Task text={task.text} key={task.text} category={task.category} deleteTask={deleteTask}/>
  )

  function deleteTask(e){
    const thisTask = e.target.name
    const newTaskList = tasks.filter((task) => (task.text !== thisTask))
    setTaskList(newTaskList)
  }

  return (
    <div className="tasks">
      {thisTaskList}
    </div>
  );
}

export default TaskList;
