import { FETCH_TODOS_SUCCESS } from "../components/thunks";
import loadTodosResponse from "./data/loadTodosResponse.json";

const loadTodos = ({ onSuccess }) => {
  onSuccess(loadTodosResponse);
};

const MemoryMapping = {
  [FETCH_TODOS_SUCCESS]: loadTodos,
};

export default MemoryMapping;
