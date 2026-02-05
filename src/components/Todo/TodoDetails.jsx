import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const params = useParams();

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.id}`
      );
      const result = await response.json();
    };

    getTodos();
  }, []);

  return (
    <>
      <div>TodoDetails</div>

      <p>title:</p>
      <p>completed:</p>
    </>
  );
};

export default TodoDetails;
