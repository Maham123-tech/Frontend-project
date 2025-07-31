import React from 'react';
import './DesignMethodPage.css';

const DesignMethodPage = () => {
  const modules = [
    {
      title: "UX Driven Engineering",
      description: "As a UX-first development company, we ensure that every project is driven by designers who translate the design experience into code.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Developing Shared Understanding",
      description: "Our collaborative approach ensures all stakeholders have a shared understanding of the project goals and design vision.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      title: "Proven Experience and Expertise",
      description: "Our team brings years of proven experience and deep expertise to deliver solutions that exceed expectations.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Security & Intellectual Property (IP)",
      description: "We prioritize security and protect your intellectual property throughout the development process.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11C15.4,11 16,11.4 16,12V16C16,17.4 15.4,18 14,18H10C8.6,18 8,17.4 8,16V12C8,11.4 8.4,11 9,11V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
        </svg>
      )
    },
    {
      title: "Code Reviews",
      description: "Rigorous code reviews ensure quality, maintainability, and adherence to best practices.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"/>
        </svg>
      )
    },
    {
      title: "Quality Assurance & Testing",
      description: "Comprehensive QA and testing processes guarantee a robust, bug-free final product.",
      icon: (
        <svg className="icon-svg" viewBox="0 0 24 24">
          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="design-method-page">
      <div className="container">
        <h1 className="main-title">Our Design and Development Method</h1>
        
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div className="module-card" key={index}>
              <div className="module-icon">
                {module.icon}
              </div>
              <h2 className="module-title">{module.title}</h2>
              <p className="module-description">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignMethodPage;