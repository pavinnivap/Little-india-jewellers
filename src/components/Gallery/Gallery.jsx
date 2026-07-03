import React, { useState } from 'react';
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'gold',
      title: 'Prestige Gold Floral Pendant',
      image: 'images/IMG_20260704_133909.jpg',
      desc: 'Crafted in 916 gold with dual-tone rose gold accents.'
    },
    {
      id: 2,
      category: 'bracelets',
      title: 'Elegant Multi-Strand Bangle',
      image: 'images/IMG_20260704_133945.jpg',
      desc: 'Four-row gold and rhodium beaded bracelet.'
    },
    {
      id: 3,
      category: 'bracelets',
      title: 'Filigree Gold Cuff Bangle',
      image: 'images/IMG_20260704_134005.jpg',
      desc: 'Exquisite openwork mesh cuff with central floral motif.'
    },
    {
      id: 4,
      category: 'bracelets',
      title: 'Fancy Flower Link Bracelet',
      image: 'images/IMG_20260704_134022.jpg',
      desc: 'Multiple strands of delicate gold flower links.'
    },
    {
      id: 5,
      category: 'bracelets',
      title: 'Bold Curb Chain & Bar Bracelet',
      image: 'images/IMG_20260704_134038.jpg',
      desc: 'Heavy links paired with dual-tone texturized bars.'
    },
    {
      id: 6,
      category: 'gold',
      title: 'Classic Royal Choker',
      image: 'images/IMG_20260704_134052.jpg',
      desc: 'Detailed heritage choker featuring delicate gold bead drops.'
    },
    {
      id: 7,
      category: 'bracelets',
      title: 'Delicate Floral Chain Bracelet',
      image: 'images/IMG_20260704_134111.jpg',
      desc: 'Interlinked gold blossoms with precision diamond cuts.'
    },
    {
      id: 8,
      category: 'wedding',
      title: 'Royal Bridal Double Haram Set',
      image: 'images/IMG_20260704_134137.jpg',
      desc: 'Layered gold and diamond-cut bridal necklaces.'
    },
    {
      id: 9,
      category: 'gold',
      title: 'Decorative Hanging Jhumkas',
      image: 'images/IMG_20260704_134206.jpg',
      desc: 'Filigree balls with adjustable links.'
    },
    {
      id: 10,
      category: 'gold',
      title: 'Long Kasu Mala Haram',
      image: 'images/IMG_20260704_134218.jpg',
      desc: 'Traditional coin-style necklace with grand central pendant.'
    },
    {
      id: 11,
      category: 'diamond',
      title: 'Mother-of-Pearl Chic Bracelets',
      image: 'images/IMG_20260704_134236.jpg',
      desc: 'Three individual stacked bracelets with unique geometry.'
    },
    {
      id: 12,
      category: 'gold',
      title: 'Rose Gold Leaf Necklace',
      image: 'images/IMG_20260704_134254.jpg',
      desc: 'Modern floral collar styled with satin-finished rose gold leaves.'
    },
    {
      id: 13,
      category: 'bracelets',
      title: 'Diamond Accent Geometry Chain',
      image: 'images/IMG_20260704_134312.jpg',
      desc: 'Close-up detail of geometric link bracelet.'
    },
    {
      id: 14,
      category: 'gold',
      title: 'Sacred Mangalsutra Chain',
      image: 'images/IMG_20260704_143558.jpg',
      desc: 'Auspicious black beads and gold links with a modern pendant.'
    },
    {
      id: 15,
      category: 'wedding',
      title: 'Heritage Antique Choker Set',
      image: 'images/IMG_20260704_143622.jpg',
      desc: 'Matte gold choker with pastel enameling and pearls.'
    },
    {
      id: 16,
      category: 'gold',
      title: 'Chandelier Filigree Earrings',
      image: 'images/IMG_20260704_143637.jpg',
      desc: 'Three-tone gold tear-drop hanging earrings.'
    },
    {
      id: 17,
      category: 'gold',
      title: 'Artistic Floral Pendant',
      image: 'images/IMG_20260704_143711.jpg',
      desc: 'Layered gold and silver-finished flower pendant.'
    },
    {
      id: 18,
      category: 'gold',
      title: 'Weaved Gold Collar Tassel',
      image: 'images/IMG_20260704_143731.jpg',
      desc: 'Multi-row mesh choker with central loop and tassels.'
    },
    {
      id: 19,
      category: 'gold',
      title: 'Grand Temple Jhumka Earrings',
      image: 'images/IMG_20260704_143748.jpg',
      desc: 'Detailed jhumkas with multi-row fine chain tassels.'
    },
    {
      id: 20,
      category: 'diamond',
      title: 'Two-Tone Wave Diamond Bracelets',
      image: 'images/IMG_20260704_143843.jpg',
      desc: 'Textured wave links with brilliant diamond studs.'
    },
    {
      id: 21,
      category: 'bracelets',
      title: 'Children Enamel Charm Bangles',
      image: 'images/IMG_20260704_143912.jpg',
      desc: 'Playful gold band bracelets with colorful butterfly and flower charms.'
    },
    {
      id: 22,
      category: 'bracelets',
      title: 'Traditional Gold Kada Bangles',
      image: 'images/img1.jpg',
      desc: 'Thick gold bangles with intricate textured patterns.'
    },
    {
      id: 23,
      category: 'gold',
      title: 'Solid Gold Rope Chain',
      image: 'images/img2.jpg',
      desc: 'Classic twist-rope chain in 916 gold.'
    },
    {
      id: 24,
      category: 'rings',
      title: 'Zeenat Trio Fashion Rings',
      image: 'images/img3.jpg',
      desc: 'Three-tone statement rings with circular diamond surrounds.'
    },
    {
      id: 25,
      category: 'gold',
      title: 'Traditional Jhumka Hangings',
      image: 'images/img4.jpg',
      desc: 'Double-decker filigree jhumka earrings.'
    },
    {
      id: 26,
      category: 'wedding',
      title: 'Bridal Couture Necklace Set',
      image: 'images/img5.jpg',
      desc: 'Double-strand leaf motif necklace with large drop pendant.'
    },
    {
      id: 27,
      category: 'showroom',
      title: 'Kopatha Showroom Showcase',
      image: 'images/inside-shop2.jpg',
      desc: 'A view of our premium showroom jewelry exhibits.'
    },
    {
      id: 28,
      category: 'moments',
      title: 'Happy Customer Moment',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
      desc: 'A wonderful couple making memories with Kopatha.'
    }
  ];

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="gallery-section section">
      <div className="gallery-container container">
        {/* Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">VISUAL SHOWCASE</span>
          <h2>The Kopatha Gallery</h2>
          <p>Admire our curated gallery featuring gold masterpieces, bespoke creations, showroom elegance, and timeless moments from our customers.</p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
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
              src={galleryItems[lightboxIndex].image}
              alt={galleryItems[lightboxIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <h3>{galleryItems[lightboxIndex].title}</h3>
              <p>{galleryItems[lightboxIndex].desc}</p>
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
