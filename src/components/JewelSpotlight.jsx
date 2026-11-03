import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Layers, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function JewelSpotlight({ onExploreJewel, onOpenBooking }) {
  return (
    <section id="panvel-spotlight" className="relative py-24 bg-[#08090b] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[550px] bg-[#d4af37]/12 rounded-full blur-[170px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Spotlight Card */}
        <div className="relative rounded-3xl border border-[#d4af37]/50 bg-gradient-to-br from-[#161922] via-[#0e1016] to-[#12151e] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-3.5 py-1 text-xs font-bold text-[#f5d77f]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>FLAGSHIP MEGA DEVELOPMENT</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  JEWEL OF <span className="text-gold-gradient font-serif-luxury italic">PANVEL</span>
                </h2>
                <div className="text-sm font-semibold text-[#f5d77f]">
                  4 Soaring Towers • 2-Acre Mixed Landmark on Prestigious M.G. Road
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Mitkar Group’s crown jewel in Old Panvel. Spanning an expansive 2-acre footprint with two main arterial access roads, featuring <strong>26,000 sq.ft of elevated podium lifestyle</strong>, rooftop infinity garden, Olympic-style swimming pool, and luxury 1, 2, 3 BHK & Sky Terrace residences.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400">Podium Amenities</div>
                  <div className="text-xs font-bold text-white mt-0.5">26,000 Sq.Ft</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400">Towers</div>
                  <div className="text-xs font-bold text-[#f5d77f] mt-0.5">Emerald, Sapphire, Opal, Pearl</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400">Transit Access</div>
                  <div className="text-xs font-bold text-white mt-0.5">3m Stn • 12m Airport</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400">RERA Certified</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">P52000028505</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onExploreJewel();
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  data-cursor-text="DEEP DIVE"
                  className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-7 py-3.5 text-xs font-bold text-black shadow-lg transition-transform hover:scale-105"
                >
                  <span>Explore Jewel of Panvel Detailed Page</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenBooking('Jewel of Panvel');
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
                >
                  Schedule Site Tour
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#d4af37]/40 shadow-2xl bg-black">
                <img
                  src="/jewel/01-slide.jpg"
                  alt="Jewel of Panvel Landmark by Mitkar Group"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Starting from ₹ 54 Lakhs*</span>
                  <span className="text-[#f5d77f] font-mono">Possession: Dec 2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
