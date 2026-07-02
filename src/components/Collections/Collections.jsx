import React from 'react';
import './Collections.css';

const Collections = () => {
  const collectionData = [
    {
      title: 'Gold Jewelry',
      description: 'Timeless 916 gold masterpieces showcasing traditional craftsmanship and modern designs.',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Diamond Jewelry',
      description: 'Brilliant, precision-cut diamond pieces that reflect light and capture eternal beauty.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Wedding Collections',
      description: 'Exquisite bridal sets designed to make your most special day truly unforgettable.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Luxury Watches',
      description: 'Premium, authentic timepieces combining ultimate precision with sophisticated aesthetics.',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Necklaces',
      description: 'Statement necklaces and chokers meticulously crafted to grace every grand occasion.',
      image: 'https://images.unsplash.com/photo-1626784215021-2e39cb52415d?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Bracelets',
      description: 'Stunning gold bangles and custom diamond bracelets that add grace to your wrist.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Earrings',
      description: 'Delicate gold studs and drop earrings that capture sophisticated beauty.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
      link: '#gallery'
    },
    {
      title: 'Rings',
      description: 'Handcrafted engagement, wedding, and fashion rings designed for life\'s milestones.',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop',
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
          <p>Explore our signature range of handcrafted gold, brilliant diamonds, and luxury timepieces designed for generations of prosperity.</p>
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
