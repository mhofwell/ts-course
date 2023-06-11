import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";
import { ToDo } from "./todo.model";

function App(): JSX.Element {
  const [todos, setToDoList] = useState<ToDo[]>([]);

  function onAddTodo(name: string) {
    const newTodo = new ToDo(Math.random(), name);
    console.log(newTodo);
    setToDoList((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteToDoHandler(id: number) {

    setToDoList((prevTodos) => {
      // keep all items except the one we want to delete
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo} />
      <ToDoList deleteToDoHandler={deleteToDoHandler} items={todos} />
    </div>
  );
}

export default App;
