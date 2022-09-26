import React, { useContext } from "react";
import { TodoApp } from "../context/TodoAppProvider";

const useAction = () => {
  const { statex, removeTodox } = useContext(TodoApp);
  const removeTodo = (id: string) => {
    removeTodox(id);
  };
  return { statex, removeTodo };
};

export default useAction;
