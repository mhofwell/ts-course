import React from "react";
import { ToDo } from "../todo.model";

interface Props {
  items: ToDo[];
  deleteToDoHandler: (id: number) => void;
}

function ToDoList(props: Props): JSX.Element {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          {/* need to use bind() below */}
          <button onClick={props.deleteToDoHandler.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
