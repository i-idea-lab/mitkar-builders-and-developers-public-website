import React, { useState } from 'react';
import { connectivityData } from '../data/connectivityData';
import { 
  Train, 
  Plane, 
  Compass, 
  Navigation, 
  Cross, 
  GraduationCap, 
  BookOpen, 
  HeartPulse, 
  ShoppingBag, 
  Building2, 
  Briefcase, 
  Trees,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

const iconMap = {
  Train,
  Plane,
  Compass,
  Navigation,
  Cross,
  GraduationCap,
  BookOpen,
  HeartPulse,
  ShoppingBag,
  Building2,
  Briefcase,
  Trees
};

export default function ConnectivityMap({ onOpenBooking }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const activeCategory = connectivityData[activeCategoryIdx];

  return (
    <section id="connectivity" className="relative py-24 bg-[#0a0c10] text-white">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
            <Navigation className="h-3.5 w-3.5" />
            <span>THE EPITOME OF TRANSIT CONNECTIVITY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            STRATEGIC <span className="text-gold-gradient font-serif-luxury italic">LOCATION</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Situated on M.G. Road in Old Panvel with two main arterial access roads, offering unprecedented proximity to railway junctions, expressways, and the upcoming international airport.
          </p>

          {/* Category Switcher */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {connectivityData.map((cat, idx) => {
              const isSelected = activeCategoryIdx === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveCategoryIdx(idx);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105'
                      : 'border border-white/10 bg-[#12141a] text-gray-300 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Connectivity Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Hub Graphic */}
          <div className="lg:col-span-5 rounded-3xl border border-[#d4af37]/30 bg-[#0d0f14] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Radar / Coordinate concentric circles */}
            <div className="relative aspect-square w-full rounded-2xl bg-black/70 border border-white/10 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Concentric distance rings */}
              <div className="absolute h-72 w-72 rounded-full border border-dashed border-[#d4af37]/15 animate-spin-slow" />
              <div className="absolute h-52 w-52 rounded-full border border-dashed border-[#d4af37]/25" />
              <div className="absolute h-32 w-32 rounded-full border border-[#d4af37]/40" />

              {/* Central Pin: Jewel of Panvel */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] shadow-[0_0_25px_#d4af37] text-black animate-bounce">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="mt-2 rounded-full bg-black/90 px-3 py-1 text-[11px] font-bold text-[#f5d77f] border border-[#d4af37]/40 shadow-lg">
                  Jewel of Panvel (MG Road)
                </div>
              </div>

              {/* Surrounding Nodes */}
              <div className="absolute top-8 left-8 flex items-center gap-1.5 rounded-lg bg-[#12141a]/90 px-2 py-1 text-[10px] text-gray-300 border border-white/10">
                <Train className="h-3 w-3 text-[#d4af37]" />
                <span>Panvel Stn (3m)</span>
              </div>

              <div className="absolute top-10 right-8 flex items-center gap-1.5 rounded-lg bg-[#12141a]/90 px-2 py-1 text-[10px] text-cyan-400 border border-cyan-500/20">
                <Plane className="h-3 w-3" />
                <span>NMIA Airport (12m)</span>
              </div>

              <div className="absolute bottom-10 left-8 flex items-center gap-1.5 rounded-lg bg-[#12141a]/90 px-2 py-1 text-[10px] text-amber-300 border border-amber-500/20">
                <Navigation className="h-3 w-3" />
                <span>Atal Setu (18m)</span>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center gap-1.5 rounded-lg bg-[#12141a]/90 px-2 py-1 text-[10px] text-emerald-400 border border-emerald-500/20">
                <Compass className="h-3 w-3" />
                <span>Expressway (5m)</span>
              </div>
            </div>

            {/* Quick summary below map */}
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
              <span>Dual Arterial Road Connectivity</span>
              <span className="text-[#f5d77f] font-semibold">100% Signal-Free Access</span>
            </div>

          </div>

          {/* Right Column: Destination Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || MapPin;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-[#111319] hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 transition-all duration-300 text-left"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#d4af37] group-hover:border-[#d4af37] group-hover:text-[#f5d77f] transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-[#d4af37]/15 px-2.5 py-1 text-[11px] font-bold text-[#f5d77f] border border-[#d4af37]/30">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-display text-sm font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                        {item.name}
                      </h4>
                      <div className="text-[11px] font-mono text-[#d4af37] mt-0.5">
                        Distance: {item.distance}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
