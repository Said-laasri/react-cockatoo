import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { FiArrowRight } from "react-icons/fi";
import LoadIcon from "./LoadIcon";
import style from "./TodoApp.module.css";
// Title sorting
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
// createdTime sorting
// const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=createdTime&sort[0][direction]=asc`;

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

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
        //sort the todo list by title and direction based on the isAscending state
        response.records.sort((objectA, objectB) => {
          const direction = isAscending ? 1 : -1;
          if (objectA.fields.Title < objectB.fields.Title) {
            return direction;
          }
          if (objectA.fields.Title > objectB.fields.Title) {
            return -direction;
          }
          return 0;
        });
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
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <>
      <header>
        <h1 className={style.header}>Todo List</h1>
      </header>
      <button onClick={toggleSortOrder}>
        {isAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading && <LoadIcon />}
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
      <br />
      <button>
        <Link className={style.links} to={"/new"}>
          New <FiArrowRight />
        </Link>
      </button>
    </>
  );
}

export default TodoApp;
