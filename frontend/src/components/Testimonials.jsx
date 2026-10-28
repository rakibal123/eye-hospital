import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export const Testimonials = () => {
  const { testimonials } = siteData;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  // Re-order display items based on carousel index
  const displayItems = testimonials.items.map((_, i) => {
    const idx = (startIndex + i) % testimonials.items.length;
    return testimonials.items[idx];
  });

  return (
    <section id="stories">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 style={{ fontSize: '24px' }}>{testimonials.title}</h2>
            <p className="sub" style={{ marginTop: '4px' }}>{testimonials.subtitle}</p>
          </div>
          <div className="arrows">
            <button 
              type="button" 
              aria-label="Previous testimonial" 
              onClick={handlePrev}
            >
              ‹
            </button>
            <button 
              type="button" 
              aria-label="Next testimonial" 
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid3">
          {displayItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="card story">
              <p>{item.quote}</p>
              <div className="who">
                <span className="dot" />
                <div>
                  <b>{item.name}</b>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
