import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useTodo } from "../context/TodoContext";
const TodoItems = (todo) => {

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  
  return (
    <li
      className="flex todo-center justify-between bg-slate-600 px-1 py-1 rounded-r-lg rounded-l-md mt-2"
      key={todo.id}
    >
      <div className="">
        {" "}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          name=""
          id=""
        />
        <input
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          className="border-none bg-slate-600 outline-none px-2"
          type="text"
          name=""
          id=""
        />
      </div>

      <div className="">
        <button
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          className={` ${isTodoEditable?"bg-blue-400":"bg-yellow-400" } px-1 py-1 rounded-md mr-2` }
        >
          {isTodoEditable ? <FaSave></FaSave> : <MdEdit></MdEdit>}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-400 px-1 py-1 rounded-md"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
