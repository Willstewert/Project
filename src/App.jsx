import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="w-full h-[100vh] bg-black text-white flex items-center justify-center">
        <div className="">
         
          <TodoForm></TodoForm>
          <ul>
            {todos.map((items) => {
              return <TodoItems key={items.id} {...items}></TodoItems>;
            })}
          </ul>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
