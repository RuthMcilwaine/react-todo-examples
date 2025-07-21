import React from 'react';
import { v4 as uuid } from 'uuid';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: '' });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="NewTodo">
            <input
              type="text"
              placeholder="NewTodo"
              id="task"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
