import { useContext } from "react";
import { TodoApp } from "../context/cp";

export const useTask = () => {
  const { statex, removeTodox } = useContext(TodoApp);

  return { statex, removeTodox };
};
