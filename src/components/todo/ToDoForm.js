import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function ToDoForm({addToDo, clearComplete, selectTasks}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value){
      addToDo(value);
      setValue("");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearComplete();
  };

  const handleFilter = (e) => {
    e.preventDefault();
    selectTasks(document.getElementById("todo-filter").value);
  };

  return(
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          placeholder="Add new task here"
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button className="todo-new" type="submit">
          <AiOutlinePlus/>
        </button>
      </form>

      <form className="todo-form" onSubmit={handleClear}>
        <button className="todo-form-buttons" type="submit">
          Delete Finished Tasks
        </button>
      </form>

      <form className="todo-form" onChange={handleFilter}>
        <select className="todo-form-buttons" id="todo-filter">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="uncomplete">Uncompleted</option>
        </select>
      </form>
    </div>
    
  );
}

export default ToDoForm;