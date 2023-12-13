import React from "react";
import './Input.scss'

const Input = () => {
  return (
    <div key={index} className="input-container">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{category}</label>
    </div>
  );
};

export default Input;
