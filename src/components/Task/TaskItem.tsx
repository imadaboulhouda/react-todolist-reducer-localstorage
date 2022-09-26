import React from "react";
import { TodoInterface } from "../../context/TodoInterface";
type Iprops = {
  id: string;
  name: string;
  date_item: string;
  removeTodo: (id: string) => void;
};
export const TaskItem = ({ id, name, date_item, removeTodo }: Iprops) => {
  return (
    <div key={id} className={"listItem"}>
      <div className="ListDate">
        <div className="Date"> {date_item} </div>
      </div>
      <div className="Task">{name}</div>
      <div
        className="done"
        onClick={(e) => {
          e.preventDefault();

          removeTodo(id);
        }}
      >
        x
      </div>
    </div>
  );
};
