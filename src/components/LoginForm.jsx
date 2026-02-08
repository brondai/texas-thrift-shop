import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Authentication logic here
    // call /login api -> return
    // const res = await fetch(
    //   "https://fawateer-admin.firstfintech.com/api/auth-service/api/v1/auth/login",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   },
    // );

    // if response is success
    // if (res.status === true) {
    //     localStorage.setItem("token", res.data.access_token)

    localStorage.setItem("token", "xyzzzzzzz");
    alert("Successfully Logged In");

    window.location.reload(); //refresh the page

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6 mx-auto my-10 p-10">
          <div>
            Email:
            <input
              className="border p-2 ml-4"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            Password:
            <input
              className="border p-2 ml-4"
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="border p-2 font-bold cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
