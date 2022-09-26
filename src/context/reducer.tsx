import { TodoInterface } from "./TodoInterface";

export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
type Action =
  | { type: "remove_todo"; todos: TodoInterface[] }
  | {
      type: "add_todo";
      todos: TodoInterface;
    };
type State = [] | TodoInterface[] | TodoInterface;
export const TodoReducer = (state: State = [], action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      if (Array.isArray(state)) {
        return [...state, action.todos];
      }
      return state;

    case REMOVE_TODO:
      return action.todos;

    default:
      return state;
  }
};
