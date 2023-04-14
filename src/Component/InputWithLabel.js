import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithLabel = (props) => {
  const { hundleTitleChange, todoTitle, children } = props;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        onChange={hundleTitleChange}
        value={todoTitle}
        type="text"
        id="todoTitle"
        name="title"
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;

InputWithLabel.propTypes = {
  hundleTitleChange: PropTypes.func,
  todoTitle: PropTypes.string,
  children: PropTypes.string.isRequired,
};
