import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { FiArrowRight } from "react-icons/fi";
import LoadIcon from "./LoadIcon";
import style from "./TodoApp.module.css";

// Airtable API base URL
const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

// Airtable API headers
const airtableHeaders = {
  Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: airtableHeaders,
    };

    fetch(
      `${airtableUrl}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${
        isAscending ? "asc" : "desc"
      }`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTodoList(response.records);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [isAscending]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  const removeTodo = (id) => {
    const todoToDelete = todoList.find((todo) => todo.id === id);

    const options = {
      method: "DELETE",
      headers: airtableHeaders,
    };

    fetch(`${airtableUrl}/${todoToDelete.id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete todo");
        }
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const addTodo = (newTodo) => {
    const options = {
      method: "POST",
      headers: airtableHeaders,
      body: JSON.stringify({ fields: { Title: newTodo.title } }),
    };

    fetch(airtableUrl, options)
      .then((response) => response.json())
      .then((response) => {
        const airtableTodo = {
          id: response.id,
          fields: { Title: newTodo.title },
        };
        setTodoList([...todoList, airtableTodo]);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <>
      <header>
        <h1 className={style.header}>Todo List</h1>
      </header>
      <button className={style.btn} onClick={toggleSortOrder}>
        {isAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading && <LoadIcon />}
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
      <br />
      <button className={style.btn}>
        <Link className={style.links} to={"/new"}>
          New <FiArrowRight />
        </Link>
      </button>
    </>
  );
}

export default TodoContainer;
