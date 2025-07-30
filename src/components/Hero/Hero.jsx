import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Great <span>software</span> is built by great <span>teams</span></h1>
        <p>We help you build world-class development teams to power your vision.</p>
        <button className="cta-btn">Let's get started!</button>
      </div>
      
      <div className="hero-illustration">
        <img 
          src="/images/Hero.png" 
          alt="Developer team illustration" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;