import React from "react";

const Button = ({ click, content }) => {
  return (
    <button className="btn" onClick={click}>
      {content}
    </button>
  );
};

export default Button;