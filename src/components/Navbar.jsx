import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Volume2, VolumeX, Menu, X, Sparkles, Building, ArrowRight, Home } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function Navbar({ onOpenBooking, soundActive, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '21 High', to: '/project/21-high-nerul', badge: 'Flagship' },
    { name: 'Jewel of Panvel', to: '/project/jewel-of-panvel', badge: 'Flagship' },
    { name: 'Portfolio (25+)', to: '/portfolio' },
    { name: '25Y Legacy', to: '/legacy' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    soundFX.playClick();
    setMobileMenuOpen(false);

    if (to.startsWith('/#')) {
      const targetId = to.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08090bd9] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl border-b border-[#d4af37]/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Official Mitkar Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            onMouseEnter={() => soundFX.playHover()}
            data-cursor-text="MITKAR"
          >
            <div className="relative py-1 flex items-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/mitkar-logo-white.png"
                alt="Mitkar Builders & Developers"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(232,89,12,0.3)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 rounded-full border border-white/10 bg-[#12141a]/80 px-3.5 py-1.5 backdrop-blur-md shadow-inner">
            {/* Home Icon Link */}
            <Link
              to="/"
              onClick={() => {
                soundFX.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`group flex items-center justify-center rounded-full p-2 text-xs transition-all ${
                location.pathname === '/'
                  ? 'bg-[#d4af37]/20 text-[#f5d77f] border border-[#d4af37]/40 shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Home"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                onMouseEnter={() => soundFX.playHover()}
                className="group relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 transition-all hover:text-white hover:bg-white/5"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="rounded-full bg-[#d4af37]/20 px-2 py-0.5 text-[9px] font-semibold text-[#f5d77f] border border-[#d4af37]/40 animate-pulse">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & VIP CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Direct Phone / Contact Hotline */}
            <a
              href="tel:+917304451177"
              onMouseEnter={() => soundFX.playHover()}
              className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
              title="Call Mitkar Builders"
            >
              <Phone className="h-3.5 w-3.5 text-[#d4af37]" />
              <span className="font-mono text-[11px] font-semibold">+91 73044 51177</span>
            </a>

            {/* VIP Site Visit Booking CTA */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenBooking('Exclusive VIP Concierge Site Tour');
              }}
              onMouseEnter={() => soundFX.playHover()}
              data-cursor-text="VIP"
              className="group relative overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.18)] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]"
            >
              {/* Rotating conic gold gradient border light */}
              <span
                className="absolute inset-[-100%] animate-border-spin"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0deg, transparent 200deg, #d4af37 270deg, #fceb97 320deg, transparent 360deg)'
                }}
              />
              <span className="relative flex items-center justify-center rounded-full bg-[#0a0c10] px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white transition-colors group-hover:bg-[#12141c]">
                <span className="text-gold-gradient font-bold tracking-widest">VIP VISIT</span>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#12141a] text-gray-300 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090bf2] backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div className="border-b border-white/10 pb-4 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#d4af37]">Navigation Menu</span>
            </div>
            
            {/* Mobile Home Link */}
            <Link
              to="/"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-1"
            >
              <Home className="h-5 w-5 text-[#d4af37]" />
              <span>Home</span>
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className="flex items-center justify-between text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-1"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-[10px] bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('General Inquiry');
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] py-3.5 text-sm font-semibold text-black shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              <span>Schedule VIP Consultation</span>
            </button>
            <div className="text-center text-xs text-gray-400">
              Navi Mumbai • Seawoods • Panvel | RERA Registered
            </div>
          </div>
        </div>
      )}
    </>
  );
}
