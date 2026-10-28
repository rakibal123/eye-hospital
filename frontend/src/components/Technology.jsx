import React from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';
import { ImageWithFallback } from './ImageWithFallback';

export const Technology = () => {
  const { technology } = siteData;

  return (
    <section className="tech" style={{ background: 'var(--card)' }}>
      <div className="wrap">
        <div>
          <p className="eyebrow">{technology.eyebrow}</p>
          <h2>{technology.title}</h2>
          <p className="body">{technology.body}</p>
          <a className="btn navy sm" href={technology.cta.href}>
            {technology.cta.label}
          </a>
        </div>

        <div className="machine">
          <ImageWithFallback
            src={technology.image.src}
            alt={technology.image.alt}
            width={technology.image.width}
            height={technology.image.height}
            fallbackType="equipment"
            lazy={true}
          />
        </div>

        <div className="feats" style={{ gridColumn: '1 / -1' }}>
          {technology.features.map((feat) => (
            <div key={feat.title}>
              <span className="ico">
                <Icon name={feat.icon} size={18} stroke="#1fb5a3" />
              </span>
              {feat.title}
              <small>{feat.subtitle}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
