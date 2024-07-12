import { useState } from "react";
import InputFiled from "./components/InputFiled";
import "./todo.css";
import { todo as todoType } from "./modal";

import Task from "./components/Task";
function Todo() {
  // const [todo, settodo] = useState<todoType>({});
  const [todos, setTodos] = useState<todoType[]>([]);
  return (
    <div className="main_div">
      <h1>taskify</h1>
      <InputFiled setTodos={setTodos} />
      <div style={{ display: "flex" }}>
        <div className="cointainer">
          <h3>Yet To Complete . . .</h3>
          {todos.length > 0
            ? todos.map((currtodo) => (
                <Task todo={currtodo} setTodos={setTodos} type="pending"></Task>
              ))
            : null}
        </div>
        <div className="cointainer">
          <h3>Completed Todo ' s</h3>
          {todos.length > 0
            ? todos.map((currtodo) => (
                <Task todo={currtodo} setTodos={setTodos} type="done"></Task>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Todo;
