import React from 'react';

class Todo extends React.Component {
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}
export default Todo;
