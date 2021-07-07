import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function ToDoForm({addToDo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value){
      addToDo(value);
      setValue("");
    }
  };

  return(
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="Add new task here"
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />

      <button className="todo-new">
        <AiOutlinePlus/>
      </button>

      
    </form>
  );
}

export default ToDoForm;