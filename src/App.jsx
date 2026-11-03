import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VipBookingModal from './components/VipBookingModal';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import LegacyPage from './pages/LegacyPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import { soundFX } from './utils/soundFx';

gsap.registerPlugin(ScrollTrigger);

// Scroll reset & Lenis synchronizer wrapper
function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProjectForBooking, setSelectedProjectForBooking] = useState('');
  const [soundActive, setSoundActive] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Initialize Lenis Smooth Scrolling and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (projectName = '') => {
    setSelectedProjectForBooking(projectName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedProjectForBooking('');
  };

  const handleToggleSound = () => {
    const newState = soundFX.toggleSound();
    setSoundActive(newState);
  };

  return (
    <div className="relative min-h-screen bg-[#08090b] text-gray-100 overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Luxury Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('VIP Site Consultation')}
        soundActive={soundActive}
        onToggleSound={handleToggleSound}
      />

      {/* Page Routing */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/portfolio" element={<PortfolioPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/legacy" element={<LegacyPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
          {/* Catch-all fallback redirect to home */}
          <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      {/* Corporate & RERA Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('General Inquiry')} />

      {/* VIP Site Visit & Brochure Download Modal */}
      <VipBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedProject={selectedProjectForBooking}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
