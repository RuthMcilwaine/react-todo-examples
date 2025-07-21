import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETED_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_BY_ID_REQUEST,
  FETCH_TODOS_BY_ID_SUCCESS,
  FETCH_TODOS_BY_ID_FAILURE,
} from "../components/actionTypes.js";
import { v4 as uuidv4 } from "uuid";
//import todosResponse from "../mappings/data/loadTodosResponse.json";

const initialState = {
  loading: false,
  todos: null,
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const newTodo = {
        id: uuidv4(),
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.text !== text),
      };
    }
    case COMPLETED_TODO: {
      const { text } = payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.text === text) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};

export const fetchTodosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: payload.todos, loading: false };
    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchTodosByIdReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS_BY_ID_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODOS_BY_ID_SUCCESS:
      return { ...state, todos: payload.todo.id, loading: false };
    case FETCH_TODOS_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
