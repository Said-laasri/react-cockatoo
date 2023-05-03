import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const { todos, onRemoveTodo } = props;
  return (
    <div>
      {
        // Check if the todos array length is 0
        todos.length === 0 ? null : (
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
        )
      }
      {
        // If todos array length is 0, show the alert message
        todos.length === 0 && (
          <p className={classes.alert}>No todos For Today!! Please add one.</p>
        )
      }
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
