import React, { useState } from 'react';
import { 
  Maximize2, 
  Compass, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Eye,
  Building2,
  ArrowRight
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function FloorPlanViewer({ onOpenBooking }) {
  const [activeWing, setActiveWing] = useState('emerald');

  const wingPlans = {
    emerald: {
      wingName: "A-Wing: Emerald Tower",
      tagline: "Typical Floor Plan & Key Plan",
      image: "/jewel/01-A-Wing-Emerald.jpg",
      units: ["1 BHK Royale", "2 BHK Grande", "3 BHK Imperia"],
      facing: "High Elevation Views & Double Main Road Frontage",
      specs: [
        "4' x 2' verified vitrified flooring in all rooms",
        "Granite kitchen platform with stainless steel sink & ceramic tiles",
        "Anodized aluminium sliding windows with mosquito mesh",
        "Concealed plumbing with branded sanitary & CP fittings"
      ]
    },
    opal: {
      wingName: "C-Wing: Opal Tower",
      tagline: "Typical Floor Plan & Key Plan",
      image: "/jewel/03-C-Wing-Opal.jpg",
      units: ["1 BHK & 2 BHK Residences", "Scenic Boulevard Facing"],
      facing: "Podium & Boulevard Facing with Cross-Ventilation",
      specs: [
        "Internal walls finished with acrylic emulsion paint",
        "Electrical copper wiring with modular MCB & ELCB",
        "Anti-skid ceramic tiles in WC & bathrooms with full height tiles",
        "Telephone and TV points in living room & bedrooms"
      ]
    },
    sapphire: {
      wingName: "D-Wing: Sapphire Tower",
      tagline: "Typical Floor Plan & Key Plan",
      image: "/jewel/04-D-Wing-Sapphire.jpg",
      units: ["2 BHK Grande & Exclusive Terrace Flats", "Podium Leisure Facing"],
      facing: "Direct 26,000 Sq.Ft Podium Landscape & Swimming Pool View",
      specs: [
        "Provision for exhaust fan / chimney & water purifier",
        "Intercom system & cable provision for entire complex",
        "CCTV coverage to each flat & all designated common areas",
        "100% DG backup for lifts & common utility zones"
      ]
    }
  };

  const current = wingPlans[activeWing];

  return (
    <section id="floor-plans" className="relative py-24 bg-[#08090b] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f]">
            <Compass className="h-3.5 w-3.5" />
            <span>OFFICIAL ARCHITECTURAL DRAWINGS & WING LAYOUTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            FLOOR PLANS & <span className="text-gold-gradient font-serif-luxury italic">WING LAYOUTS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Official typical floor plans from <span className="text-white font-medium">mitkarbuilders.com/jewel-of-panvel</span> for Emerald, Opal & Sapphire towers.
          </p>

          {/* Wing Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {Object.keys(wingPlans).map((key) => {
              const isSelected = activeWing === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveWing(key);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105'
                      : 'border border-white/10 bg-[#12141a] text-gray-300 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {wingPlans[key].wingName.split(':')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout Visualizer & Specification Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Blueprint Image */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-3xl border border-[#d4af37]/30 bg-[#0d0f14] p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#d4af37] tracking-widest uppercase">
                  OFFICIAL MAHARERA ARCHITECTURAL DRAWING
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {current.wingName}
                </h3>
              </div>
              <a
                href={current.image}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-300 hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Enlarge</span>
              </a>
            </div>

            {/* The Blueprint Photo */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black border border-white/10 flex items-center justify-center">
              <img
                src={current.image}
                alt={current.wingName}
                className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Bottom Meta */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-[#f5d77f]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{current.facing}</span>
              </span>
              <span className="font-mono text-gray-400">MahaRERA: P52000028505</span>
            </div>
          </div>

          {/* Right Column: Approved Specs & Inquire Action */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111319] p-6 shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#d4af37] tracking-wider uppercase font-semibold">
                WING SPECIFICATIONS
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                {current.wingName}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Approved typical floor plan layout.
              </p>

              {/* Units available in this wing */}
              <div className="mt-5 space-y-2">
                <span className="text-xs text-gray-400 font-semibold uppercase block">Typologies In This Wing</span>
                <div className="flex flex-wrap gap-1.5">
                  {current.units.map((u, i) => (
                    <span key={i} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-[#f5d77f]">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Internal Specs from website */}
              <div className="mt-6 space-y-3">
                <span className="text-xs text-gray-400 font-semibold uppercase block">Internal Fit-Out Standards</span>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  {current.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  if (onOpenBooking) onOpenBooking(`Jewel of Panvel - ${current.wingName} Booking`);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] py-3 text-xs font-bold text-black shadow-md hover:scale-[1.02] transition-transform"
              >
                <span>Request Detailed Floor Plan PDF</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="text-center text-[10px] text-gray-500">
                Facing dual 2-main roads (M.G. Road & M.Y. Road)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
