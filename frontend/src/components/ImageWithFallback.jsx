import React, { useState } from 'react';

// Approved reference vector illustrations
export const HeroEyeSvg = () => (
  <svg viewBox="0 0 520 400" role="img" aria-label="Close-up of an eye" className="w-full h-full block">
    <defs>
      <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d9a98f"/>
        <stop offset="1" stopColor="#efcdb9"/>
      </linearGradient>
      <radialGradient id="ir" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#04161f"/>
        <stop offset=".28" stopColor="#0a3a52"/>
        <stop offset=".55" stopColor="#1f86a8"/>
        <stop offset=".8" stopColor="#6cc4d4"/>
        <stop offset="1" stopColor="#2d7f98"/>
      </radialGradient>
      <clipPath id="ec">
        <path d="M20 205C120 95 400 95 500 205 400 315 120 315 20 205z"/>
      </clipPath>
    </defs>
    <path d="M0 0H520V400H0z" fill="none"/>
    <path d="M0 120C140 40 380 40 520 120V0H0z" fill="url(#sk)" opacity=".9"/>
    <path d="M10 90C150 20 380 22 515 95" fill="none" stroke="#3a2a25" strokeWidth="16" strokeLinecap="round"/>
    <path d="M30 80c60-30 160-40 260-30" stroke="#2a1d19" strokeWidth="3" fill="none" opacity=".6"/>
    <path d="M20 205C120 95 400 95 500 205 400 315 120 315 20 205z" fill="#f6efea"/>
    <g clipPath="url(#ec)">
      <circle cx="262" cy="205" r="112" fill="url(#ir)"/>
      <g stroke="#d6f3f5" strokeOpacity=".35" strokeWidth="1.4" fill="none">
        <path d="M262 205L262 93M262 205L374 205M262 205L150 205M262 205L262 317M262 205L342 125M262 205L182 125M262 205L342 285M262 205L182 285M262 205L320 108M262 205L204 108M262 205L320 302M262 205L204 302M262 205L362 160M262 205L162 160M262 205L362 250M262 205L162 250"/>
      </g>
      <circle cx="262" cy="205" r="46" fill="#020d13"/>
      <circle cx="262" cy="205" r="112" fill="none" stroke="#0b3345" strokeWidth="5" opacity=".6"/>
      <ellipse cx="236" cy="176" rx="16" ry="11" fill="#fff" opacity=".9"/>
      <circle cx="296" cy="236" r="5" fill="#fff" opacity=".5"/>
      <path d="M20 205C120 95 400 95 500 205" fill="none" stroke="#000" strokeOpacity=".22" strokeWidth="26"/>
    </g>
    <path d="M20 205C120 95 400 95 500 205" fill="none" stroke="#4a3329" strokeWidth="7" strokeLinecap="round"/>
    <path d="M20 205C120 315 400 315 500 205" fill="none" stroke="#c99b86" strokeWidth="4"/>
    <g stroke="#2a1d19" strokeWidth="2.2" strokeLinecap="round">
      <path d="M120 140l-16-22M160 122l-10-26M205 112l-4-28M262 108v-30M320 112l4-28M365 122l10-26M405 140l16-22"/>
    </g>
    <circle cx="262" cy="205" r="155" fill="none" stroke="#fff" strokeOpacity=".55" strokeDasharray="2 8"/>
    <circle cx="262" cy="205" r="175" fill="none" stroke="#fff" strokeOpacity=".25"/>
  </svg>
);

export const ReceptionSvg = () => (
  <svg viewBox="0 0 400 320" role="img" aria-label="Hospital reception" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
    <defs>
      <linearGradient id="rw" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f4f7f9"/>
        <stop offset="1" stopColor="#e3eaef"/>
      </linearGradient>
      <linearGradient id="rf" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d9d4cc"/>
        <stop offset="1" stopColor="#bdb7ad"/>
      </linearGradient>
    </defs>
    <rect width="400" height="320" fill="url(#rw)"/>
    <rect y="238" width="400" height="82" fill="url(#rf)"/>
    <rect x="250" y="0" width="150" height="238" fill="#dfeaf1"/>
    <path d="M250 0h150v238H250z" fill="none" stroke="#c7d6e0"/>
    <path d="M300 0v238M350 0v238" stroke="#c7d6e0"/>
    <g fill="#fff">
      <ellipse cx="60" cy="14" rx="18" ry="4"/>
      <ellipse cx="170" cy="14" rx="18" ry="4"/>
      <ellipse cx="280" cy="14" rx="18" ry="4"/>
    </g>
    <circle cx="150" cy="86" r="16" fill="none" stroke="#0a5f80" strokeWidth="5"/>
    <circle cx="150" cy="86" r="6" fill="#0a5f80"/>
    <text x="176" y="92" fontFamily="Inter,Arial,sans-serif" fontWeight="700" fontSize="17" fill="#0a3d5c">Eye Hospital.com</text>
    <rect x="90" y="186" width="210" height="60" rx="3" fill="#efe6d8"/>
    <rect x="90" y="174" width="210" height="14" rx="3" fill="#faf6ef"/>
    <rect x="106" y="198" width="178" height="40" fill="#fff" opacity=".7"/>
    <path d="M104 174V150h40v24M240 174v-20h36v20" fill="#2a3a46"/>
    <rect x="108" y="156" width="30" height="16" rx="2" fill="#7fb6d3"/>
    <g>
      <rect x="22" y="206" width="38" height="40" rx="5" fill="#d8d2c7"/>
      <g fill="#3f9a62">
        <ellipse cx="28" cy="170" rx="9" ry="34" transform="rotate(-25 28 170)"/>
        <ellipse cx="41" cy="160" rx="9" ry="42"/>
        <ellipse cx="54" cy="172" rx="9" ry="32" transform="rotate(25 54 172)"/>
        <ellipse cx="34" cy="190" rx="8" ry="22" transform="rotate(-50 34 190)"/>
        <ellipse cx="50" cy="190" rx="8" ry="22" transform="rotate(50 50 190)"/>
      </g>
    </g>
    <rect x="318" y="228" width="60" height="14" rx="4" fill="#9fb6c5"/>
    <rect x="322" y="204" width="52" height="26" rx="4" fill="#b9ccd8"/>
  </svg>
);

export const ExamSvg = () => (
  <svg viewBox="0 0 540 400" role="img" aria-label="Doctor examining a patient" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
    <defs>
      <linearGradient id="eb" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eef4f8"/>
        <stop offset="1" stopColor="#cfe0ea"/>
      </linearGradient>
    </defs>
    <rect width="540" height="400" fill="url(#eb)"/>
    <rect x="0" y="60" width="150" height="260" fill="#fff" opacity=".6"/>
    <rect x="420" y="40" width="120" height="230" fill="#bcd3e0" opacity=".5"/>
    <path d="M30 400c0-60 40-96 100-100h40c60 4 100 40 100 100z" fill="#fbfdfe"/>
    <path d="M118 300l22 30 22-30" fill="#cfdde7"/>
    <rect x="124" y="262" width="32" height="42" fill="#c99a7a"/>
    <circle cx="140" cy="214" r="46" fill="#cf9f80"/>
    <path d="M96 208c-6-52 90-58 90-4-8-22-28-30-48-30s-36 8-42 34z" fill="#2c2420"/>
    <circle cx="176" cy="222" r="3" fill="#2c2420"/>
    <path d="M330 400c0-70 30-110 90-116l70 6c30 20 40 70 40 110z" fill="#6aa6d0"/>
    <rect x="390" y="248" width="44" height="46" fill="#d4a587"/>
    <path d="M368 200c-30 6-46 40-30 110 6 24 36 20 40-4 0-30 6-50 20-70z" fill="#1d1613"/>
    <circle cx="410" cy="206" r="44" fill="#d9ad90"/>
    <path d="M366 196c10-44 78-44 90 4-14-18-40-24-60-20-14 4-24 10-30 16z" fill="#1d1613"/>
    <path d="M366 210l-6 40c-4 20 20 28 28 0z" fill="#1d1613"/>
    <g>
      <rect x="236" y="150" width="76" height="120" rx="8" fill="#eef3f6" stroke="#c6d4de" strokeWidth="3"/>
      <rect x="216" y="188" width="56" height="30" rx="6" fill="#dfe8ee"/>
      <circle cx="214" cy="204" r="20" fill="#f9fcfd" stroke="#8ea6b6" strokeWidth="3"/>
      <circle cx="214" cy="204" r="9" fill="#2c3e4c"/>
      <rect x="262" y="270" width="12" height="60" fill="#c6d4de"/>
      <rect x="200" y="326" width="140" height="18" rx="5" fill="#d3dee6"/>
      <rect x="300" y="168" width="14" height="70" rx="4" fill="#fff" stroke="#c6d4de" strokeWidth="2"/>
    </g>
    <path d="M0 340H540V400H0z" fill="#e8eff4"/>
  </svg>
);

export const EquipmentSvg = () => (
  <svg viewBox="0 0 400 300" role="img" aria-label="Eye examination equipment" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
    <defs>
      <linearGradient id="mb" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f3f7fa"/>
        <stop offset="1" stopColor="#cbdce8"/>
      </linearGradient>
      <linearGradient id="mw" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#e8eef3"/>
        <stop offset=".5" stopColor="#fff"/>
        <stop offset="1" stopColor="#dbe5ec"/>
      </linearGradient>
      <radialGradient id="me" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#05202e"/>
        <stop offset=".4" stopColor="#16789c"/>
        <stop offset="1" stopColor="#7fc6d6"/>
      </radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#mb)"/><rect x="0" y="236" width="400" height="64" fill="#e9eff4"/>
    <rect x="238" y="40" width="148" height="98" rx="6" fill="#16222b"/>
    <rect x="246" y="48" width="132" height="82" rx="3" fill="#0d3b56"/>
    <ellipse cx="312" cy="89" rx="48" ry="28" fill="#eaf3f6"/>
    <circle cx="312" cy="89" r="24" fill="url(#me)"/>
    <circle cx="312" cy="89" r="9" fill="#02121a"/>
    <circle cx="304" cy="82" r="3.5" fill="#fff"/>
    <rect x="302" y="138" width="14" height="76" fill="#9fb2bf"/>
    <rect x="280" y="210" width="60" height="10" rx="3" fill="#8ea3b1"/>
    <rect x="88" y="214" width="150" height="26" rx="6" fill="#fff" stroke="#c9d6df" strokeWidth="2"/>
    <path d="M100 214V90q0-40 40-40h40q30 0 30 34v130z" fill="url(#mw)" stroke="#c9d6df" strokeWidth="2"/>
    <rect x="60" y="110" width="52" height="52" rx="12" fill="#f9fbfc" stroke="#8ea6b6" strokeWidth="3"/>
    <circle cx="68" cy="136" r="17" fill="#2b3e4c"/>
    <circle cx="68" cy="136" r="8" fill="#5f7d91"/>
    <rect x="130" y="176" width="78" height="14" rx="5" fill="#dfe8ee"/>
    <rect x="170" y="150" width="14" height="30" fill="#2d3e4b"/>
    <rect x="154" y="190" width="44" height="12" rx="3" fill="#2d3e4b"/>
    <rect x="34" y="196" width="40" height="44" rx="5" fill="#dfe8ee" stroke="#c0cfda"/>
    <rect x="42" y="206" width="24" height="16" rx="2" fill="#7fa9c0"/>
  </svg>
);

export const BuildingSvg = () => (
  <svg viewBox="0 0 480 300" role="img" aria-label="Hospital building" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
    <defs>
      <linearGradient id="bs" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#a9d3ee"/>
        <stop offset="1" stopColor="#eaf4fb"/>
      </linearGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8cc4dc"/>
        <stop offset="1" stopColor="#2f7fa4"/>
      </linearGradient>
    </defs>
    <rect width="480" height="300" fill="url(#bs)"/>
    <g fill="#fff" opacity=".85">
      <ellipse cx="80" cy="40" rx="50" ry="14"/>
      <ellipse cx="380" cy="60" rx="60" ry="14"/>
    </g>
    <rect x="0" y="262" width="480" height="38" fill="#cfd6d9"/>
    <path d="M60 70l330-14v52H60z" fill="#e8edf0"/>
    <rect x="60" y="108" width="330" height="62" fill="url(#bg)"/>
    <g stroke="#fff" strokeWidth="3">
      <path d="M115 108v62M170 108v62M225 108v62M280 108v62M335 108v62"/>
    </g>
    <rect x="60" y="170" width="330" height="40" fill="#fff"/>
    <circle cx="150" cy="190" r="10" fill="none" stroke="#0a5f80" strokeWidth="3.5"/>
    <circle cx="150" cy="190" r="4" fill="#0a5f80"/>
    <text x="168" y="196" fontFamily="Inter,Arial,sans-serif" fontWeight="700" fontSize="17" fill="#0a3d5c">Eye Hospital.com</text>
    <rect x="60" y="210" width="330" height="52" fill="url(#bg)"/>
    <g stroke="#fff" strokeWidth="3">
      <path d="M115 210v52M170 210v52M280 210v52M335 210v52"/>
    </g>
    <rect x="190" y="214" width="84" height="48" fill="#143b50" opacity=".55"/>
    <path d="M232 214v48" stroke="#fff" strokeWidth="3"/>
    <g fill="#3f9a62">
      <ellipse cx="86" cy="248" rx="16" ry="22"/>
      <ellipse cx="410" cy="246" rx="20" ry="26"/>
      <ellipse cx="438" cy="250" rx="16" ry="20"/>
    </g>
    <g fill="#2f7e4e">
      <circle cx="150" cy="268" r="14"/>
      <circle cx="320" cy="270" r="16"/>
      <circle cx="352" cy="272" r="12"/>
    </g>
    <rect x="0" y="278" width="480" height="22" fill="#e6ece8" opacity=".9"/>
  </svg>
);

export const DoctorSvg = ({ index = 0 }) => {
  if (index === 0) {
    return (
      <svg viewBox="0 0 144 94" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="w-full h-full block">
        <rect width="144" height="94" fill="#e4edf3"/>
        <path d="M28 94c0-22 18-30 44-32 26 2 44 10 44 32z" fill="#fbfdfe"/>
        <path d="M60 62l12 18 12-18" fill="#cfdde7"/>
        <rect x="66" y="52" width="12" height="14" fill="#c99a7a"/>
        <ellipse cx="72" cy="38" rx="15" ry="18" fill="#c99a7a"/>
        <path d="M56 24c2-14 28-14 32 0-8-6-24-6-32 0z" fill="#2a2420"/>
        <circle cx="66" cy="38" r="1.5" fill="#2a2420"/>
        <circle cx="78" cy="38" r="1.5" fill="#2a2420"/>
        <path d="M67 47q5 4 10 0" stroke="#8a4f45" strokeWidth="1.5" fill="none"/>
        <g fill="none" stroke="#2a2f36" strokeWidth="1.6">
          <circle cx="64" cy="36" r="6"/>
          <circle cx="80" cy="36" r="6"/>
          <path d="M70 36h4"/>
        </g>
        <path d="M72 64l-4 8 4 22 4-22z" fill="#4a86ad"/>
        <path d="M62 62l10 6 10-6" fill="none" stroke="#a9c3d4" strokeWidth="1.2"/>
      </svg>
    );
  } else if (index === 1) {
    return (
      <svg viewBox="0 0 144 94" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="w-full h-full block">
        <rect width="144" height="94" fill="#e4edf3"/>
        <path d="M48 40c-6-34 52-38 48 0 2 30 4 44 6 54H42c2-10 8-24 6-54z" fill="#201814"/>
        <path d="M28 94c0-22 18-30 44-32 26 2 44 10 44 32z" fill="#fbfdfe"/>
        <path d="M60 62l12 18 12-18" fill="#cfdde7"/>
        <rect x="66" y="52" width="12" height="14" fill="#d9ad90"/>
        <ellipse cx="72" cy="38" rx="15" ry="18" fill="#d9ad90"/>
        <path d="M56 26c4-14 28-14 32 0-6-4-14-8-16-8s-12 4-16 8z" fill="#201814"/>
        <circle cx="66" cy="38" r="1.5" fill="#2a2420"/>
        <circle cx="78" cy="38" r="1.5" fill="#2a2420"/>
        <path d="M67 47q5 4 10 0" stroke="#8a4f45" strokeWidth="1.5" fill="none"/>
        <path d="M62 62l10 6 10-6" fill="none" stroke="#a9c3d4" strokeWidth="1.2"/>
      </svg>
    );
  } else if (index === 2) {
    return (
      <svg viewBox="0 0 144 94" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="w-full h-full block">
        <rect width="144" height="94" fill="#e4edf3"/>
        <path d="M28 94c0-22 18-30 44-32 26 2 44 10 44 32z" fill="#fbfdfe"/>
        <path d="M60 62l12 18 12-18" fill="#cfdde7"/>
        <rect x="66" y="52" width="12" height="14" fill="#b98765"/>
        <ellipse cx="72" cy="38" rx="15" ry="18" fill="#b98765"/>
        <path d="M56 24c2-14 28-14 32 0-8-6-24-6-32 0z" fill="#2a2420"/>
        <circle cx="66" cy="38" r="1.5" fill="#2a2420"/>
        <circle cx="78" cy="38" r="1.5" fill="#2a2420"/>
        <path d="M67 47q5 4 10 0" stroke="#8a4f45" strokeWidth="1.5" fill="none"/>
        <g fill="none" stroke="#2a2f36" strokeWidth="1.6">
          <circle cx="64" cy="36" r="6"/>
          <circle cx="80" cy="36" r="6"/>
          <path d="M70 36h4"/>
        </g>
        <path d="M72 64l-4 8 4 22 4-22z" fill="#2b6a8e"/>
        <path d="M62 62l10 6 10-6" fill="none" stroke="#a9c3d4" strokeWidth="1.2"/>
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 144 94" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="w-full h-full block">
        <rect width="144" height="94" fill="#e4edf3"/>
        <path d="M48 40c-6-34 52-38 48 0 2 30 4 44 6 54H42c2-10 8-24 6-54z" fill="#1d1613"/>
        <path d="M28 94c0-22 18-30 44-32 26 2 44 10 44 32z" fill="#fbfdfe"/>
        <path d="M60 62l12 18 12-18" fill="#cfdde7"/>
        <rect x="66" y="52" width="12" height="14" fill="#dcb094"/>
        <ellipse cx="72" cy="38" rx="15" ry="18" fill="#dcb094"/>
        <path d="M56 26c4-14 28-14 32 0-6-4-14-8-16-8s-12 4-16 8z" fill="#1d1613"/>
        <circle cx="66" cy="38" r="1.5" fill="#2a2420"/>
        <circle cx="78" cy="38" r="1.5" fill="#2a2420"/>
        <path d="M67 47q5 4 10 0" stroke="#8a4f45" strokeWidth="1.5" fill="none"/>
        <path d="M62 62l10 6 10-6" fill="none" stroke="#a9c3d4" strokeWidth="1.2"/>
      </svg>
    );
  }
};

/**
 * ImageWithFallback renders the production <img> tag directly.
 * If the image file fails to load (onError), it renders the approved
 * reference vector illustration as a graceful fallback.
 */
export const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  fallbackType,
  doctorIndex = 0,
  lazy = true,
  className = ""
}) => {
  const [hasError, setHasError] = useState(false);

  // Fallback visual illustration dispatcher
  const renderFallback = () => {
    switch (fallbackType) {
      case 'hero':
        return <HeroEyeSvg />;
      case 'reception':
        return <ReceptionSvg />;
      case 'exam':
        return <ExamSvg />;
      case 'equipment':
        return <EquipmentSvg />;
      case 'building':
        return <BuildingSvg />;
      case 'doctor':
        return <DoctorSvg index={doctorIndex} />;
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-[#e4edf3] text-[#5d7487] p-4 text-center">
            <span className="text-xs font-semibold">{alt}</span>
          </div>
        );
    }
  };

  if (hasError) {
    return <div className="w-full h-full">{renderFallback()}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? "lazy" : undefined}
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};
