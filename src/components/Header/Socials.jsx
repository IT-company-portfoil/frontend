import React from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <CgInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterSquare />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default Socials;