import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ArrowRight, 
  Building2, 
  Calendar, 
  ChevronDown,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function ProjectHeroBanner({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: "21-high-elevation",
      projectId: "21-high-nerul",
      title: "21 HIGH",
      tagline: "A Life of Distinction. An Address to Match.",
      badge: "Signature Collection • Nerul",
      location: "Prime Sector, Nerul, Navi Mumbai",
      price: "₹ 4.05 Crore*",
      specs: "Only One Residence Per Floor • 4 BHK Luxury Suites",
      image: "/hero-showcase/showcase-02.jpg",
      slideNumber: "01 / 06"
    },
    {
      id: "21-high-balcony",
      projectId: "21-high-nerul",
      title: "ENTIRE FLOOR PRIVACY",
      tagline: "What if your entire floor belonged only to you?",
      badge: "Exclusive Opportunity • Nerul",
      location: "Nerul Skyline, Navi Mumbai",
      price: "1,446 Sq.Ft RERA Carpet",
      specs: "Panoramic Sunset Verandah • Private Elevator Foyer",
      image: "/hero-showcase/showcase-01.jpg",
      slideNumber: "02 / 06"
    },
    {
      id: "jewel-of-panvel-aerial",
      projectId: "jewel-of-panvel",
      title: "JEWEL OF PANVEL",
      tagline: "The Crown Jewel of Old Panvel across 2 Pristine Acres.",
      badge: "Flagship Landmark • M.G. Road",
      location: "M.G. Road, Old Panvel, Navi Mumbai",
      price: "₹ 54 L* Onwards",
      specs: "26,000 Sq.Ft Podium Lifestyle • 4 Soaring Towers",
      image: "/hero-showcase/showcase-05.jpg",
      slideNumber: "03 / 06"
    },
    {
      id: "21-high-interiors",
      projectId: "21-high-nerul",
      title: "SPACIOUS. ELEGANT. UNCOMPROMISING.",
      tagline: "Travertine accents, Italian marble foyers & expansive sunlit suites.",
      badge: "Luxury Living • 21 High",
      location: "Nerul, Navi Mumbai",
      price: "4 Master Bedrooms",
      specs: "Cross-Ventilated Grand Living • Walk-in Closets",
      image: "/hero-showcase/showcase-03.jpg",
      slideNumber: "04 / 06"
    },
    {
      id: "jewel-of-panvel-retail",
      projectId: "jewel-of-panvel",
      title: "HIGH-STREET RETAIL ARCADE",
      tagline: "The Right Address is Never Unlimited. Dual Main-Road Access.",
      badge: "Prime Commercial • Old Panvel",
      location: "Double Frontage on M.G. Road",
      price: "Shops & Commercial Hubs",
      specs: "2,500+ Resident Footfalls • High Rental Yields",
      image: "/hero-showcase/showcase-06.jpg",
      slideNumber: "05 / 06"
    },
    {
      id: "21-high-floorplan",
      projectId: "21-high-nerul",
      title: "ENGINEERED FOR A LIFE BEYOND ORDINARY",
      tagline: "Exemplary civil engineering with zero dead space.",
      badge: "Architectural Layout • Nerul",
      location: "1st to 8th Typical Floor Plan",
      price: "1,446 Sq.Ft Carpet",
      specs: "Dedicated Dining Nook • Separate Utility & En-Suites",
      image: "/hero-showcase/showcase-04.jpg",
      slideNumber: "06 / 06"
    }
  ];

  // Auto-play timer: auto-rotates every 3 seconds, and jumps back to the first slide once reaching the end
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIdx, slides.length]);

  const handlePrev = () => {
    soundFX.playClick();
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    soundFX.playClick();
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handleSelectSlide = (idx) => {
    soundFX.playClick();
    setCurrentIdx(idx);
  };

  const scrollToNextViewport = () => {
    soundFX.playClick();
    const secondViewport = document.getElementById('heritage-hero-section');
    if (secondViewport) {
      secondViewport.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const s = slides[currentIdx];

  return (
    <section 
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#07080a] text-white pt-24 pb-12"
    >
      {/* Background Project Photography Layer with Crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
              idx === currentIdx ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Deep Cinematic Contrast Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080af2] via-[#07080ab3] to-[#07080a59]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080af0] via-transparent to-[#07080abf]" />
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_70%)]" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between min-h-[75vh] lg:min-h-[80vh]">
        
        {/* Top Badges & Project Counter */}
        <div className="flex items-center justify-between pt-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#0d0f15]/80 px-4 py-1.5 text-xs font-semibold text-[#f5d77f] backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
            <Sparkles className="h-3.5 w-3.5 text-[#f5d77f]" />
            <span className="font-mono tracking-wider uppercase text-[11px] sm:text-xs">
              {s.badge}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1 text-xs font-mono text-gray-300 backdrop-blur-md">
            <span className="text-[#f5d77f] font-bold">{s.slideNumber}</span>
            <span className="text-gray-500">|</span>
            <span className="text-[11px] text-gray-400">PRESTIGIOUS LANDMARKS</span>
          </div>
        </div>

        {/* Central Hero Showcase Information */}
        <div className="max-w-3xl space-y-4 sm:space-y-6 my-auto text-left py-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#f5d77f]">
              <MapPin className="h-4 w-4 text-[#d4af37] shrink-0" />
              <span>{s.location}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              {s.title}
            </h1>
          </div>

          <p className="font-serif-luxury text-base sm:text-xl lg:text-2xl italic text-gray-200 leading-relaxed max-w-2xl">
            "{s.tagline}"
          </p>

          {/* Quick Specs & Price Pill */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="rounded-xl border border-[#d4af37]/40 bg-black/70 px-4 py-2 backdrop-blur-md">
              <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Specification</span>
              <span className="text-xs sm:text-sm font-semibold text-white">{s.specs}</span>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Starting Configuration</span>
              <span className="text-xs sm:text-sm font-bold text-[#f5d77f] font-mono">{s.price}</span>
            </div>
          </div>

          {/* Interactive Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenBooking(s.title);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Schedule VIP Site Tour</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                navigate(`/project/${s.projectId}`);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:border-[#d4af37] hover:text-[#f5d77f] backdrop-blur-md transition-colors"
            >
              <span>View Project Details</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Slider Thumbnails, Controls & Scroll Cue */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Thumbnail Progress Switchers */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 border ${
                  idx === currentIdx
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/60 scale-105'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
                title={slide.title}
              >
                <div className="w-14 sm:w-16 h-10 sm:h-12 relative bg-black">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {idx === currentIdx && (
                    <div className="absolute inset-0 bg-[#d4af37]/20 border-b-2 border-[#d4af37]" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Left / Right Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              onMouseEnter={() => soundFX.playHover()}
              className="h-10 w-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleNext}
              onMouseEnter={() => soundFX.playHover()}
              className="h-10 w-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
              aria-label="Next Project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator Cue to Second Viewport */}
      <button
        onClick={scrollToNextViewport}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-[#f5d77f] transition-colors z-20 group"
        aria-label="Scroll to company legacy"
      >
        <span className="hidden sm:inline opacity-80 group-hover:opacity-100">Explore Legacy & Engineering</span>
        <ChevronDown className="h-4 w-4 text-[#d4af37] animate-bounce" />
      </button>

    </section>
  );
}