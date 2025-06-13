import React, { useState, useEffect } from "react";
import doctor from '../../images/doctor.webp'

// Mock Swiper components for demo (replace with actual Swiper imports)
const Swiper = ({ children, className, slidesPerView, spaceBetween, ...props }) => (
  <div className={className} style={{ display: 'flex', gap: `${spaceBetween}px`, overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
    {children}
  </div>
);
const SwiperSlide = ({ children, ...props }) => (
  <div style={{ minWidth: '300px', scrollSnapAlign: 'start' }}>
    {children}
  </div>
);

// Enhanced Testimony Component
const Testimony = ({ 
  img, 
  review, 
  name, 
  position, 
  company, 
  rating = 5, 
  project, 
  date 
}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`star ${i < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimony">
      <div className="testimony__header">
        <div className="testimony__avatar">
          <img src={img} alt={`${name} profile`} />
        </div>
        <div className="testimony__info">
          <h3 className="testimony__name">{name}</h3>
          <p className="testimony__position">{position}</p>
          {company && <p className="testimony__company">{company}</p>}
        </div>
      </div>
      
      <div className="testimony__rating">
        {renderStars(rating)}
      </div>
      
      <div className="testimony__content">
        <p className="testimony__review">"{review}"</p>
        {project && (
          <div className="testimony__project">
            <span className="project-label">Project:</span>
            <span className="project-name">{project}</span>
          </div>
        )}
      </div>
      
      <div className="testimony__footer">
        {date && <span className="testimony__date">{new Date(date).toLocaleDateString()}</span>}
      </div>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Linda Abu Jaber",
      position: "Founder",
      company: "AskDrLinda.com",
      image: doctor,
      rating: 5,
      review: "The team brought my vision to life with a professional, user-friendly website tailored to Arabic-speaking families. Their dedication and precision made the process smooth and rewarding. I'm beyond impressed",
      project: "Medical Consultation Platform",
      date: "2025-01-15"
    },
    {
      id: 2,
      name: "Omar Ibn Al-Khattab School",
      position: "IT Supervisor",
      company: "Educational Institution",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "They delivered a modern, reliable school management platform that transformed how we operate. From student tracking to scheduling, everything works seamlessly. The support team is responsive and truly understands education tech",
      project: "School Management System",
      date: "2025-02-20"
    },
    {
      id: 3,
      name: "Ahmad Ali",
      position: "Founder",
      company: "Midas Store",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "Our online store now runs faster, looks better, and converts more visitors thanks to their excellent work. They understood our goals from day one and built a tailored e-commerce solution that exceeded expectations",
      project: "E-commerce Platform",
      date: "2024-03-10"
    },

  ];

  const fitSlidesPerView = () => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesPerView(1.5);
    } else if (window.innerWidth <= 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(2.5);
    }
  };

  useEffect(() => {
    fitSlidesPerView();
    window.addEventListener("resize", fitSlidesPerView);
    
    return () => {
      window.removeEventListener("resize", fitSlidesPerView);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say About Us</h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="testimonials__carousel">
          <Swiper
            className="testimonials__slider"
            slidesPerView={slidesPerView}
            spaceBetween={24}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Testimony 
                  img={testimonial.image}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  review={testimonial.review}
                  rating={testimonial.rating}
                  project={testimonial.project}
                  date={testimonial.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23000" opacity="0.02"/><circle cx="75" cy="75" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .testimonials__header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-label {
          display: inline-block;
          background: linear-gradient(135deg, #4270ec, #cb3fb7);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        
        .section-description {
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .testimonials__carousel {
          position: relative;
        }
        
        .testimonials__slider {
          padding: 20px 0;
        }
        
        .testimony {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        
        .testimony::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4270ec, #cb3fb7, #fac078);
        }
        
        .testimony:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .testimony__header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .testimony__avatar {
          flex-shrink: 0;
        }
        
        .testimony__avatar img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e2e8f0;
        }
        
        .testimony__info {
          flex: 1;
        }
        
        .testimony__name {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0 0 4px 0;
        }
        
        .testimony__position {
          font-size: 14px;
          color: #64748b;
          margin: 0 0 2px 0;
        }
        
        .testimony__company {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }
        
        .testimony__rating {
          margin-bottom: 20px;
        }
        
        .star {
          color: #fbbf24;
          font-size: 16px;
          margin-right: 2px;
        }
        
        .star.filled {
          color: #f59e0b;
        }
        
        .testimony__content {
          margin-bottom: 20px;
        }
        
        .testimony__review {
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
          margin: 0 0 16px 0;
          font-style: italic;
        }
        
        .testimony__project {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .project-label {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .project-name {
          font-size: 13px;
          color: #4270ec;
          font-weight: 600;
          background: #eff6ff;
          padding: 4px 8px;
          border-radius: 6px;
        }
        
        .testimony__footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }
        
        .testimony__date {
          font-size: 12px;
          color: #94a3b8;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .testimonials__header {
            margin-bottom: 40px;
          }
          
          .testimony {
            padding: 24px;
          }
          
          .testimony__header {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .testimony__avatar img {
            width: 50px;
            height: 50px;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-description {
            font-size: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .testimony {
            padding: 20px;
          }
          
          .testimony__review {
            font-size: 15px;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;