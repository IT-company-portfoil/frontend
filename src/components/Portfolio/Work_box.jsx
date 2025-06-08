import React from "react";
import "./style__work.css";

const Work = ({ img, title, text }) => {
  return (
    <div className="portfolio__work">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

export default Work;