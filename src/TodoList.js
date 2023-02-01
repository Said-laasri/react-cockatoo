import React from 'react';

function TodoList(){

    const todoList = [{id: 1, title: 'Submit Assignement'},{id: 2, title: 'Watch video'},{id: 3, title: 'Read lesson'}];

return(
    <div>
         <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
)
}

export default TodoList;  