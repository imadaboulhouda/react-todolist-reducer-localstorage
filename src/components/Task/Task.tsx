import React from "react";
import { TaskItem } from "./TaskItem";
import "./task.css";
import useAction from "../../hooks/useAction";
import { TodoInterface } from "../../context/TodoInterface";
type State = TodoInterface;
const Task = () => {
  const { statex, removeTodo } = useAction();
  const remove = (id: string) => {
    removeTodo(id);
  };

  if (statex && statex.length > 0) {
    return (
      <div>
        {statex.map(({ id, name, date_item }: State, k: any) => {
          return (
            <TaskItem
              key={k}
              id={id}
              name={name}
              removeTodo={remove}
              date_item={date_item}
            />
          );
        })}
      </div>
    );
  }
  return <div></div>;
};

export default Task;
