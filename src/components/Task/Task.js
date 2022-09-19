import React from "react";
import { TaskItem } from "./TaskItem";
import "./task.css";
import useAction from "../../hooks/useAction";

const Task = () => {
  const { statex, removeTodo } = useAction();
  const remove = (id) => {
    removeTodo(id);
  };

  if (statex && statex.length > 0) {
    return (
      <div>
        {statex.map(({ id, name, date_item }, k) => {
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
