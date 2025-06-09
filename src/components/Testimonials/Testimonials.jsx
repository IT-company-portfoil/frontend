import React, { useState, useEffect } from "react";
import Testimony from "./Testimony";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "CEO",
      company: "InnovateTech Solutions",
      image: "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
      rating: 5,
      review: "Tech Global transformed our business with their AI chatbot solution. Customer inquiries are now handled 24/7, and our team can focus on strategic initiatives. Exceptional service and results!",
      project: "AI Customer Service Bot",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Marketing Director",
      company: "Digital Dynamics",
      image: "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
      rating: 5,
      review: "The portfolio website Tech Global created for us increased our client inquiries by 300%. The design is modern, fast, and perfectly represents our brand. Highly recommended!",
      project: "Portfolio Website Design",
      date: "2024-02-20"
    },
    {
      id: 3,
      name: "David Thompson",
      position: "Founder",
      company: "StartupHub",
      image: "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
      rating: 5,
      review: "Outstanding UI/UX design work! Our app's user engagement increased by 250% after Tech Global's redesign. They truly understand user behavior and modern design principles.",
      project: "Mobile App UI/UX Redesign",
      date: "2024-03-10"
    },
    {
      id: 4,
      name: "Lisa Johnson",
      position: "Operations Manager",
      company: "Efficient Systems Inc",
      image: "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
      rating: 5,
      review: "The custom business system Tech Global developed automated our entire workflow. We've saved 40 hours per week and reduced errors by 95%. Incredible ROI on our investment.",
      project: "Business Process Automation",
      date: "2024-01-30"
    }
  ];

  const fitSlidesPerView = () => {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      setSlidesPerView(1.3);
    } else if (window.innerWidth <= 600) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2.5);
    }
  };

  useEffect(() => {
    fitSlidesPerView();
    window.addEventListener("resize", fitSlidesPerView);
    
    // Add structured data for testimonials/reviews
    const reviewsStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Global",
      "url": "https://www.techglobe-solutions.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": testimonials.length,
        "bestRating": "5",
        "worstRating": "5"
      },
      "review": testimonials.map(testimonial => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": testimonial.name,
          "jobTitle": testimonial.position,
          "worksFor": {
            "@type": "Organization",
            "name": testimonial.company
          }
        },
        "reviewBody": testimonial.review,
        "datePublished": testimonial.date,
        "publisher": {
          "@type": "Organization",
          "name": "Tech Global"
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewsStructuredData);
    document.head.appendChild(script);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", fitSlidesPerView);
      document.head.removeChild(script);
    };
  }, [testimonials]);

  return (
    <section 
      id="testimony" 
      className="container container__testimonials"
      role="region"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <header>
        <h1 
          id="testimonials-heading"
          className="container"
          itemProp="name"
        >
          What People Say About Us
        </h1>
      </header>
      
      <div 
        itemProp="aggregateRating" 
        itemScope 
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content="5.0" />
        <meta itemProp="reviewCount" content={testimonials.length.toString()} />
        <meta itemProp="bestRating" content="5" />
      </div>
      
      <div 
        role="group"
        aria-label="Customer testimonials carousel"
      >
        <Swiper
          className="testimonials__slide container"
          slidesPerView={slidesPerView}
          spaceBetween={20}
          role="listbox"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide 
              key={testimonial.id}
              role="option"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length} from ${testimonial.name}`}
            >
              <div 
                itemProp="review"
                itemScope
                itemType="https://schema.org/Review"
              >
                <Testimony 
                  img={testimonial.image}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  review={testimonial.review}
                  rating={testimonial.rating}
                  project={testimonial.project}
                  date={testimonial.date}
                  testimonialId={testimonial.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;