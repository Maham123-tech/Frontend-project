// src/pages/CaseStudiesPage.jsx
import React from 'react';
import './CaseStudiesPage.css';

const CaseStudiesPage = () => {
  return (
    <div className="case-studies-container">
      <div className="case-studies-title">
        <h1>Our Recent</h1>
        <h2>Case Studies</h2>
      </div>
      
      <div className="case-studies-list">
        <div className="case-study-item">
          <img src="/images/Casestudy1.png" alt="Case Study 1" className="case-study-image" />
        </div>
        <div className="case-study-item">
          <img src="/images/Casestudy2.png" alt="Case Study 2" className="case-study-image" />
        </div>
        <div className="case-study-item">
          <img src="/images/Casestudy3.png" alt="Case Study 3" className="case-study-image" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;