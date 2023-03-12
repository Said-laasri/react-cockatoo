import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const { onAddTodo } = props;
  const hundleTitleChange = (e) => {
    const newTodoTiltle = e.target.value;
    setTodoTitle(newTodoTiltle);
  };

  const hundleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.title.value;
    //prevent empty todo title
    todoTitle.trim() === ""
      ? alert("Please enter a todo title")
      : onAddTodo({ title: todoTitle, id: Date.now() });
    e.target.title.value = "";
  };

  return (
    <div>
      <form onSubmit={hundleAddTodo}>
        <InputWithLabel onChange={hundleTitleChange} value={todoTitle}>
          Title
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
