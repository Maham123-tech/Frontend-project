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
          {/* Fixed href warning by using a button instead of anchor */}
          <button className="see-more">See more Informations →</button>
        </div>
        
        <div className="team-image-container">
          <div className="team-image">
            {/* Using public path for the image */}
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
    </div>
  );
};

export default TeamPage;