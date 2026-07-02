import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Priya Subramaniam',
      location: 'Kuala Lumpur',
      rating: 5,
      text: 'I purchased my bridal gold set from Kopatha Group and it was absolutely stunning. The craftsmanship is exceptional and the service was incredibly warm and professional. My whole family was amazed at the quality and the price was very fair. Highly recommend to anyone looking for authentic gold jewelry!',
      initial: 'P'
    },
    {
      name: 'Raj Kumar',
      location: 'Klang',
      rating: 5,
      text: 'Been a loyal customer for over 10 years. Kopatha Group has always maintained the highest standards — the gold purity, the designs, and most importantly the trust. Bought engagement rings here and could not be happier. They helped us customize the perfect ring within budget.',
      initial: 'R'
    },
    {
      name: 'Kavitha Nair',
      location: 'Penang',
      rating: 5,
      text: 'The Penang branch staff were so helpful. They guided me through different diamond necklace designs and were very honest about quality vs price. I ended up buying a beautiful diamond set for my wedding anniversary. The experience was luxurious from start to finish!',
      initial: 'K'
    },
    {
      name: 'Selvam Arumugam',
      location: 'Klang',
      rating: 5,
      text: 'Visited the Klang showroom to buy a gold chain. The display was spectacular — like walking into a luxury boutique. Staff were knowledgeable and never pushy. Got a great deal on a 22k Italian chain design. Will definitely return for my next purchase!',
      initial: 'S'
    },
    {
      name: 'Meena Chandrasekaran',
      location: 'Kuala Lumpur',
      rating: 5,
      text: 'Kopatha Group has been our family\'s trusted jeweler for two generations. My grandmother bought her thali from them in 1995 and now I\'m doing the same for my daughter. The quality never disappoints and they always have the latest designs alongside the traditional classics.',
      initial: 'M'
    },
    {
      name: 'Dinesh Pillai',
      location: 'Penang',
      rating: 5,
      text: 'Surprised my wife with a diamond bracelet from Kopatha Group for our anniversary. The staff helped me pick the perfect piece within my budget and even gift-wrapped it beautifully. The joy on her face was priceless! Amazing service and quality. Thank you Kopatha Group!',
      initial: 'D'
    }
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleIndices = () => {
    const prev = (current - 1 + testimonials.length) % testimonials.length;
    const next = (current + 1) % testimonials.length;
    return [prev, current, next];
  };

  const [prevIdx, centerIdx, nextIdx] = getVisibleIndices();

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section section section-accent">
      <div className="testimonials-container container">
        {/* Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">CUSTOMER STORIES</span>
          <h2>What Our Clients Say</h2>
          <p>Thousands of satisfied customers across Malaysia trust Kopatha Group for their most precious moments.</p>
        </div>

        {/* Carousel Display */}
        <div className="testimonials-carousel animate-item fade-up">
          <div className="testimonial-cards-wrapper">
            {[prevIdx, centerIdx, nextIdx].map((idx, pos) => {
              const isCenter = pos === 1;
              const t = testimonials[idx];
              return (
                <div
                  key={idx}
                  className={`testimonial-card ${isCenter ? 'active' : 'side'}`}
                >
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="card-rating">
                    {renderStars(t.rating)}
                  </div>
                  <p className="card-text">"{t.text}"</p>
                  <div className="card-author">
                    <div className="author-avatar">{t.initial}</div>
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={handlePrev} aria-label="Previous review">
              <FaChevronLeft />
            </button>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === current ? 'active' : ''}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button className="carousel-btn" onClick={handleNext} aria-label="Next review">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
