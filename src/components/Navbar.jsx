import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
