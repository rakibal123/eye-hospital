import React from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';

export const FeatureStrip = () => {
  const { featureStrip } = siteData;

  return (
    <div className="strip">
      <div className="wrap">
        {featureStrip.map((item) => (
          <div key={item.id}>
            <span className="ico">
              <Icon name={item.id} size={18} stroke="#1fb5a3" />
            </span>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
