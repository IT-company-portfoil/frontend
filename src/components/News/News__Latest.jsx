import React from "react";

const LatestNews = ({ img, date, author, text }) => {
  return (
    <div className="news__latest__feed">
      <img src={img} alt="" />
      <div>
        <div className="feed_info">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default LatestNews;