import React, {useState} from 'react';
import {AiOutlineDelete, AiOutlineEdit, AiOutlineCheck, AiOutlinePlus} from 'react-icons/ai';

// Each row of the todo list
function ToDo({todo, index, completeToDo, editToDo, removeToDo}) {
  const [edit, changeEdit] = useState(false);

  const toggle = (e) => {
    changeEdit(!edit);
  };

  const [value, setValue] = useState("");

  const handleEdit = (e, index) => {
    e.preventDefault();
    changeEdit(!edit);
    if (value){
      editToDo(index, value);
      setValue("");
    }

  };

  return(
    <div className="todo-bar" style={{display: todo.show ? "flex" : "none"}}>
      <div style={{display: edit ? "none" : "inherit"}}>
        <div className="todo-item" style={{textDecorationLine: todo.isComplete ? "line-through" : ""}}>
          {todo.text}
        </div>
      </div>

      <form style={{display: edit ? "flex" : "none"}} onSubmit={e => handleEdit(e, index)}>
        <input
          className="todo-edit"
          placeholder="Edit task here"
          onChange={e => setValue(e.target.value)}
          type="text"
          value={value}
        />
        <button>
          <AiOutlinePlus/>
        </button>
      </form>

      <div className="todo-button">
        <button onClick={() => completeToDo(index)}>
          <AiOutlineCheck/>
        </button>
        <button onClick={toggle}>
          <AiOutlineEdit/>
        </button>
        <button onClick={() => removeToDo(index)}>
          <AiOutlineDelete/>
        </button>
      </div>
    </div>
  );
};

export default ToDo;