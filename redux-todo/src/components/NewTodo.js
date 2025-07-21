import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actionTypes';

const NewTodo = ({ todos, createTodo }) => {
  const [inputValue, setInputValue] = useState('');

    return (
      <div className="NewTodo">
        <input
          type="text"
          placeholder="Type new todo here"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                      createTodo(inputValue);
                        setInputValue('');
                    }
                }}>Save</button>
      </div>
    );
  }

  const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    createTodo: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
