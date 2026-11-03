import React from 'react';
import { Building2, Home, Landmark, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function GroupVerticals({ onExplorePortfolio }) {
  const verticals = [
    {
      title: "Luxury High-Rise Residences",
      icon: Building2,
      tagline: "Skyline Icons Engineered for Generations",
      desc: "Architecturally striking towers in prime urban nodes of Navi Mumbai, planned with zero space wastage, cross-ventilation, and resort-style lifestyle amenities.",
      projects: ["Jewel of Panvel", "N. M. Heights", "M. Con Pride"],
      badge: "High-Rise"
    },
    {
      title: "Boutique Enclaves & Neo-Classical Living",
      icon: Home,
      tagline: "European Elegance Meets Coastal Calm",
      desc: "Low-density, bespoke residences in prestigious nodes like Seawoods Sector 50, featuring handcrafted facades, private garden decks, and high 11-ft ceilings.",
      projects: ["Apramit Residency", "Villa Castle"],
      badge: "Boutique"
    },
    {
      title: "Commercial & High-Street Retail",
      icon: Landmark,
      tagline: "Strategic Grade-A Commercial Assets",
      desc: "Double-height street-facing retail showrooms, corporate boutique offices, and banking arcades designed with high footfalls and multi-tier basement parking.",
      projects: ["Mitkar Business Arcade", "Jewel Retail Plaza"],
      badge: "Commercial"
    },
    {
      title: "Redevelopment & Urban Transformation",
      icon: RefreshCw,
      tagline: "Transforming Heritage Societies into Modern Landmarks",
      desc: "End-to-end society redevelopment execution with transparent legal documentation, bank guarantees, and timely handovers led by civil engineering experts.",
      projects: ["Seawoods & Nerul Redevelopment Pockets"],
      badge: "Redevelopment"
    }
  ];

  return (
    <section id="expertise" className="relative py-24 bg-[#0a0c10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DIVERSIFIED REAL ESTATE PORTFOLIO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            OUR REAL ESTATE <span className="text-gold-gradient font-serif-luxury italic">VERTICALS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            From iconic high-rise communities to boutique European villas and high-street commercial hubs, discover the full spectrum of Mitkar Group’s expertise.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 rounded-3xl border border-white/10 bg-[#111319] hover:border-[#d4af37]/50 hover:bg-[#141720] transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f5d77f] group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider rounded-full bg-white/5 px-2.5 py-1 border border-white/10">
                      {v.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                      {v.title}
                    </h3>
                    <div className="text-xs text-[#d4af37] font-medium mt-0.5">{v.tagline}</div>
                    <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2 mt-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Key Landmark Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {v.projects.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[11px] rounded-lg bg-black/40 border border-white/10 px-2 py-0.5 text-gray-300"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
