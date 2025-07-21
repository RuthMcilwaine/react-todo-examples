import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'shopping', id: 3456 },
        { task: 'laundry', id: 2345 },
      ],
    };
  }
  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        id={todo.id}
        key={todo.id}
        task={todo.task}
        removeTodo={this.remove}
      />
    ));
    console.log('todos' + this.state.todos);
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
export default TodoList;
