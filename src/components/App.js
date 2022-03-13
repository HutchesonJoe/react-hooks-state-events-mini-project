import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTaskList] = useState(TASKS)
const [newTask, setNewTask] = useState("")
  
function catFilter(e){
  e.target.className = "Selected"
  if (e.target.id === "All")
  {setTaskList(TASKS)} else {
    const filteredList = tasks.filter(task=>task.category===e.target.id)
    setTaskList(filteredList)}
}

function handleAddTask(e){
  e.preventDefault() 
  const newTaskName = e.target.text.value
  const newTaskCat = e.target.category.value
  const thisTask = {
    text: newTaskName,
    category: newTaskCat
  }
  setTaskList([...tasks, thisTask])
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catFilter={catFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} newTask={newTask} setNewTask={setNewTask}/>
      <TaskList tasks = {tasks} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
