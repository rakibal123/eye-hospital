import React from 'react';
import { siteData } from '../data/siteData';
import { ImageWithFallback } from './ImageWithFallback';

export const About = () => {
  const { about } = siteData;

  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="photo">
          <ImageWithFallback
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            fallbackType="reception"
            lazy={true}
          />
        </div>

        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          <p className="body">{about.body}</p>
          
          <div className="stats">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <a className="btn teal" href={about.cta.href}>
            {about.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};
