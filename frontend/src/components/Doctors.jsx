import React from 'react';
import { siteData } from '../data/siteData';
import { ImageWithFallback } from './ImageWithFallback';

export const Doctors = () => {
  const { doctors } = siteData;

  return (
    <section id="doctors">
      <div className="wrap">
        <div className="head">
          <div>
            <h2 style={{ fontSize: '22px' }}>{doctors.title}</h2>
            <p className="sub" style={{ marginTop: '4px' }}>{doctors.subtitle}</p>
          </div>
          <a href={doctors.allDoctorsLink.href}>{doctors.allDoctorsLink.label}</a>
        </div>

        <div className="docs">
          {doctors.list.map((doc, index) => (
            <div key={doc.id} className="doc">
              <div className="av">
                <ImageWithFallback
                  src={doc.image.src}
                  alt={doc.image.alt}
                  width={doc.image.width}
                  height={doc.image.height}
                  fallbackType="doctor"
                  doctorIndex={index}
                  lazy={true}
                />
              </div>
              <b>{doc.name}</b>
              <span>{doc.specialty}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
