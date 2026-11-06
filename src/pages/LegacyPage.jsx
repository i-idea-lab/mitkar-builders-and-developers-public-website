import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Target, 
  Eye, 
  Heart,
  ArrowRight,
  MapPin,
  Ruler,
  Users
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function LegacyPage({ onOpenBooking }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const milestones = [
    {
      year: '1999',
      title: 'Foundation of Mitkar Builders & Developers',
      desc: 'Established with a core conviction: uncompromising civil engineering rigor, honest pricing, and transparency in Navi Mumbai.'
    },
    {
      year: '2008',
      title: 'Pioneering Seawoods Sector 50 & Palm Beach Corridor',
      desc: 'Delivered landmark residential towers like Apramit, N.M. Height, S.M. Heights, and Villa Castle setting new benchmarks in quality.'
    },
    {
      year: '2016',
      title: 'Expansion into Nerul, Ulwe, Kamothe & Taloja',
      desc: 'Delivered M. Com Pride, M. Tech Homes, M. Com Apartment, M. Com Shelter, and Anmol Heritage along major transit corridors.'
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
    <div className="min-h-screen bg-[#08090b] text-white pt-28 pb-24">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#d4af37]/15 to-transparent rounded-full blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f]">
            <Award className="h-3.5 w-3.5" />
            <span>25+ YEARS OF ARCHITECTURAL EXCELLENCE (ESTD. 1999)</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            THE MITKAR <span className="text-gold-gradient font-serif-luxury italic">TRADITION</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Human emotions and sentiments play a key role in building the foundation of a happy and secure Indian home. Keeping that in mind, we at Mitkar Group treat our edifices of concrete with the warmth of compassion to offer homes of unparalleled value.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-r from-[#141720] via-[#0d0f14] to-[#141720] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Leadership Portrait & Credentials */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-56 h-64 rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.25)] bg-[#12141a] flex items-center justify-center p-2 group">
                <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-[#1a1c24] to-[#0a0c10] overflow-hidden flex flex-col items-center justify-center text-center p-4 border border-white/5">
                  <img
                    src="/tabrez-mitkar.jpg"
                    alt="Mr. Tabrez Ahmed Mitkar"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Graceful Fallback if photo not yet loaded */}
                  <div className="hidden flex-col items-center justify-center text-center space-y-3 z-10 w-full h-full">
                    <img
                      src="/mitkar-logo-white.png"
                      alt="Mitkar Builders Official Logo"
                      className="h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(232,89,12,0.4)]"
                    />
                    <div className="text-[10px] uppercase tracking-widest text-[#f5d77f] font-semibold">
                      Engineering • Trust • Vision
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">Mr. Tabrez Ahmed Mitkar</h3>
                <div className="text-xs text-[#d4af37] font-semibold">Managing Director & Owner</div>
                <div className="text-[11px] text-gray-400">Mitkar Builders & Developers</div>
              </div>
            </div>

            {/* Right: Message & Commitments */}
            <div className="lg:col-span-8 text-left space-y-5">
              <div className="relative pl-6 border-l-2 border-[#d4af37]/60 italic font-serif-luxury text-base sm:text-lg text-gray-200 leading-relaxed">
                <Quote className="h-6 w-6 text-[#d4af37]/40 mb-2 not-italic" />
                "Since 1999, we have delivered over 25+ landmark projects across prominent nodes of Navi Mumbai. A building is never just concrete and steel — it is a sanctuary where families nurture dreams across generations. Being grateful for our accomplishments, we will continue to add further value to our capabilities and commitments while emphasizing topmost international standards of quality and safety."
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">1. Engineering</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Seismic RCC design & certified audits</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">2. Legal Clarity</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">100% Clear titles & full MahaRERA compliance</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">3. Timely Delivery</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">25-year track record of on-schedule handovers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-[#f5d77f]">4. Sustainability</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Solar power, rainwater harvesting & OWC</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Vision & Mission Cards (From official about-us page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Vision */}
          <div className="rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#161822] to-[#0f1118] p-8 shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f]">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#d4af37] tracking-widest uppercase">FORWARD OUTLOOK</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">Our Vision</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              We see ourselves revitalizing the skyline of Navi Mumbai with landmarks of repute worth their weight in gold that appreciate in value with each passing day. Building tomorrow today and making Navi Mumbai smarter, livelier, healthier, and greener is centric to the Mitkar dream initiative.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-3xl border border-white/10 bg-[#111319] p-8 shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white">
              <Target className="h-6 w-6 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">OUR PROMISE</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">Our Mission</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our focus lies in guaranteeing real value for your money by maintaining unparalleled quality standards in all our projects and ensuring on-time delivery, every time. With zero compromise on structural integrity and transparent client dealings.
            </p>
          </div>

        </div>

        {/* 25-Year Timeline */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              The Journey of Landmark Creation
            </span>
            <h2 className="text-3xl font-display font-bold text-white">25-Year Growth Trajectory</h2>
          </div>

          <div className="relative border-l border-[#d4af37]/30 ml-4 sm:ml-28 space-y-8 text-left">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                <div className="absolute -left-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#12141a] border-2 border-[#d4af37] group-hover:scale-125 transition-transform shadow-[0_0_10px_#d4af37]">
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-[#101217] group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5 transition-all">
                  <div className="inline-block rounded-full bg-[#d4af37]/20 px-3 py-0.5 text-xs font-mono font-bold text-[#f5d77f] mb-2 border border-[#d4af37]/30">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-display font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to explore delivered projects */}
        <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-r from-[#141720] via-[#101217] to-[#141720] p-8 text-center space-y-4">
          <h3 className="font-display text-2xl font-bold text-white">
            Explore 25+ Delivered & Ongoing Landmarks
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Discover our completed towers across Seawoods, Nerul, Ulwe, Kamothe & Panvel with 100% full occupancy certification.
          </p>
          <div>
            <button
              onClick={() => {
                soundFX.playClick();
                navigate('/portfolio');
              }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-7 py-3 text-xs font-bold text-black shadow-md hover:scale-105 transition-transform"
            >
              <span>View Complete Portfolio</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
