import React from 'react';
import './Collections.css';

const Collections = () => {
  const collectionData = [
    {
      title: 'Gold Jewelry',
      description: 'Timeless 916 gold masterpieces showcasing traditional craftsmanship and modern designs.',
      image: 'images/IMG_20260704_134052.jpg',
      link: '#gallery'
    },
    {
      title: 'Diamond Jewelry',
      description: 'Brilliant, precision-cut diamond pieces that reflect light and capture eternal beauty.',
      image: 'images/img3.jpg',
      link: '#gallery'
    },
    {
      title: 'Wedding Collections',
      description: 'Exquisite bridal sets designed to make your most special day truly unforgettable.',
      image: 'images/img5.jpg',
      link: '#gallery'
    },
    {
      title: 'Bespoke Jewelry',
      description: 'Work with our master artisans to create custom-tailored jewelry designs unique to you.',
      image: 'images/IMG_20260704_133909.jpg',
      link: '#gallery'
    },
    {
      title: 'Necklaces',
      description: 'Statement necklaces and chokers meticulously crafted to grace every grand occasion.',
      image: 'images/IMG_20260704_134218.jpg',
      link: '#gallery'
    },
    {
      title: 'Bracelets',
      description: 'Stunning gold bangles and custom diamond bracelets that add grace to your wrist.',
      image: 'images/img1.jpg',
      link: '#gallery'
    },
    {
      title: 'Earrings',
      description: 'Delicate gold studs and drop earrings that capture sophisticated beauty.',
      image: 'images/img4.jpg',
      link: '#gallery'
    },
    {
      title: 'Rings',
      description: 'Handcrafted engagement, wedding, and fashion rings designed for life\'s milestones.',
      image: 'images/img3.jpg',
      link: '#gallery'
    }
  ];

  return (
    <section id="collections" className="collections-section section section-accent">
      <div className="collections-container container">
        {/* Section Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">OUR CURATED SELECTION</span>
          <h2>Exclusive Collections</h2>
          <p>Explore our signature range of handcrafted gold, brilliant diamonds, and bespoke jewelry designed for generations of prosperity.</p>
        </div>

        {/* Collections Grid */}
        <div className="collections-grid">
          {collectionData.map((item, index) => (
            <div key={index} className="collection-card animate-item zoom-in">
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="btn btn-secondary card-btn">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
