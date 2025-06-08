import React from "react";
import LogoImage from '../../images/log.jpeg';

const Logo = () => {
  return (
    <div className="logo">
      <img 
        src={LogoImage} 
        alt="Company Logo"
        style={{ width: '100px', height: 'auto' }} // Add your desired styling
      />
    </div>
  );
};

export default Logo;