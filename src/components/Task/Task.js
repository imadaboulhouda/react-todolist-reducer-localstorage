/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { TaskItem } from "./TaskItem";
import "./task.css";
import useAction from "../../hooks/useAction";

const Task = () => {
  const { removeTodox, statex: data } = useAction();

  const removeTodo = (id) => {
    removeTodox(id);
  };

  if (data && data.length > 0) {
    return (
      <div>
        {data.map((i, k) => {
          return (
            <TaskItem
              key={k}
              id={i.id}
              name={i.name}
              removeTodo={removeTodo}
              date_item={i.date_item}
            />
          );
        })}
      </div>
    );
  }
  return <div></div>;
};

export default Task;
