import React from 'react';
import { 
  FaCalendarAlt, 
  FaCertificate, 
  FaClock, 
  FaHandshake, 
  FaGem, 
  FaTags, 
  FaUsers, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import './WhyChoose.css';

const WhyChoose = () => {
  const cardsData = [
    {
      icon: <FaCalendarAlt />,
      title: 'Since 1987',
      description: 'Over 39 years of dedicated presence in the Malaysian luxury jewelry industry.'
    },
    {
      icon: <FaCertificate />,
      title: 'Certified Jewelry',
      description: 'All gold is strictly 916 hallmarked, and diamonds are GIA certified for complete authenticity.'
    },
    {
      icon: <FaClock />,
      title: 'Luxury Watches',
      description: 'An authentic and curated range of premium timepieces from leading global watchmakers.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted Service',
      description: 'Our customer-first philosophy guarantees an unparalleled, personalized shopping experience.'
    },
    {
      icon: <FaGem />,
      title: 'Premium Quality',
      description: 'Only the finest gold, diamonds, and precious gemstones are selected for our designs.'
    },
    {
      icon: <FaTags />,
      title: 'Affordable Luxury',
      description: 'Get premium, custom handcrafted luxury items at highly competitive and transparent prices.'
    },
    {
      icon: <FaUsers />,
      title: 'Professional Staff',
      description: 'Our expert gemologists and consultants help you select or design the piece of your dreams.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Multiple Locations',
      description: 'Easily accessible premium showrooms located in Kuala Lumpur, Penang, and Klang.'
    }
  ];

  return (
    <section id="services" className="why-choose-section section section-dark">
      {/* Background elements */}
      <div className="why-choose-overlay"></div>
      
      <div className="why-choose-container container">
        {/* Section Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">WHY CHOOSE US</span>
          <h2>The Kopatha Distinction</h2>
          <p>We combine centuries-old artistry with modern luxury standards to deliver unmatched quality, value, and customer satisfaction.</p>
        </div>

        {/* Cards Grid */}
        <div className="why-choose-grid">
          {cardsData.map((card, index) => (
            <div key={index} className="why-choose-card glass-card animate-item fade-up">
              <div className="why-card-icon">{card.icon}</div>
              <div className="why-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
