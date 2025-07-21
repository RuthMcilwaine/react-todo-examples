import React, { useState } from 'react';

const Todo = ({ id, task, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(id, newTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={newTask} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <li>{task}</li>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>X</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
