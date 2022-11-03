import React from "react";

const Button = ({ backgroundColor, color, children, onClick }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {children}
    </button>
  );
};

export default Button;
