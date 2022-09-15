export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todos];

    case REMOVE_TODO:
      return action.todos;
    default:
      return state;
  }
};
