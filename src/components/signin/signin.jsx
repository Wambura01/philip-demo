import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./signin.scss";

function Signin() {
  //initial state
  const initialState = {
    email: "",
    password: "",
  };

  const [users, setUsers] = useState(initialState);

  //handle user input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({
      ...users,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      }).then(() => {
        setUsers(initialState);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="title">SignIn</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <p className="heading">Already have an account?</p>
        <div className="inputs">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            className="input"
            type="email"
            required
            name="email"
            value={users.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            className="input"
            type="password"
            required
            name="password"
            value={users.password}
            onChange={handleChange}
          />
        </div>
        <button className="signin-btn" type="submit">
          Signin
        </button>
      </form>
      <div className="link-container">
        <p className="link">
          Don't have an account?{" "}
          <Link to="/signup" className="span">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
