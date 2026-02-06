import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    body: "",
    id: "",
  });

  const handleChange = (e, name) =>
    setTodo({ ...todo, [name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        body: todo.body,
        id: todo.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTodo({ title: "", description: "", completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg gap-3">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Add a New Todo</h2>
        <input
          type="text"
          className="border border-blue-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Todo title (required)"
          value={todo.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Description (optional)"
          value={todo.description}
          onChange={(e) => handleChange(e, "description")}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition disabled:bg-blue-200 disabled:cursor-not-allowed"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
