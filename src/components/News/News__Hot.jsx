import React from "react";

const HotNews = ({ title, text, avatar, author, role }) => {
  return (
    <div className="news__hot__feed">
      <h3>{title}</h3>
      <p className="text">{text}</p>
      <div className="news__hot__feed__author">
        <img src={avatar} alt="" />
        <div>
          <h5>{author}</h5>
          <span className="text">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default HotNews;