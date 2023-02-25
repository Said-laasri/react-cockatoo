import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const { todos, onRemoveTodo } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
