import React from 'react';
import { Award, ShieldCheck, Quote, CheckCircle2, Sparkles, Building, Hammer } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function FoundersStory() {
  const milestones = [
    {
      year: '1999',
      title: 'Foundation by Civil Engineer Mr. Muzakki Mitkar',
      desc: 'Established with a core conviction: uncompromising civil engineering rigor, honest pricing, and transparency.'
    },
    {
      year: '2008',
      title: 'Pioneering Seawoods Sector 50 & Palm Beach Corridor',
      desc: 'Delivered landmark residential towers like Apramit, N.M. Heights, and Villa Castle setting new benchmarks in quality.'
    },
    {
      year: '2016',
      title: 'Expansion into Nerul & Ulwe Coastal Nodes',
      desc: 'Delivered M. Con Pride and Anmol Heritage, pioneering early developments aligned with the upcoming international airport.'
    },
    {
      year: '2024',
      title: 'Jewel of Panvel: The Flagship Mixed Development',
      desc: 'Launched the grand 2-acre, 4-tower icon on M.G. Road with 26,000 sq.ft of podium lifestyle amenities.'
    },
    {
      year: '2026+',
      title: 'Future Horizons & Sustainable Smart Communities',
      desc: 'Expanding into ultra-luxury eco-penthouses, solar-grid communities, and commercial business arcades.'
    }
  ];

  return (
    <section id="legacy" className="relative py-24 bg-[#08090b] text-white overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
            <Award className="h-3.5 w-3.5" />
            <span>25+ YEARS OF ARCHITECTURAL EXCELLENCE (1999 - 2024+)</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            THE MITKAR <span className="text-gold-gradient font-serif-luxury italic">LEGACY</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Guided by civil engineer Mr. Muzakki Mitkar’s philosophy of zero compromises in structural engineering, transparent dealings, and timely execution.
          </p>
        </div>

        {/* Founder Card Spotlight */}
        <div className="mt-14 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-r from-[#141720] via-[#0d0f14] to-[#141720] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Founder Seal & Official Logo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-56 rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.25)] bg-[#12141a] flex items-center justify-center p-4">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[#1a1c24] to-[#0a0c10] flex flex-col items-center justify-center text-center p-3 border border-white/5">
                  <img
                    src="/mitkar-logo-white.png"
                    alt="Mitkar Builders & Developers Official Logo"
                    className="h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(232,89,12,0.4)]"
                  />
                  <div className="text-[9px] uppercase tracking-widest text-[#f5d77f] font-semibold mt-2">Engineering • Trust • Vision</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">Mr. Muzakki Mitkar</h3>
                <div className="text-xs text-[#d4af37] font-semibold">Founder & Managing Director</div>
                <div className="text-[11px] text-gray-400">Civil Engineer | 25+ Years Experience</div>
              </div>
            </div>

            {/* Right: Visionary Statement & Core Tenets */}
            <div className="lg:col-span-8 text-left space-y-6">
              
              <div className="relative pl-6 border-l-2 border-[#d4af37]/60 italic font-serif-luxury text-base sm:text-lg text-gray-200 leading-relaxed">
                <Quote className="h-6 w-6 text-[#d4af37]/40 mb-2 not-italic" />
                "A building is never just concrete and steel. To us, it is a sacred sanctuary where families nurture dreams across generations. My engineering training taught me that strength begins in the foundation — and our greatest foundation is the unshakable trust of our homeowners."
              </div>

              {/* 4 Pillars of Mitkar Group */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">1. Engineering</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Seismic RCC frames & certified audits</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">2. Legal Clarity</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">100% Clear titles & MahaRERA compliance</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">3. Timely Delivery</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">25-year track record of on-schedule handovers</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">4. Sustainability</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Solar power, rainwater harvesting & OWC</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 25-Year Milestone Timeline */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              The Journey of Landmark Creation
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">25-Year Growth Trajectory</h3>
          </div>

          <div className="relative border-l border-[#d4af37]/30 ml-4 sm:ml-32 space-y-10 text-left">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Timeline node */}
                <div className="absolute -left-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#12141a] border-2 border-[#d4af37] group-hover:scale-125 transition-transform shadow-[0_0_10px_#d4af37]">
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                </div>

                {/* Timeline content */}
                <div className="p-5 rounded-2xl border border-white/10 bg-[#101217] group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5 transition-all">
                  <div className="inline-block rounded-full bg-[#d4af37]/20 px-3 py-0.5 text-xs font-mono font-bold text-[#f5d77f] mb-2 border border-[#d4af37]/30">
                    {item.year}
                  </div>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
