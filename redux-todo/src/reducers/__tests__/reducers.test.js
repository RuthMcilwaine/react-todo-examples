import {
  COMPLETED_TODO,
  CREATE_TODO,
  FETCH_TODOS_FAILURE,
  // FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
} from "../../components/actionTypes";
import { todosReducer, fetchTodosReducer } from "../reducers";

describe("todosReducer", () => {
  describe("CREATE_TODO", () => {
    it("should add new todo to list", () => {
      const state = {
        loading: false,
        todos: [],
      };

      const action = { type: CREATE_TODO };
      const nextState = todosReducer(state, action);

      console.log(nextState.todos);
      expect(nextState.todos.length).toBe(1);
    });
  });

  describe("REMOVE_TODO", () => {
    it("should remove the specified todo from list", () => {
      const state = {
        loading: false,
        todos: [{ text: "Shopping", isCompleted: false }],
      };
      const action = {
        type: REMOVE_TODO,
        payload: { text: "Shopping" },
      };
      const nextState = todosReducer(state, action);

      console.log(nextState.todos);
      expect(nextState.todos.some((todo) => todo.text === "Shopping")).toBe(
        false
      );
    });
  });

  describe("COMPLETED_TODO", () => {
    it("should mark todo as completed", () => {
      const state = {
        loading: false,
        todos: [{ text: "Shopping", isCompleted: false }],
      };
      const action = {
        type: COMPLETED_TODO,
        payload: { text: "Shopping" },
      };
      const nextState = todosReducer(state, action);
      console.log(nextState.todos);

      const completedTodo = nextState.todos.find(
        (todo) => todo.text === "Shopping"
      );
      console.log(completedTodo);
      expect(completedTodo.isCompleted).toBe(true);
    });
  });
});

describe("FETCH_TODOS_SUCCESS", () => {
  it("should update state with todo list when FETCH_TODOS_SUCCESS action is dispatched", () => {
    const state = {
      loading: true,
      todos: [],
    };

    const successAction = {
      type: FETCH_TODOS_SUCCESS,
      payload: {
        todos: [
          { id: 1, text: "Buy groceries", isCompleted: false },
          { id: 2, text: "Do laundry", isCompleted: false },
          { id: 3, text: "Walk the dog", isCompleted: false },
        ],
      },
    };

    const expectedState = {
      loading: false,
      todos: [
        { id: 1, text: "Buy groceries", isCompleted: false },
        { id: 2, text: "Do laundry", isCompleted: false },
        { id: 3, text: "Walk the dog", isCompleted: false },
      ],
    };
    const newState = fetchTodosReducer(state, successAction);
    console.log(newState);
    console.log(expectedState);

    expect(newState).toEqual(expectedState);
  });
});

describe("FETCH_TODOS_FAILURE", () => {
  it("should return error when FETCH_TODOS_FAILURE action is dispatched", () => {
    const state = {
      loading: true,
      todos: [],
      error: null,
    };

    const error = "An error occurred";

    const failureAction = {
      type: FETCH_TODOS_FAILURE,
      payload: error,
    };

    const newState = fetchTodosReducer(state, failureAction);
    console.log(newState);

    expect(newState.error).toEqual(error);
  });
});
