import React from "react";
import { Link } from "react-router-dom";

import "./signup.scss";

function Signup() {
  return (
    <div className="signup-container">
      <h2 className="title">SignUp</h2>
      <form className="signup-form">
        <p className="heading">Don't have an account?</p>
        <div className="inputs">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input className="input" type="email" required name="email" />
        </div>
        <div className="inputs">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input className="input" type="password" required name="password" />
        </div>
        <div className="inputs">
          <label htmlFor="password" className="label">
            Confirm Password:
          </label>
          <input className="input" type="password" required name="password" />
        </div>
        <button className="signup-btn" type="submit">
          Signup
        </button>
      </form>
      <div className="link-container">
        <p className="link">
          Already have an account?{" "}
          <Link to="/" className="span">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
