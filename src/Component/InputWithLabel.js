import React, { useRef, useEffect } from "react";

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
