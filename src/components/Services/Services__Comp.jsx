import React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";

const ServicesComp = () => {
  return (
    <div className="services__servicesComp">
      <div>
        <h1>Our Servcices For Technology You Need</h1>
        <button className="btn btn-primary">Load More</button>
      </div>
      <div>
        <div>
          <div className="icon">
            <GrShieldSecurity />
          </div>
          <h4>Portfolio Websites</h4>
          <p>Custom portfolio sites that showcase your work and convert visitors into paying clients.
          </p>
        </div>
        <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>AI Bots & Agents</h4>
          <p>Intelligent chatbots and AI agents that handle customer inquiries and automate business processes.
          </p>
        </div>
        <div>
          <div className="icon">
            <GrShieldSecurity />
          </div>
          <h4>UI/UX Design
          </h4>
          <p>Modern, user-centered design solutions that create exceptional digital experiences and boost
            conversions</p>
        </div>
        <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>Business Systems
          </h4>
          <p>Custom software systems that streamline operations and boost your team's productivity.
          </p>
        </div>
        <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>Software Solutions
          </h4>
          <p>Advanced web applications and enterprise software tailored to your specific business needs.

          </p>
        </div>
             <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>Software Solutions
          </h4>
          <p>Advanced web applications and enterprise software tailored to your specific business needs.

          </p>
        </div>
             <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>Software Solutions
          </h4>
          <p>Advanced web applications and enterprise software tailored to your specific business needs.

          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;