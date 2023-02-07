import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
