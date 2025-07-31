// src/pages/TeamPage.jsx
import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-container">
      <div className="team-content">
        <div className="team-text">
          <h2>Leading companies trust us to develop software</h2>
          <p>
            We specialize in creating custom software solutions tailored to your business needs. 
            Our team of experts is dedicated to delivering high-quality products that drive growth and innovation.
          </p>
          <button className="see-more">See more Informations →</button>
        </div>
        
        <div className="team-image-container">
          <div className="team-image">
            <img 
              src="/images/Team.png" 
              alt="Team collaboration" 
              className="team-img"
            />
            <div className="play-button">
              <div className="play-icon"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="team-title">
        <h3>Meet the People We are Working With</h3>
      </div>
      
      <div className="brand-logos-container">
        <div className="brand-item">
          <div className="brand-logo decorative-pattern"></div>
        </div>
        
        <div className="brand-item">
          <div className="brand-logo adclipse-logo">AdClipse</div>
        </div>
        
        <div className="brand-item">
          <div className="brand-logo pjc-bridge-logo">
            <div className="pjc-main">PJC BRIDGE</div>
            <div className="pjc-sub">Practical Japanese Communication Exam Bridge</div>
          </div>
        </div>
        
        <div className="brand-item">
          <div className="brand-logo clickorder-logo">
            <div className="clickorder-icon">🛒</div>
            <div className="clickorder-text">ClickOrder</div>
            <div className="clickorder-slogan">Store is right next to you</div>
          </div>
        </div>
        
        <div className="brand-item">
          <div className="brand-logo techmate-logo">
            <div className="techmate-icon">💻</div>
            <div className="techmate-text">TechMate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;