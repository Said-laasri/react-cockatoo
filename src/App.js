import React, { useState, useEffect } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import LoadIcon from "./Component/LoadIcon";
import "./index.css";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())

      .then((response) => {
        console.log(response.records);
        setTodoList(response.records);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

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
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading && <LoadIcon />}
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
    </>
  );
}

export default App;
