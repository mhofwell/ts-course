import React, { useRef } from "react";

interface Props {
  onAddTodo: (name: string) => void;
}

function NewTodo(props: Props): JSX.Element {
  // the ref is on an HTML input component so we need to tell TS that its getting that component. Set it to null on init.
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  }

  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button onClick={todoSubmitHandler} type="submit">
        Add Todo
      </button>
    </form>
  );
}
export default NewTodo;
