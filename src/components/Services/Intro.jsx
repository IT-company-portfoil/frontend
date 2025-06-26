import React from "react";
import { BiBrain } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Intro = () => {
  const highlights = [
    {
      icon: BiBrain,
      text: "Intelligent AI solutions that automate complex business processes and enhance customer engagement",
      title: "AI-Powered Automation"
    },
    {
      icon: BiBrain,
      text: "Custom web development with modern frameworks delivering scalable and responsive applications",
      title: "Modern Web Solutions"
    }
  ];

  return (
    <div 
      className="services__intro"
      role="region"
      aria-labelledby="intro-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="pos-rel">
        <figure className="services__intro__image">
          <img
            src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Professional team working on innovative IT solutions and software development projects"
            loading="lazy"
            width="1770"
            height="1180"
            itemProp="image"
          />
        </figure>
        
        <aside 
          className="services__intro__highlights"
          aria-label="Key service highlights"
        >
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            role="group"
            aria-label="Service highlights carousel"
          >
            {highlights.map((highlight, index) => (
              <SwiperSlide 
                key={index}
                role="group"
                aria-label={`Highlight ${index + 1} of ${highlights.length}`}
              >
                <div 
                  className="highlight-item"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="icon" aria-hidden="true">
                    <highlight.icon />
                  </div>
                  <h3 
                    className="visually-hidden"
                    itemProp="name"
                  >
                    {highlight.title}
                  </h3>
                  <p itemProp="description">
                    {highlight.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>
      </div>
      
      <div className="services__intro__content">
        <article className="services__intro__text">
          <header>
            <h1 
              id="intro-heading"
              itemProp="name"
            >
              We are the solutions for IT problems
            </h1>
          </header>
          
          <p 
            className="text"
            itemProp="description"
          >
            At Tech Globe, we specialize in creating intelligent software solutions that solve real business
            challenges. From building stunning portfolio websites that showcase your work effectively, to
            developing AI bots and agents that automate workflows - we combine innovation with practical
            results to transform how your business operates
          </p>
          
          <div className="intro-cta">
            <button 
              className="btn btn-primary"
              type="button"
              aria-label="Learn more about Tech Globe's IT solutions and services"
            >
              More About
            </button>
          </div>
        </article>
      </div>
      
      <meta itemProp="url" content="https://www.techglobe-solutions.com" />
      <meta itemProp="founder" content="Tech Globe Team" />
      <meta itemProp="knowsAbout" content="AI Development, Web Development, UI/UX Design, Business Automation" />
    </div>
  );
};

export default Intro;