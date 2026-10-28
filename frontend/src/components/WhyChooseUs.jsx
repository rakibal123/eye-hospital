import React from 'react';
import { siteData } from '../data/siteData';
import { ImageWithFallback } from './ImageWithFallback';

export const WhyChooseUs = () => {
  const { whyChooseUs } = siteData;

  const handlePlayClick = () => {
    alert("Eye Hospital.com - Facility tour video coming soon!");
  };

  return (
    <section className="why">
      <div className="wrap">
        <div>
          <p className="eyebrow">{whyChooseUs.eyebrow}</p>
          <h2>{whyChooseUs.title}</h2>
          
          <ul>
            {whyChooseUs.points.map((point, index) => (
              <li key={index}>
                <i>✓</i>
                {point}
              </li>
            ))}
          </ul>

          <a className="btn navy" href={whyChooseUs.cta.href}>
            {whyChooseUs.cta.label}
          </a>
        </div>

        <div className="exam relative">
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
              src={whyChooseUs.image.src}
              alt={whyChooseUs.image.alt}
              width={whyChooseUs.image.width}
              height={whyChooseUs.image.height}
              fallbackType="exam"
              lazy={true}
            />
          </div>
          <button 
            type="button" 
            className="play relative z-10" 
            aria-label={whyChooseUs.videoAction}
            onClick={handlePlayClick}
          >
            ▶
          </button>
          <em className="absolute bottom-[14px] right-[18px] z-10">{whyChooseUs.videoAction}</em>
        </div>
      </div>
    </section>
  );
};
