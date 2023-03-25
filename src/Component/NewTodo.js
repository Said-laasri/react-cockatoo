import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../index.css";


const NewTodo = () => {
  return (
    <>
      <header>
        <h1>New Todo List</h1>
      </header>
      <br />
      <br />
      <button>
        <Link className="links" to={"/"}>
         <FiArrowLeft />  Home
        </Link>
      </button>
    </>
  );
};

export default NewTodo;
