import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { Technology } from './components/Technology';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1f7fc] text-[#12324a]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Feature Strip */}
        <FeatureStrip />

        {/* 4. About */}
        <About />

        {/* 5. Services */}
        <Services />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Doctors */}
        <Doctors />

        {/* 8. Technology */}
        <Technology />

        {/* 9. Patient Stories / Testimonials */}
        <Testimonials />

        {/* 10. Booking */}
        <BookingForm />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
