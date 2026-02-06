import React from "react";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="flex justify-between border rounded-2xl p-4 m-4">
      <h1
        onClick={() => {
          navigate(`/todos/${todo.id}`);
        }}
      >
        {todo.title}
      </h1>

      <button
        onClick={() => {
          handleDelete();
        }}
        className="text-red-500 border rounded-l-lg p-2 m-4 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
