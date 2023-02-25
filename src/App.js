import React, { useState, useEffect } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import "./index.css";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("savedTodoList")
      ? JSON.parse(localStorage.getItem("savedTodoList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const [todoTitle, setTodoTitle] = useState("");

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    //update from <div> element  to fragment <></>
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        onAddTodo={addTodo}
      />
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
    </>
  );
}

export default App;
