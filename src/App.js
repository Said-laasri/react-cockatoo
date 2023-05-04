import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./Component/TodoContainer";
import NewTodo from "./Component/NewTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/new" element={<NewTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;