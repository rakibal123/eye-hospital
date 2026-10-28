import React from 'react';
import { siteData } from '../data/siteData';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero = () => {
  const { hero } = siteData;

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <small>{hero.eyebrow}</small>
          <h1>
            {hero.titlePrefix}
            <span>{hero.titleHighlight}</span>
          </h1>
          <p>{hero.description}</p>
          <div className="cta">
            <a className="btn teal" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="eyeimg">
          <ImageWithFallback
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            fallbackType="hero"
            lazy={false}
          />
        </div>
      </div>
    </header>
  );
};
