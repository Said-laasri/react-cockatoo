import React from "react";

function AddTodoForm(props) {
  const { onAddTodo, todoTitle, setTodoTitle } = props;
  const handleTitleChange = (e) => {
    const newTodoTiltle = e.target.value;
    setTodoTitle(newTodoTiltle);
  };

  const hundleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.title.value;
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle(" ");
  };

  return (
    <div>
      <form onSubmit={hundleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          onChange={handleTitleChange}
          value={todoTitle}
          type="text"
          id="todoTitle"
          name="title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
