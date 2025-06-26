import React, { useState, useEffect } from 'react';
import SEO from '../SEO';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'AI Bot Development',
    'Custom Software Development',
    'UI/UX Design',
    'Business Automation',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Other'
  ];

  useEffect(() => {
    // Add structured data for contact page
    const contactStructuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Tech Globe",
      "description": "Get in touch with Tech Globe for IT solutions, software development, and digital transformation services",
      "url": "https://techglobe-solutions.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Tech Globe",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+212698584458",
            "contactType": "sales",
            "email": "info@techglobe.com",
            "availableLanguage": ["English"],
            "areaServed": "Worldwide"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Tech Globe - Get Your Free IT Consultation"
        description="Contact Tech Globe for custom IT solutions, AI bot development, web design, and software development. Get a free consultation for your digital transformation project."
        keywords="contact tech Globe, IT consultation, software development quote, AI bot pricing, web development contact, custom software inquiry, get in touch"
        url="/contact"
        type="website"
      />
      <div className="contact-page">
        <div className="contact-hero">
          <div className="container">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">
              Ready to transform your business with innovative technology solutions? Let's start the conversation.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Information */}
              <div className="contact-info" itemScope itemType="https://schema.org/Organization">
                <h2>Let's Connect</h2>
                <p>We're here to help you achieve your digital transformation goals. Reach out to us through any of the channels below.</p>
                
                <div className="contact-methods">
                  <div className="contact-method" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Phone</h3>
                      <p itemProp="telephone">+212698584458</p>
                      <span itemProp="hoursAvailable" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                        <span itemProp="dayOfWeek">Available Mon-Fri</span> 
                        <span itemProp="opens">9AM</span>-<span itemProp="closes">6PM</span>
                      </span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Email</h3>
                      <p itemProp="email">info@techglobe.com</p>
                      <span>We'll respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-method" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Address</h3>
                      <p itemProp="streetAddress">232 California Road Imperial</p>
                      <span>
                        <span itemProp="addressLocality">Imperial</span>, 
                        <span itemProp="addressCountry">United States</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/share/16n8DZaHxc/?mibextid=wwXlfr" className="social-icon" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/tech-globe-solutions.jo" className="social-icon" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/techglobe.jo" className="social-icon" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM15.357 7.624c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm-3.34.219c1.854 0 3.358 1.504 3.358 3.358 0 1.854-1.504 3.358-3.358 3.358-1.854 0-3.358-1.504-3.358-3.358 0-1.854 1.504-3.358 3.358-3.358z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  {/* Form fields remain the same... */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Your full name"
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={errors.service ? 'error' : ''}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <span className="error-text">{errors.service}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                      placeholder="Brief description of your project"
                    />
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell us more about your project requirements, timeline, and budget..."
                      rows="6"
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading">
                        <span className="spinner"></span>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
