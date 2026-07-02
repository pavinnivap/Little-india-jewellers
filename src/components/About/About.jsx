import React from 'react';
import { FaCalendarAlt, FaGem, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const badges = [
    { icon: <FaCalendarAlt />, title: 'Since 1987', desc: 'Over 39 Years of trust' },
    { icon: <FaGem />, title: 'Premium Products', desc: 'Exquisite designs' },
    { icon: <FaCertificate />, title: 'Certified Quality', desc: '100% Authentic gold & diamonds' },
    { icon: <FaShieldAlt />, title: 'Trusted Service', desc: 'Dedicated customer care' },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <div className="about-grid">
          {/* Left Column: Text Content */}
          <div className="about-content animate-item fade-left">
            <span className="about-subtitle">KOPATHA GROUP</span>
            <h2 className="about-title">A Legacy of Timeless Elegance</h2>
            
            <p className="about-text-highlight">
              Serving customers with premium quality jewelry and luxury watches across Kuala Lumpur, Penang, and Klang.
            </p>
            
            <p className="about-text">
              Kopatha Group has been serving customers since 1987 with premium quality jewelry and luxury watches. Our commitment to craftsmanship, authenticity, and customer satisfaction has made us one of the trusted jewelry brands across Kuala Lumpur, Penang, and Klang.
            </p>

            {/* Mission & Vision */}
            <div className="mission-vision">
              <div className="mv-card">
                <h3>Our Mission</h3>
                <p>Deliver timeless elegance and trusted quality for every generation.</p>
              </div>
              <div className="mv-card">
                <h3>Our Vision</h3>
                <p>Become Southeast Asia's most trusted luxury jewelry destination.</p>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="badges-grid">
              {badges.map((badge, index) => (
                <div key={index} className="about-badge-card">
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-text">
                    <h4>{badge.title}</h4>
                    <p>{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="about-images animate-item fade-right">
            <div className="image-wrapper main-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1582037919864-b38fae630cc6?q=80&w=800&auto=format&fit=crop"
                alt="Kopatha Group luxury jewelry showroom interior"
                className="about-img main-img"
              />
              <div className="gold-frame"></div>
            </div>
            
            <div className="image-wrapper secondary-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop"
                alt="Exquisite gold and diamond jewelry"
                className="about-img secondary-img"
              />
              <div className="experience-box">
                <span className="exp-years">39+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
