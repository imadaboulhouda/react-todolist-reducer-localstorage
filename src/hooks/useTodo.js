import { useContext } from "react";
import { TodoApp } from "../context/TodoAppProvider";

export const useTask = () => {
  const { statex, removeTodox } = useContext(TodoApp);

  return { statex, removeTodox };
};
