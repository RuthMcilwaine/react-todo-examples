import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ createTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask('');
  };

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="NewTodo">
          <input
            type="text"
            placeholder="NewTodo"
            id="task"
            name="task"
            value={task}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
export default TodoForm;
