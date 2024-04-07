import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useTodo } from "../context/TodoContext";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
  };
  return (
    <form onSubmit={add} className="flex w-[400px]">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="bg-slate-500 border-none outline-none w-full rounded-l-md px-2"
      />
      <button type="submit" className="btn bg-green-500 rounded-r-md px-2">
        <IoMdAdd></IoMdAdd>
      </button>
    </form>
  );
};

export default TodoForm;
