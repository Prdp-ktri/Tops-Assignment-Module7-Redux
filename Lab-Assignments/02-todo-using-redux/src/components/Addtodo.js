import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/todoState";

export default function Addtodo() {
  const [text, setText] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodoList((oldList) => [
      ...oldList,
      {
        id: Date.now(),
        text,
        isComplete: false,
      },
    ]);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}