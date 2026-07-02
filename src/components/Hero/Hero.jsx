import React from 'react';
import './Hero.css';

const Hero = () => {
  // Generate particles array to create floating gold dust effect
  const particles = Array.from({ length: 15 });

  return (
    <section id="home" className="hero-section">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Floating Gold Dust Animation */}
      <div className="hero-particles">
        {particles.map((_, index) => {
          const randomLeft = Math.random() * 100;
          const randomDelay = Math.random() * 8;
          const randomDuration = 5 + Math.random() * 7;
          const randomSize = 4 + Math.random() * 8;
          
          return (
            <div
              key={index}
              className="gold-particle"
              style={{
                left: `${randomLeft}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-badge animate-item fade-up animate-active">
            Since 1987
          </span>
          <h1 className="hero-title animate-item fade-up animate-active">
            Timeless Prosperity, <br />
            <span className="gold-text">Generation To Generation</span>
          </h1>
          <p className="hero-subtitle animate-item fade-up animate-active">
            Trusted Since 1987
          </p>
          <p className="hero-description animate-item fade-up animate-active">
            Discover exquisite handcrafted jewelry and luxury watches designed to celebrate every precious moment of your life.
          </p>
          <div className="hero-buttons animate-item fade-up animate-active">
            <a href="#collections" className="btn btn-primary hero-btn">
              View Collection
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <a href="#about" className="scroll-down-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Explore More</span>
      </a>
    </section>
  );
};

export default Hero;
