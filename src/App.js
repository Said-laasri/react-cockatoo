import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./Component/TodoApp";
import NewTodo from "./Component/NewTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/new" element={<NewTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;