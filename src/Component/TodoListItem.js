import React from "react";

const TodoListItem = (props) => {
  const { todo, onRemoveTodo, title} = props;

  return (
    <li>
      {title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
