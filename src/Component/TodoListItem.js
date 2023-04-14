import React from "react";
import PropTypes from "prop-types";
import style from "./TodoListItem.module.css";

const TodoListItem = (props) => {
  const { todo, onRemoveTodo, title } = props;

  return (
    <li className={style.ListItem}>
      {title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
