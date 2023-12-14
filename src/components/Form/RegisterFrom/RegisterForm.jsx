import React from "react";
import "./RegisterForm.scss";
import Input from "../../common/Input/Input";
import PrimaryButton from "../../common/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const navigate=useNavigate()
    const handleLoginClick = () => {
        navigate("/login"); 
      };
  return (
    <form className="register-form">
      <h2>Signup</h2>
      <form>
        <Input label="Enter your first name:" type="text" id="fName" name="email" placeholder="First Name" />
        <Input label="Enter your last name:" type="text" id="lName" name="email" placeholder="Last Name" />
        <Input label="Enter your email:" type="email" id="email" name="email" placeholder="Email address" />
        <Input label="Create a password:" type="password" id="password" name="password" placeholder="Password" />
        <Input label="Confirm password:" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" />
        <PrimaryButton>Signup</PrimaryButton>
      </form>
      <p>
        Already have an account?
        <button onClick={handleLoginClick} className="route-change-btn">Login</button>
      </p>
    </form>
  );
};

export default RegisterForm;
