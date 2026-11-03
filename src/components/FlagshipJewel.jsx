import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  Calendar, 
  Compass, 
  Maximize2,
  ChevronRight,
  Eye,
  Check
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function FlagshipJewel({ onOpenBooking }) {
  const [activeTower, setActiveTower] = useState('Emerald Tower');
  const [activeConfig, setActiveConfig] = useState(0);

  const towers = [
    { name: 'Emerald Tower', badge: 'High Elevation Views', status: 'Structure Complete' },
    { name: 'Sapphire Tower', badge: 'Podium Facing', status: 'Finishing Stage' },
    { name: 'Opal Tower', badge: 'Scenic Boulevard Facing', status: 'Upper Floors Underway' },
    { name: 'Pearl Tower', badge: 'Exclusive Corner Suites', status: 'Bookings Open' },
  ];

  const configs = [
    {
      type: "1 BHK Royale",
      carpet: "367 - 425 Sq. Ft.",
      balcony: "Panoramic Sundeck",
      startingPrice: "₹ 54 Lakhs*",
      keyFeatures: [
        "Vastu-compliant East-West entrance options",
        "Spacious master bedroom with wardrobe niche",
        "Designer modular kitchen with granite platform",
        "Anti-skid vitrified flooring in all spaces"
      ],
      planImage: "/jewel/01-A-Wing-Emerald.jpg"
    },
    {
      type: "2 BHK Grande",
      carpet: "602 - 680 Sq. Ft.",
      balcony: "Dual Sundecks",
      startingPrice: "₹ 88 Lakhs*",
      keyFeatures: [
        "Two luxury en-suite bathrooms with premium sanitaryware",
        "Private living room deck with sweeping city & hills view",
        "Separate dedicated dining niche and dry balcony",
        "Branded CP fittings with 10-year warranty"
      ],
      planImage: "/jewel/03-C-Wing-Opal.jpg"
    },
    {
      type: "3 BHK Imperia",
      carpet: "871 - 995 Sq. Ft.",
      balcony: "Wraparound Skyline Verandah",
      startingPrice: "₹ 1.35 Cr*",
      keyFeatures: [
        "Triple-bedroom layout with master suite walk-in wardrobe",
        "Grand 22-ft living hall with full-height French windows",
        "Acoustic insulated soundproofing glass panels",
        "Pre-installed automation & smart door lock provision"
      ],
      planImage: "/jewel/04-D-Wing-Sapphire.jpg"
    },
    {
      type: "Sky Terraces",
      carpet: "1,150+ Sq. Ft.",
      balcony: "Private Open-to-Sky Deck",
      startingPrice: "Price on Request",
      keyFeatures: [
        "Exclusive top-floor penthouses with private terrace lounge",
        "Panoramic 360-degree views of Prabalgad and Panvel hills",
        "Customizable duplex layout options with high 11-ft ceilings",
        "Dedicated VIP priority elevator access"
      ],
      planImage: "/jewel/01-slide.jpg"
    }
  ];

  return (
    <section id="flagship" className="relative py-24 bg-[#08090b] text-white overflow-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE CROWNING ICON OF OLD PANVEL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              JEWEL OF <span className="text-gold-gradient font-serif-luxury italic">PANVEL</span>
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-gray-300">
              A monumental ~2-acre landmark featuring 4 soaring architectural towers on prestigious M.G. Road with 26,000 sq.ft of elevated podium amenities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#12141a] px-4 py-2.5 text-xs">
              <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">MahaRERA Registration</div>
                <div className="font-bold text-[#f5d77f]">P52000028505</div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onOpenBooking();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] px-5 py-2.5 text-xs font-bold text-black shadow-lg transition-transform hover:scale-105"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Brochure & Pricing</span>
            </button>
          </div>
        </div>

        {/* 4 Towers Selector Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {towers.map((tower) => {
            const isSelected = activeTower === tower.name;
            return (
              <button
                key={tower.name}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTower(tower.name);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#d4af37] bg-gradient-to-b from-[#1c1f26] to-[#12141a] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#f5d77f]' : 'text-white'}`}>
                    {tower.name}
                  </span>
                  <Building2 className={`h-3.5 w-3.5 ${isSelected ? 'text-[#d4af37]' : 'text-gray-500'}`} />
                </div>
                <span className="text-[10px] text-gray-400 mt-1">{tower.badge}</span>
                <span className="text-[9px] text-emerald-400 font-medium mt-0.5">{tower.status}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Image & Feature Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#101217] p-4 sm:p-6 shadow-2xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
              <img
                src={configs[activeConfig].planImage}
                alt={`Jewel of Panvel ${configs[activeConfig].type}`}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-[#f5d77f] border border-[#d4af37]/30 backdrop-blur-md">
                  {activeTower}
                </span>
                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white border border-white/20 backdrop-blur-md">
                  {configs[activeConfig].type}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs text-gray-300">Carpet Area</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    {configs[activeConfig].carpet}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-300">Investment Starts</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-gold-gradient">
                    {configs[activeConfig].startingPrice}
                  </div>
                </div>
              </div>
            </div>

            {/* USPs row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-left">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-gray-400">Podium Space</div>
                <div className="text-xs font-bold text-white">26,000 Sq.Ft</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-gray-400">Road Frontage</div>
                <div className="text-xs font-bold text-white">Dual Main Roads</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-gray-400">Panvel Station</div>
                <div className="text-xs font-bold text-white">1.5 km (3 Mins)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-gray-400">NMIA Airport</div>
                <div className="text-xs font-bold text-white">12 Mins Drive</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Configuration Tabs & Room Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#141720] to-[#0c0e13] p-6 shadow-2xl">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  Select Unit Configuration
                </span>
                <span className="text-[11px] text-gray-400">All configurations Vastu compliant</span>
              </div>

              {/* Configuration buttons */}
              <div className="grid grid-cols-2 gap-2">
                {configs.map((cfg, idx) => (
                  <button
                    key={cfg.type}
                    onClick={() => {
                      soundFX.playClick();
                      setActiveConfig(idx);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeConfig === idx
                        ? 'border-[#d4af37] bg-[#d4af37]/15 text-white shadow-md'
                        : 'border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{cfg.type}</div>
                    <div className="text-[10px] text-[#f5d77f] font-mono">{cfg.carpet}</div>
                  </button>
                ))}
              </div>

              {/* Selected Config Feature Checklist */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-3 mt-4 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#d4af37]" />
                    <span>{configs[activeConfig].type} Specifications</span>
                  </div>
                  <span className="text-xs font-bold text-[#f5d77f]">{configs[activeConfig].startingPrice}</span>
                </div>

                <div className="space-y-2.5">
                  {configs[activeConfig].keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#f5d77f]">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenBooking();
                }}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor-text="VISIT SITE"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] py-3 text-xs font-bold text-black shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Site Tour for {configs[activeConfig].type}</span>
              </button>

              <div className="text-center text-[11px] text-gray-400">
                Exclusive sample flat viewing available at M.G. Road sales pavilion.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
