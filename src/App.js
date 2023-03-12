import React, { useState, useEffect } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import LoadIcon from "./Component/LoadIcon";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList") || []),
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  return (
    //update from <div> element  to fragment <></>
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm
        onAddTodo={addTodo}
      />
      {isLoading && <LoadIcon />}
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
    </>
  );
}

export default App;
