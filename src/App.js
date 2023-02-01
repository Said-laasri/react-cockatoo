import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './index.css';

function App() {
    return (
    <div style={{ textAlign: 'center' }}>
      <header>
       <h1>Todo List</h1>
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
