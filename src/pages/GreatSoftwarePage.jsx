import React from 'react';
import './GreatSoftwarePage.css';

const GreatSoftwarePage = () => {
  return (
    <div className="software-page">
      <div className="container">
        <h1 className="main-title">Way of building Great Software</h1>
        
        <div className="sections">
          {/* Section 1: Content left, Image right */}
          <div className="section">
            <div className="content">
              <h2 className="section-title">Build the right team to scale</h2>
              <p className="description">
                Finding the right talent is not easy. We match your requirements, follow your processes, 
                work long-term (not freelancers), and use a delivery model that helps you cut costs and deliver within budget.
              </p>
            </div>
            <div className="image-container">
              <img src="/images/image1.png" alt="Team discussion in office" className="section-image" />
            </div>
          </div>
          
          {/* Section 2: Image left, Content right */}
          <div className="section">
            <div className="image-container">
              <img src="/images/image2.png" alt="Two people working on computers" className="section-image" />
            </div>
            <div className="content">
              <h2 className="section-title">Build the right team to scale</h2>
              <p className="description">
                Finding the right talent is not easy. We match your requirements, follow your processes, 
                work long-term (not freelancers), and use a delivery model that helps you cut costs and deliver within budget.
              </p>
            </div>
          </div>
          
          {/* Section 3: Content left, Image right */}
          <div className="section">
            <div className="content">
              <h2 className="section-title">Build the right team to scale</h2>
              <p className="description">
                Finding the right talent is not easy. We match your requirements, follow your processes, 
                work long-term (not freelancers), and use a delivery model that helps you cut costs and deliver within budget.
              </p>
            </div>
            <div className="image-container">
              <img src="/images/image3.png" alt="Training session in meeting room" className="section-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatSoftwarePage;