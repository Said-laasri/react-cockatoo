import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const { todos, onRemoveTodo } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            onRemoveTodo={onRemoveTodo}
            key={todo.id}
            title={todo.title || todo.fields.Title}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
