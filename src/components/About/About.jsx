import React, { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SEO from "../SEO";
import { useLocation } from "react-router-dom";
import "./style.css";

const About = () => {
  const [percentage] = useState(75);
  const location = useLocation();
  const isStandalonePage = location.pathname === '/about';

  useEffect(() => {
    const aboutStructuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Tech Global",
        "description": "Transform your business with cutting-edge technology. From intelligent AI bots that automate customer service to stunning portfolio websites that convert visitors into clients, we build software solutions that drive real results and competitive advantage.",
        "foundingDate": "2020",
        "numberOfEmployees": "10-50",
        "knowsAbout": [
          "AI Bot Development",
          "Portfolio Websites",
          "UI/UX Design", 
          "Mobile App Development",
          "WordPress Development",
          "Business Automation"
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(aboutStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {isStandalonePage && (
        <SEO 
          title="About Tech Global - Leading IT Solutions Provider Since 2020"
          description="Learn about Tech Global's mission to transform businesses through innovative IT solutions. We specialize in AI automation, custom software development, and digital transformation."
          keywords="about tech global, IT company, software development company, AI solutions provider, digital transformation, business automation experts"
          url="/about"
          type="website"
        />
      )}
      <section 
        id="about" 
        className="about__container"
        itemScope 
        itemType="https://schema.org/AboutPage"
        role="region"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <article itemScope itemType="https://schema.org/Organization">
            <header>
              <h1 
                id="about-heading"
                itemProp="name"
                className="about-title"
              >
                Advance Innovation For IT Solutions
              </h1>
              <p 
                className="text"
                itemProp="description"
              >
                Transform your business with cutting-edge technology. From intelligent AI bots that automate
                customer service to stunning portfolio websites that convert visitors into clients, we build software
                solutions that drive real results and competitive advantage.
              </p>
            </header>
            
            <div className="about__buttons" role="group" aria-label="About section actions">
              <button 
                className="btn btn-primary"
                aria-label="Contact Tech Global for IT solutions"
              >
                Get In Touch
              </button>
              <a 
                href="#services"
                aria-label="Navigate to our services section"
                title="View our IT services and solutions"
              >
                <span>Our Services</span>
                <AiOutlineArrowDown aria-hidden="true" />
              </a>
            </div>
          </article>

          <aside 
            className="about__visual-content"
            style={{ position: "relative" }}
            aria-labelledby="business-growth-label"
          >
            <figure className="about__image">
              <img
                src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                alt="Professional business woman representing Tech Global's commitment to business growth and innovation in IT solutions"
                loading="lazy"
                width="600"
                height="400"
                itemProp="image"
              />
            </figure>
            
            <div 
              className="about__progress"
              role="img"
              aria-labelledby="business-growth-label"
              itemScope
              itemType="https://schema.org/Quantity"
            >
              <div className="progress_bar">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
              <h4 id="business-growth-label">
                <span itemProp="name">Business Growth</span>
                <br />
                <small itemProp="description">Level is high</small>
              </h4>
              <meta itemProp="value" content="75" />
              <meta itemProp="unitText" content="percent" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;