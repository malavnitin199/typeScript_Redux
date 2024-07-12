import React, { FormEvent, useState } from "react";
import { todo as todoType } from "../modal";
type InputProps = {
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};
function InputFiled({ setTodos }: InputProps) {
  const [input, setInput] = useState<string>("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.length <= 0) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.random(), isDone: false, todo: input },
    ]);
    // e.currentTarget.reset();
    //not woprking

    setInput("");
  }

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <input
          className="input_box"
          value={input}
          placeholder="Enter the goals..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="input_submit">GO</button>
      </form>
    </div>
  );
}

export default InputFiled;
