import React from "react";

function CategoryFilter({categories, catFilter}) {
  const buttonList = categories.map((category)=>{
    return (
      <button key={category} onClick={catFilter} id={category}>{category}</button>
    )
  })

  return (
    <div className={categories}>
      <h5>Category filters</h5>
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
