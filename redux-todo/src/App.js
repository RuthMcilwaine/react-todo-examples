import React from "react";
import TodoList from "./components/TodoList.js";
import NewTodo from "./components/NewTodo.js";
import "./App.css";

const App = () => (
  <div className="App">
    <NewTodo />
    <TodoList />
  </div>
);

export default App;
