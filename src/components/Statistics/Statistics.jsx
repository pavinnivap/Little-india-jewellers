import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';

const StatItem = ({ endValue, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function (easeOutQuad)
            const easePercentage = percentage * (2 - percentage);
            
            setCount(Math.floor(easePercentage * endValue));
            
            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [endValue, duration]);

  // Format numbers (e.g. 10000 to 10,000)
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="stat-card" ref={elementRef}>
      <h3 className="stat-number">
        {formatNumber(count)}
        {suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Statistics = () => {
  const statsData = [
    { endValue: 39, label: 'Years Experience', suffix: '+' },
    { endValue: 10000, label: 'Happy Customers', suffix: '+' },
    { endValue: 5000, label: 'Jewelry Designs', suffix: '+' },
    { endValue: 3, label: 'Showroom Branches', suffix: '' },
    { endValue: 100, label: 'Customer Satisfaction', suffix: '%' },
  ];

  return (
    <section className="statistics-section section">
      {/* Background Overlay */}
      <div className="stats-bg-overlay"></div>
      
      <div className="statistics-container container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatItem 
              key={index} 
              endValue={stat.endValue} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
