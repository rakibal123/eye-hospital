import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { Icon } from './Icons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation, navCta, contact } = siteData;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Lock body scroll and listen for Escape key when mobile drawer is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav aria-label="Main Navigation">
        <div className="wrap">
          <a className="logo" href="#top" aria-label={brand.name}>
            <Icon name="eye" size={26} stroke="#1fb5a3" strokeWidth={2} />
            {brand.name}
          </a>

          {/* Desktop Navigation Links */}
          <ul className="desktop-links">
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Only "Book Appointment" CTA button (Hidden on mobile <= 860px) */}
          <a className="btn navy sm nav-cta-desktop" href={navCta.href}>
            {navCta.label}
          </a>

          {/* Mobile Hamburger Button (Only on mobile <= 860px) */}
          <button
            type="button"
            className="nav-mobile-toggle p-2 rounded-lg text-[#0a3d5c] hover:bg-[#e3f4f2] focus:outline-none focus:ring-2 focus:ring-[#1fb5a3] transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open Navigation Menu"
          >
            <Icon name="menu" size={24} stroke="#0a3d5c" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer (Right-to-Left) */}
      <div
        className={`fixed inset-0 z-50 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Overlay with smooth fade */}
        <div
          className={`fixed inset-0 bg-[#08324d]/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu backdrop"
        />

        {/* Drawer Panel Sliding in from Right to Left */}
        <aside
          className={`fixed top-0 right-0 bottom-0 h-full w-[300px] sm:w-[340px] max-w-[85vw] bg-white z-50 shadow-[-10px_0_35px_rgba(10,61,92,0.22)] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between p-5 border-b border-[#dbe7f1]">
              <a
                className="logo text-[16px]"
                href="#top"
                onClick={handleLinkClick}
                aria-label={brand.name}
              >
                <Icon name="eye" size={22} stroke="#1fb5a3" strokeWidth={2} />
                {brand.name}
              </a>
              <button
                type="button"
                className="p-1.5 rounded-lg text-[#5d7487] hover:text-[#0a3d5c] hover:bg-[#e3f4f2] focus:outline-none focus:ring-2 focus:ring-[#1fb5a3] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
              >
                <Icon name="close" size={22} stroke="#0a3d5c" />
              </button>
            </div>

            {/* Navigation Links inside Drawer */}
            <div className="flex flex-col py-3 px-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-3 px-3 text-[14.5px] font-medium text-[#12324a] hover:text-[#1fb5a3] hover:bg-[#f1f7fc] rounded-lg transition-colors border-b border-[#f1f5f9] last:border-0"
                >
                  <span>{item.label}</span>
                  <span className="text-[#1fb5a3] text-sm">›</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions (Book Appointment Button & Contact) */}
          <div className="p-5 border-t border-[#dbe7f1] bg-[#f8fbfe] flex flex-col gap-3">
            <a
              className="btn teal w-full text-center py-3 text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              href={navCta.href}
              onClick={handleLinkClick}
            >
              <Icon name="eye" size={18} stroke="#ffffff" />
              {navCta.label}
            </a>

            <div className="pt-2 text-xs text-[#5d7487] flex flex-col gap-1.5">
              <a
                href={contact.details[0].href}
                className="flex items-center gap-2 hover:text-[#1fb5a3] transition-colors"
              >
                <Icon name="phone" size={14} stroke="#1fb5a3" />
                <span>+880 1234 567890</span>
              </a>
              <a
                href={contact.details[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1fb5a3] transition-colors"
              >
                <Icon name="pin" size={14} stroke="#1fb5a3" />
                <span>Dhanmondi, Dhaka 1209</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
