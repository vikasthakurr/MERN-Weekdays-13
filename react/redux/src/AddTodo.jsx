import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;
    dispatch(addTodo({ text: inputText }));
  };

  return (
    <div className="mx-auto flex w-full max-w-xl items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <input
        type="text"
        placeholder="enter task... "
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="h-11 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      ></input>

      <button
        onClick={handleClick}
        className="h-11 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.99]"
      >
        AddTodo
      </button>
    </div>
  );
};

export default AddTodo;
