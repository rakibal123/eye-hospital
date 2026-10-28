import React from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';

export const Services = () => {
  const { services } = siteData;

  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2>{services.title}</h2>
        <p className="sub">{services.subtitle}</p>

        <div className="grid3">
          {services.items.map((service) => (
            <a key={service.id} className="card group" href={service.link}>
              <span className="ico">
                <Icon name={service.icon} size={18} stroke="#1fb5a3" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="go">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
