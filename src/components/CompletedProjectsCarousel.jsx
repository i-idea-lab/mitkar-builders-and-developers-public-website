import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Award } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export const completedProjectsData = [
  {
    id: 'apramit-seawoods',
    name: 'APRAMIT',
    location: 'Seawoods, Navi Mumbai',
    image: '/completed/01-apramit-seawoods.jpg',
  },
  {
    id: 'nm-heights',
    name: 'N. M. HEIGHT',
    location: 'Seawoods, Navi Mumbai',
    image: '/completed/02-n-m-height-seawoods.jpg',
  },
  {
    id: 'm-com-pride',
    name: 'M. COM PRIDE',
    location: 'Seawoods, Navi Mumbai',
    image: '/completed/03-m-com-pride.jpg',
  },
  {
    id: 'm-com-apartment',
    name: 'M. COM APARTMENT',
    location: 'Kamothe, Navi Mumbai',
    image: '/completed/04-m-com-apartment.jpg',
  },
  {
    id: 'm-com-shelter',
    name: 'M. COM SHELTER',
    location: 'Taloja, Navi Mumbai',
    image: '/completed/05-m-com-shelter.jpg',
  },
  {
    id: 'm-tech-homes',
    name: 'M. TECH HOMES',
    location: 'Nerul, Navi Mumbai',
    image: '/completed/m-tech-homes.jpg',
  },
  {
    id: 'sm-heights',
    name: 'S. M. HEIGHTS',
    location: 'Seawoods, Navi Mumbai',
    image: '/completed/07-s-m-heights.jpg',
  },
  {
    id: 'villa-castle',
    name: 'VILLA CASTLE',
    location: 'Seawoods, Navi Mumbai',
    image: '/completed/08-villa-castle.jpg',
  },
  {
    id: 'anmol-heritage',
    name: 'ANMOL HERITAGE',
    location: 'Ulwe, Navi Mumbai',
    image: '/completed/09-anmol-heritage.jpg',
  },
];

export default function CompletedProjectsCarousel() {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollByAmount = (amount) => {
    soundFX.playClick();
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (projectId) => {
    soundFX.playClick();
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="relative py-14 sm:py-16 bg-[#08090b] text-white border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient radiance */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#d4af37]/10 to-transparent rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Navigation Controls */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f] mb-2">
              <Award className="h-3.5 w-3.5" />
              <span>COMPLETED LANDMARKS • 100% OC HANDED OVER</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              DELIVERED <span className="text-gold-gradient font-serif-luxury italic">PROJECTS</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Click on any project to explore full architectural details & floor plans.
            </p>
          </div>

          {/* Left / Right Carousel Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollByAmount(-340)}
              onMouseEnter={() => soundFX.playHover()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 hover:border-[#d4af37] hover:text-[#f5d77f] hover:bg-[#d4af37]/10 transition-all active:scale-95"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByAmount(340)}
              onMouseEnter={() => soundFX.playHover()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 hover:border-[#d4af37] hover:text-[#f5d77f] hover:bg-[#d4af37]/10 transition-all active:scale-95"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Pure Carousel: Only Image + Name + Location -> Click navigates to project listing page */}
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {completedProjectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project.id)}
              onMouseEnter={() => soundFX.playHover()}
              data-cursor-text="VIEW"
              className="group relative flex-none w-[260px] sm:w-[290px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#101217] transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] hover:-translate-y-1"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Actual Project Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Arrow up right on hover */}
                <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-black transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Project Name & Location Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3 text-[#d4af37]" />
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
