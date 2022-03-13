import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const catOptions = categories.filter(category=>category!=="All").map(category=>{
   return(
      <option key={category}>{category}</option>
    ) 
  })
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
