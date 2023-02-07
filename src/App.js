import React, { useState } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState([]); // [todos, setTodos
  const [todoTitle, setTodoTitle] = useState(""); // pass to AddTodoForm

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm 
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
       onAddTodo={addTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;

