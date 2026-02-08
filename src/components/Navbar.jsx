import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <Link to="/" className="border text-md m-4">
            Home
          </Link>
          <Link to="/about" className="border text-md m-4">
            About
          </Link>
          <Link to="/contact" className="border text-md m-4">
            Contact Page
          </Link>
          <Link to="/todos" className="border text-md m-4">
            Todos
          </Link>

          <button
            className="ml-20 border text-red-500 p-2 rounded"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
