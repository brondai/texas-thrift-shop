import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();

      setTodos(result);
    };

    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      {todos.map((todo) => (
        <h1
          onClick={() => {
            navigate(`/todos/${todo.id}`);
          }}
        >
          {todo.title}
        </h1>
      ))}
    </div>
  );
};

export default Todos;
