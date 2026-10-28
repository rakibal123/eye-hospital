import React from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';

export const Footer = () => {
  const { brand, footer } = siteData;

  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <a className="logo" href="#top" aria-label={brand.name}>
              <Icon name="eye" size={24} stroke="#1fb5a3" strokeWidth={2} />
              {brand.name}
            </a>
            <p style={{ maxWidth: '240px', marginTop: '12px' }}>
              {brand.footerDescription}
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul>
              {footer.services.map((item) => (
                <li key={item}>
                  <a href="#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Info</h4>
            <ul>
              {footer.contactInfo.map((info, idx) => (
                <li key={idx}>
                  {idx === 0 ? (
                    <a href="tel:+8801234567890">{info}</a>
                  ) : idx === 1 ? (
                    <a href="mailto:info@eyehospital.com">{info}</a>
                  ) : (
                    info
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bar">
          <span>{brand.copyright}</span>
          <span>
            {footer.legalLinks.map((item, idx) => (
              <React.Fragment key={item.label}>
                {idx > 0 && <span> &nbsp; </span>}
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};
