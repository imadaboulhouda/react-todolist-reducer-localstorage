import React, { createContext } from "react";
import useAction from "../hooks/useAction";

export const TodoApp = createContext();

export const TodoAppProvider = (props) => {
  const { addTodox, removeTodox, statex } = useAction();

  return (
    <TodoApp.Provider
      value={{
        statex,
        addTodox,
        removeTodox,
      }}
    >
      {props.children}
    </TodoApp.Provider>
  );
};
