import React from "react";

const TodoListItem = (props) => {
  const { todo } = props;

  return <li>{todo.title}</li>;
};

export default TodoListItem;
