import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Collections from './components/Collections/Collections';
import Gallery from './components/Gallery/Gallery';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Statistics from './components/Statistics/Statistics';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  // Initialize scroll animation observer on app mount
  useScrollAnimation();

  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Collections />
        <Gallery />
        <WhyChoose />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />
    </>
  );
}

export default App;
