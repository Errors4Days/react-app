import React, {useState} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

// Controlling function
function ToDoList() {
  const [todos, setToDos] = React.useState([
    {text: "testing"}
  ]);

  const removeToDo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  const addToDo = (text) => {
    const newToDos = [...todos, {text}];
    setToDos(newToDos);
  };

  const completeToDo = index => {
    const newToDos = [...todos];
    newToDos[index].isComplete = !newToDos[index].isComplete;
    setToDos(newToDos);
  };

  const editToDo = (index) =>{

  };

  return(
  <div className="todo-list">
    <ToDoForm addToDo={addToDo}/>

    {todos.map((todo, index) => (
      <ToDo
        key={index}
        index={index}
        todo={todo}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
      />
    ))}
  </div>
  );
}

export default ToDoList;