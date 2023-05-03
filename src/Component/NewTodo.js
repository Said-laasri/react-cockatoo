import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import style from "./TodoApp.module.css";
import "../index.css";


const NewTodo = () => {
  return (
    <>
      <header>
        <h1 className={style.header}>New Todo List</h1>
      </header>
      <br />
      <br />
      <button className={style.btn}>
        <Link className={style.links} to={"/"}>
         <FiArrowLeft />  Home
        </Link>
      </button>
    </>
  );
};

export default NewTodo;
