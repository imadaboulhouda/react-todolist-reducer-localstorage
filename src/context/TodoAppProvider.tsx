import React, { Context, createContext } from "react";
import { useReducer, useEffect } from "react";
import { ADD_TODO, REMOVE_TODO, TodoReducer } from "./reducer";

import { v1 as uuid } from "uuid";
import { TodoInterface } from "./TodoInterface";

export type GlobalContext = {
  statex: never | TodoInterface[] | any;
  addTodox: (todo: string) => void;
  removeTodox: (id: string) => void;
};
export const TodoApp = createContext<GlobalContext>({
  addTodox() {},
  removeTodox() {},
  statex: null,
});
type Dispatch = (action: { type: string; todos?: TodoInterface }) => void;
type ISD = {
  statex: never;
  dispatch: Dispatch;
};
export const TodoAppProvider = (props: any) => {
  const [statex, dispatch] = useReducer(TodoReducer, [], () => {
    let local = localStorage.getItem("todoList");
    return local ? JSON.parse(local) : [];
  });
  //on change state change localStorage

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(statex));
  }, [statex]);

  const addTodox = (todo: string) => {
    dispatch({
      type: ADD_TODO,
      todos: {
        id: uuid(),
        name: todo,
        date_item: new Date().getDate() + "/" + new Date().getMonth(),
        done: false,
      },
    });
    console.log(statex);
  };

  const removeTodox = (id: string) => {
    if (Array.isArray(statex)) {
      const todos = statex.filter((v: TodoInterface) => v.id !== id);

      dispatch({
        type: REMOVE_TODO,
        todos,
      });
    }
  };
  return (
    <TodoApp.Provider
      value={
        {
          statex,
          addTodox,
          removeTodox,
        } as GlobalContext
      }
    >
      {props.children}
    </TodoApp.Provider>
  );
};
