import { TodoInterface } from "./TodoInterface";

export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
type Action = {
  type: "add_todo" | "remove_todo";
  todos: TodoInterface | TodoInterface[];
};
type State = [] | TodoInterface[] | TodoInterface;
export const TodoReducer = (state: State = [], action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      if (Array.isArray(state) && !Array.isArray(action.todos)) {
        return [...state, action.todos];
      }

    case REMOVE_TODO:
      return action.todos;
    default:
      return state;
  }
};
