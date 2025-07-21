import React from "react";
import { useEffect } from "react";

const TodoItem = ({ todo, onRemoveTodo, onCompleted, fetchTodosById }) => {
  useEffect(() => {
    fetchTodosById(todo.id);
  }, [fetchTodosById, todo]);

  return (
    <div className="todo-item-container">
      <h3>{todo.id}</h3>
      <div className="buttons-container">
        <button onClick={() => onCompleted(todo.id)} className="remove-button">
          Completed
        </button>
        <button onClick={() => onRemoveTodo(todo.id)} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
