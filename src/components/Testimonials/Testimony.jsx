import React from "react";

const Testimony = ({ img, review, name , position}) => {
  return (
    <div className="testimony">
      <div className="testimony__avatar">
        <img src={img} alt="testimony avatar" />
      </div>
      <div className="testimony__comment">
        <p className="text">
        {review}
        </p>
        <p className="text">
          <strong style={{ color: "black" }}>{name} / </strong>
          {position}
        </p>
      </div>
    </div>
  );
};

export default Testimony;