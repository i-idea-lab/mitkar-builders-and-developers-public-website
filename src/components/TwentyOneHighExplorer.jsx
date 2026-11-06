import React, { useState } from 'react';
import { 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  Eye,
  Building,
  Layers,
  Compass,
  X
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function TwentyOneHighExplorer({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      id: "tower-elevation",
      title: "Architectural Tower Elevation at Sunset",
      subtitle: "A life of distinction. An address to match in prime Nerul.",
      badge: "Signature Elevation",
      tag: "Exterior Architecture",
      image: "/hero-showcase/showcase-02.jpg",
      specs: [
        "Curvilinear contemporary facade with aerodynamically contoured balconies",
        "Designer warm golden ambient facade illumination",
        "Gated access with landscaped street-level security perimeter",
        "Limited edition boutique address: Only 1 family per floor plate"
      ]
    },
    {
      id: "sunset-balcony",
      title: "Panoramic Sunset Verandah & Deck",
      subtitle: "What if your entire floor belonged only to you?",
      badge: "Skyline Verandah",
      tag: "Private Lifestyle",
      image: "/hero-showcase/showcase-01.jpg",
      specs: [
        "Unobstructed western horizon views capturing golden sunset hues",
        "1.1-metre wide seamless tempered glass safety balustrades",
        "Imported anti-skid exterior deck tiles with concealed drainage",
        "Floor-to-ceiling acoustic double-glazed sliding fenestration"
      ]
    },
    {
      id: "luxury-interiors",
      title: "Spacious, Elegant, Uncompromising Living Suite",
      subtitle: "Expansive sunlit living & dining spaces with travertine stone craftsmanship.",
      badge: "Interior Grandeur",
      tag: "Living & Dining",
      image: "/hero-showcase/showcase-03.jpg",
      specs: [
        "1,446 Sq.Ft RERA Carpet Area with dedicated dining and living zones",
        "Italian marble flooring with custom travertine marble TV feature walls",
        "Cove ceiling illumination with pre-installed acoustic insulation",
        "Separate dedicated wet/dry kitchen with utility balcony"
      ]
    },
    {
      id: "floor-plan",
      title: "1st to 8th Typical 4-BHK Master Floor Plan",
      subtitle: "4 Bedrooms. Room for a life beyond ordinary. Zero dead space layout.",
      badge: "Approved Blueprint",
      tag: "Architectural Layout",
      image: "/hero-showcase/showcase-04.jpg",
      specs: [
        "Grand Living Hall: 6.00 m × 6.10 m (19'8\" × 20'0\")",
        "Dining Alcove: 3.35 m × 3.95 m (11'0\" × 13'0\")",
        "Modular Chef's Kitchen: 3.35 m × 3.65 m (11'0\" × 12'0\")",
        "4 Bedrooms with ensuite master suites & private lift lobby access"
      ]
    }
  ];

  const current = galleryItems[activeTab];

  return (
    <section className="py-20 bg-[#0a0c10] text-white border-y border-[#d4af37]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f]">
            <Sparkles className="h-4 w-4" />
            <span>21 HIGH • EXCLUSIVE ARCHITECTURAL GALLERY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            EXPLORE THE <span className="text-gold-gradient font-serif-luxury italic">WHOLE-FLOOR RESIDENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Click through the curated photography of 21 High Nerul: from golden sunset tower views to the master living suite and floor plan.
          </p>
        </div>

        {/* Gallery Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                soundFX.playClick();
                setActiveTab(idx);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                  : 'border border-white/10 bg-white/5 text-gray-300 hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              <Building className="h-3.5 w-3.5" />
              <span>{item.tag}</span>
            </button>
          ))}
        </div>

        {/* Showcase Stage Card */}
        <div className="rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#141720] via-[#0d0f15] to-[#0a0c10] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image View with Zoom Lightbox Trigger */}
            <div className="lg:col-span-7 relative group">
              <div 
                onClick={() => setLightboxImage(current.image)}
                className="relative aspect-[4/5] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-black shadow-xl cursor-zoom-in"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-black/70 border border-[#d4af37]/40 px-3.5 py-1 text-[11px] font-mono text-[#f5d77f] backdrop-blur-md">
                    {current.badge}
                  </span>
                </div>

                {/* Click to Zoom Pill */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/80 border border-white/20 px-3 py-1.5 text-xs text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3.5 w-3.5 text-[#f5d77f]" />
                    <span>Click to Zoom</span>
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Right Information & Specifications */}
            <div className="lg:col-span-5 text-left space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-semibold block">
                  {current.tag} • 21 HIGH NERUL
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {current.title}
                </h3>
              </div>

              <p className="font-serif-luxury text-base sm:text-lg italic text-gray-200 leading-relaxed border-l-2 border-[#d4af37] pl-4">
                "{current.subtitle}"
              </p>

              {/* Specifications List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Architectural Specifications:
                </div>
                {current.specs.map((sp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>

              {/* Interactive CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenBooking(`21 High - ${current.title}`);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa820a] px-6 py-3 text-xs font-bold text-black shadow-lg hover:scale-105 transition-all"
                >
                  <span>Book Private Tour</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setLightboxImage(current.image);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>View Fullsize</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Core Pillars of 21 High Living */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="p-5 rounded-2xl border border-white/10 bg-[#12141a]/80 space-y-2">
            <span className="text-xs font-mono text-[#f5d77f] font-bold">01 // TOTAL PRIVACY</span>
            <h4 className="text-sm font-bold text-white">One Home Per Floor</h4>
            <p className="text-xs text-gray-400">Zero shared walls. Your own private elevator lobby opens right into your residence.</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-[#12141a]/80 space-y-2">
            <span className="text-xs font-mono text-[#f5d77f] font-bold">02 // 1,446 SQ.FT RERA</span>
            <h4 className="text-sm font-bold text-white">Expansive 4 BHK</h4>
            <p className="text-xs text-gray-400">Four sprawling bedrooms, separate dining alcove, utility balcony and en-suite master suites.</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-[#12141a]/80 space-y-2">
            <span className="text-xs font-mono text-[#f5d77f] font-bold">03 // STRATEGIC NERUL</span>
            <h4 className="text-sm font-bold text-white">Heart of Prime Nerul</h4>
            <p className="text-xs text-gray-400">Minutes from Palm Beach Road, LP Junction, DY Patil, and Atal Setu (MTHL) direct to Mumbai.</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-[#12141a]/80 space-y-2">
            <span className="text-xs font-mono text-[#f5d77f] font-bold">04 // TRANSPARENT TITLE</span>
            <h4 className="text-sm font-bold text-white">100% Freehold Trust</h4>
            <p className="text-xs text-gray-400">25+ year Mitkar Group civil engineering assurance with full MahaRERA compliance.</p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl animate-fadeIn cursor-zoom-out"
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:border-[#d4af37] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <img
            src={lightboxImage}
            alt="21 High Project Full View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}

    </section>
  );
}