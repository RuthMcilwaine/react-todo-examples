import React, { useState } from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

function TodoList() {
  const [todos, setTodos] = useState([
    { task: 'shopping', id: 3456 },
    { task: 'laundry', id: 2345 },
  ]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm createTodo={create} />
      <ul>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            task={todo.task}
            removeTodo={remove}
            editTodo={edit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
