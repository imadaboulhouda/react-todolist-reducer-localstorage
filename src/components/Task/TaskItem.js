import React from "react";
export const TaskItem = ({ id, name, date_item, removeTodo }) => {
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
