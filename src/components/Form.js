import React, { useState, useContext } from "react";
import { TodoApp } from "../context/cp";

const Form = () => {
  const [data, setData] = useState("");
  const { addTodox } = useContext(TodoApp);
  const Change = (e) => {
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
