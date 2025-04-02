import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, icon }) => {
  return (
    <div className="input-group">
      {icon && (
        <span className="input-group-text">
          <i className={`bi ${icon}`}></i>
        </span>
      )}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
