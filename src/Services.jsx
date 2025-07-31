// Services.js
import React, { useState, useRef } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      icon: "📱",
      description: "Your website is your most important digital marketing asset in the modern age."
    },
    {
      id: 2,
      title: "Web Design & Development",
      icon: "💻",
      description: "Your website is your most important digital marketing asset in the modern age.",
      hasRedBorder: true
    },
    {
      id: 3,
      title: "Software Testing Service",
      icon: "🔍",
      description: "Your website is your most important digital marketing asset in the modern age."
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: "🎨",
      description: "Your website is your most important digital marketing asset in the modern age."
    },
    {
      id: 5,
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Your website is your most important digital marketing asset in the modern age."
    },
    {
      id: 6,
      title: "Digital Marketing",
      icon: "📊",
      description: "Your website is your most important digital marketing asset in the modern age."
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      if (currentPage < 5) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Services we offer</h1>
      
      <div className="services-wrapper">
        <button className="arrow-btn left" onClick={scrollLeft} disabled={currentPage === 1}>
          &lt;
        </button>
        
        <div className="services-scroll-container" ref={containerRef}>
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${service.hasRedBorder ? 'red-border' : ''}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <button className="arrow-btn right" onClick={scrollRight} disabled={currentPage === 5}>
          &gt;
        </button>
      </div>
      
      <div className="pagination">
        <span className={`page-number ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>01</span>
        <span className={`page-number ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>02</span>
        <span className={`page-number ${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>03</span>
        <span className={`page-number ${currentPage === 4 ? 'active' : ''}`} onClick={() => setCurrentPage(4)}>04</span>
        <span className={`page-number ${currentPage === 5 ? 'active' : ''}`} onClick={() => setCurrentPage(5)}>05</span>
      </div>
    </div>
  );
};

export default Services;