import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import { removeTodo, completedTodo } from "./actionTypes.js";
import { fetchTodos } from "./thunks.js";

const TodoList = ({
  todos = [],
  loading,
  onRemoveTodo,
  onCompleted,
  fetchTodos,
}) => {
  useEffect(() => {
    fetchTodos(); // Dispatch fetchTodos() when the component mounts
  }, [fetchTodos]);

  return (
    <div className="list-wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (text) => dispatch(removeTodo(text)),
  onCompleted: (text) => dispatch(completedTodo(text)),
  fetchTodos: () => dispatch(fetchTodos()), // Map fetchTodos action to props
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
