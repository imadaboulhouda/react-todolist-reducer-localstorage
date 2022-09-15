import { ADD_TODO, REMOVE_TODO, TodoReducer } from "../context/reducer";
import uuid from "uuid/v1";
import { useEffect, useReducer } from "react";

export default function useAction() {
  const [statex, dispatch] = useReducer(TodoReducer, [], () => {
    let local = localStorage.getItem("todoList");
    return local ? JSON.parse(local) : [];
  });
  //on change state change localStorage

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(statex));
  }, [statex]);

  const addTodox = (todo) => {
    dispatch({
      type: ADD_TODO,
      todos: {
        id: uuid(),
        name: todo,
        date_item: new Date().getDate() + "/" + new Date().getMonth(),
        done: false,
      },
    });
  };

  const removeTodox = (id) => {
    const todos = statex.filter((v) => v.id !== id);

    dispatch({
      type: REMOVE_TODO,
      todos,
    });
  };

  return { removeTodox, addTodox, statex };
}
