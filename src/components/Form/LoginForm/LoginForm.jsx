import React from "react";
import "./LoginForm.scss";
import Input from "../../common/Input/Input";
import PrimaryButton from "../../common/Button/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <form className="login-form">
      <h2>Login</h2>
      <form>
        <Input
          label="Enter your email:"
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <Input
          label="Create a password:"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />

        <PrimaryButton>Login</PrimaryButton>
        <p>
          Don't have an account?
          <button onClick={handleSignupClick} className="route-change-btn">
            Signup
          </button>
        </p>
      </form>
    </form>
  );
};

export default LoginForm;
