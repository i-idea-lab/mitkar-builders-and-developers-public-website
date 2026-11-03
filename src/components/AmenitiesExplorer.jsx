import React, { useState } from 'react';
import { amenitiesCategories } from '../data/amenitiesData';
import { 
  Waves, 
  Droplets, 
  Sparkles, 
  Dumbbell, 
  Footprints, 
  Flower2, 
  Film, 
  Gamepad2, 
  Laptop, 
  SunMedium, 
  CloudRain, 
  Leaf,
  Layers,
  ArrowRight
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

const iconMap = {
  Waves,
  Droplets,
  Sparkles,
  Dumbbell,
  Footprints,
  Flower2,
  Film,
  Gamepad2,
  Laptop,
  SunMedium,
  CloudRain,
  Leaf
};

export default function AmenitiesExplorer({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const currentCategory = amenitiesCategories[activeTab];

  return (
    <section id="amenities" className="relative py-24 bg-[#08090b] text-white overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/8 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
            <Layers className="h-3.5 w-3.5" />
            <span>26,000 SQ. FT. PODIUM & SKYLINE EXPERIENCES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            ELEVATED <span className="text-gold-gradient font-serif-luxury italic">LIFESTYLE</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            A private country club lifestyle crafted on an expansive 26,000 sq.ft podium deck and sky lounges designed for rejuvenation, leisure, and athletic wellness.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {amenitiesCategories.map((cat, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105'
                      : 'border border-white/10 bg-[#12141a] text-gray-300 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Subtitle */}
        <div className="mt-8 text-center text-xs tracking-widest uppercase text-[#d4af37] font-semibold">
          — {currentCategory.tagline} —
        </div>

        {/* Amenities Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentCategory.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#101217] transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                data-cursor-text="AMENITY"
              >
                {/* Visual Imagery */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101217] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/75 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-[#f5d77f] border border-[#d4af37]/40 backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#08090b]/80 border border-white/10 text-[#d4af37] backdrop-blur-md group-hover:border-[#d4af37] group-hover:text-[#f5d77f] transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#d4af37] font-semibold">
                    <span>Exclusive to Residents</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-r from-[#141720] via-[#101217] to-[#141720] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h4 className="text-lg sm:text-xl font-display font-bold text-white">
              Experience the 26,000 Sq. Ft. Podium Firsthand
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Walk through the Olympic lap pool, sky jogging track, and mini cinema at our sales lounge.
            </p>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onOpenBooking();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="shrink-0 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] px-6 py-3 text-xs font-bold text-black shadow-lg hover:scale-105 transition-transform"
          >
            <span>Book Guided Walkthrough</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
