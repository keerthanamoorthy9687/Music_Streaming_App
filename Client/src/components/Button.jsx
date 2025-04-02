import React from "react";

const Button = ({ text, onClick, variant = "primary", size = "md", icon }) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {icon && <i className={`bi ${icon} me-2`}></i>}
      {text}
    </button>
  );
};

export default Button;
