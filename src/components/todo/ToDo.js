import React, {useState} from 'react';
import {AiOutlineDelete, AiOutlineEdit, AiOutlineCheck} from 'react-icons/ai';

// Each row of the todo list
function ToDo({todo, index, completeToDo, editToDo, removeToDo}) {
  return(
    <div className="todo-bar">
      <div className="todo-item" style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
        {todo.text}
      </div>
      <div className="todo-button">
        <button onClick={() => completeToDo(index)}>
          <AiOutlineCheck/>
        </button>
        <button>
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