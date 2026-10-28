import React from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';
import { ImageWithFallback } from './ImageWithFallback';

export const Contact = () => {
  const { contact } = siteData;

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p className="sub">{contact.subtitle}</p>
          
          <ul>
            {contact.details.map((item) => (
              <li key={item.type}>
                <span className="ico">
                  <Icon name={item.icon} size={18} stroke="#1fb5a3" />
                </span>
                <div>
                  <a href={item.href} className="hover:text-[#1fb5a3] transition-colors">
                    {item.value}
                  </a>
                  <small>{item.label}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bldg">
          <ImageWithFallback
            src={contact.image.src}
            alt={contact.image.alt}
            width={contact.image.width}
            height={contact.image.height}
            fallbackType="building"
            lazy={true}
          />
        </div>
      </div>
    </section>
  );
};
