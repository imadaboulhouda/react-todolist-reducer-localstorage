import React, { useState, useContext, Context } from "react";
import { GlobalContext, TodoApp } from "../context/TodoAppProvider";

const Form: React.FC = () => {
  const [data, setData] = useState("");
  const { addTodox } = useContext(TodoApp);
  const Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };
  const add = () => {
    addTodox(data);
    setData("");
  };
  return (
    <div className="form">
      <textarea onChange={Change} value={data}>
        {" "}
      </textarea>
      <button onClick={add}>Add</button>
    </div>
  );
};
export default Form;
