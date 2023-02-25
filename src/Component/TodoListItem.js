import React from "react";

const TodoListItem = (props) => {
  const { todo, onRemoveTodo} = props;

  return (
    <li>
      {todo.title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
