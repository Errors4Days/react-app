import React, {useState} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

// Controlling function
function ToDoList() {
  const [todos, setToDos] = useState([]);

  // Functions for todoform
  const addToDo = (text) => {
    const newToDos = [...todos, {text, isComplete: false, show: true}];
    setToDos(newToDos);
  };

  const clearComplete = () => {
    var offset = 0;
    const newToDos = [...todos];
    for (const index in todos) {
      if (todos[index].isComplete) {
        newToDos.splice(index - offset, 1);
        offset += 1;
      }
    };
    console.log(newToDos);
    setToDos(newToDos);
  };

  const selectTasks = (selection) => {
    const newToDos = [...todos];
    for (const index in todos) {
      if (selection === "complete") {
        if (newToDos[index].isComplete) {
          newToDos[index].show = true;
        }
        else {
          newToDos[index].show = false;
        }
      }
      else if (selection === "uncomplete") {
        if (newToDos[index].isComplete) {
          newToDos[index].show = false;
        }
        else {
          newToDos[index].show = true;
        }
      }
      else {
        newToDos[index].show = true;
      }
    }
    setToDos(newToDos);
  }

  // Functions for todo
  const completeToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].isComplete = !newToDos[index].isComplete;
    setToDos(newToDos);
  };

  const editToDo = (index, text) =>{
    const newToDos = [...todos];
    //console.log(newToDos[index]);
    newToDos[index].text = text;
    setToDos(newToDos);
  };

  const removeToDo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return(
  <div className="todo-list">
    <ToDoForm 
      addToDo={addToDo}
      clearComplete={clearComplete}
      selectTasks={selectTasks}
    />

    {todos.map((todo, index) => (
      <ToDo
        key={index}
        index={index}
        todo={todo}
        completeToDo={completeToDo}
        editToDo={editToDo}
        removeToDo={removeToDo}
      />
    ))}
  </div>
  );
}

export default ToDoList;