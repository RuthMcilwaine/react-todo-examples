import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
  todosReducer,
  fetchTodosByIdReducer,
  fetchTodosReducer,
} from "../reducers/reducers.js";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  todosReducer: todosReducer,
  fetchTodos: fetchTodosReducer,
  fetchTodosById: fetchTodosByIdReducer,
});
const middleware = [thunkMiddleware];

const store = configureStore({
  rootReducer,
  middleware,
});

export default store;
