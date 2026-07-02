import React, { useState } from 'react';
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'gold',
      title: '916 Gold Bridal Necklace Set',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
      desc: 'Traditional South Indian haram with kundan work.'
    },
    {
      id: 2,
      category: 'diamond',
      title: 'Diamond Solitaire Ring',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
      desc: 'GIA-certified brilliant cut diamond in 18k white gold.'
    },
    {
      id: 3,
      category: 'watches',
      title: 'Prestige Gold Timepiece',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
      desc: 'Swiss-movement luxury watch in solid gold casing.'
    },
    {
      id: 4,
      category: 'wedding',
      title: 'Grand Bridal Gold Set',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop',
      desc: 'Complete bridal set with matching bangles and earrings.'
    },
    {
      id: 5,
      category: 'gold',
      title: 'Gold Jhumka Earrings',
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=600&auto=format&fit=crop',
      desc: 'Handcrafted 22k gold jhumkas with stone work.'
    },
    {
      id: 6,
      category: 'rings',
      title: 'Floral Diamond Band Ring',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop',
      desc: 'Pave-set diamond ring in 18k rose gold.'
    },
    {
      id: 7,
      category: 'showroom',
      title: 'Kopatha KL Showroom',
      image: 'https://images.unsplash.com/photo-1582037919864-b38fae630cc6?q=80&w=800&auto=format&fit=crop',
      desc: 'Our premium luxury showroom in Jalan Masjid India.'
    },
    {
      id: 8,
      category: 'wedding',
      title: 'Bridal Diamond Choker',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      desc: 'Polki diamond bridal choker with matching maang tikka.'
    },
    {
      id: 9,
      category: 'bracelets',
      title: 'Diamond Tennis Bracelet',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
      desc: 'Channel-set diamonds in 18k white gold.'
    },
    {
      id: 10,
      category: 'watches',
      title: 'Classic Skeleton Watch',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600&auto=format&fit=crop',
      desc: 'Open-heart automatic movement luxury watch.'
    },
    {
      id: 11,
      category: 'gold',
      title: 'Gold Antique Bangles',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
      desc: 'Hand-engraved antique gold kada set of four.'
    },
    {
      id: 12,
      category: 'moments',
      title: 'Happy Customer Moment',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
      desc: 'A wonderful couple making memories with Kopatha.'
    }
  ];

  // Filter logic
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Load more logic
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleFilterChange = (cat) => {
    setFilter(cat);
    setVisibleCount(8); // Reset count when changing filter
  };

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % displayedItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
  };

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'watches', label: 'Watches' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'rings', label: 'Rings' },
    { id: 'showroom', label: 'Showroom' },
    { id: 'moments', label: 'Moments' },
  ];

  return (
    <section id="gallery" className="gallery-section section">
      <div className="gallery-container container">
        {/* Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">VISUAL SHOWCASE</span>
          <h2>The Kopatha Gallery</h2>
          <p>Admire our curated gallery featuring gold masterpieces, precision timepieces, showroom elegance, and timeless moments from our customers.</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs animate-item fade-up">
          {categories.map(tab => (
            <button
              key={tab.id}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {displayedItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-card animate-item zoom-in"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-img-container">
                <img src={item.image} alt={item.title} className="gallery-img" />
                <div className="gallery-card-hover">
                  <FaSearchPlus className="zoom-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="load-more-container animate-item fade-up">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={showPrev}>
            <FaChevronLeft />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={displayedItems[lightboxIndex].image} 
              alt={displayedItems[lightboxIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-info">
              <h3>{displayedItems[lightboxIndex].title}</h3>
              <p>{displayedItems[lightboxIndex].desc}</p>
            </div>
          </div>
          
          <button className="lightbox-nav lightbox-next" onClick={showNext}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
