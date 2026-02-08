import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      const result = await response.json();

      setTodos(result);
    };

    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <AddTodo />

      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
