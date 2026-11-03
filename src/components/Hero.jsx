import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Layers, Award } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function Hero({ onOpenBooking }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);
  const visualCardRef = useRef(null);
  const floatBadge1 = useRef(null);
  const floatBadge2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
      .from(headlineRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }, '-=0.4')
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from(ctaRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')
      .from(visualCardRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.8')
      .from([floatBadge1.current, floatBadge2.current], {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.6');

      // Subtle continuous floating motion on badges
      gsap.to(floatBadge1.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(floatBadge2.current, {
        y: 10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect on the showcase card
  const handleMouseMove = (e) => {
    if (!visualCardRef.current) return;
    const rect = visualCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(visualCardRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power1.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!visualCardRef.current) return;
    gsap.to(visualCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Radial Luxury Lighting Background */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#d4af37]/15 via-[#aa820a]/8 to-transparent rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[350px] bg-cyan-900/10 rounded-full blur-[120px]" />
      
      {/* Subtle Blueprint & Grid lines */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Cinematic Typography */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top pill badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#12141a]/90 px-3.5 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
              <Award className="h-3.5 w-3.5 text-[#f5d77f]" />
              <span className="text-[11px] font-semibold tracking-wider text-[#f5d77f] uppercase">
                25+ Years Legacy of Trust • Estd. 1999
              </span>
            </div>

            {/* Split Headline */}
            <h1 ref={headlineRef} className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              <span className="block">SCULPTING SKYLINE</span>
              <span className="block text-gold-gradient font-serif-luxury italic font-medium">
                MASTERPIECES
              </span>
              <span className="block text-silver-gradient text-3xl sm:text-4xl xl:text-5xl font-extralight tracking-normal mt-1">
                Across Navi Mumbai
              </span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="max-w-2xl text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              Founded by civil engineer <strong className="text-white font-semibold">Mr. Muzakki Mitkar</strong>, Mitkar Group has transformed Navi Mumbai’s skyline with 20+ delivered architectural landmarks. Discover our crowning marvel, <strong className="text-[#f5d77f] font-semibold">Jewel of Panvel</strong> — where luxury living meets 26,000 sq. ft. of podium lifestyle.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#flagship"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor-text="EXPLORE"
                className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#c59b27] px-7 py-3.5 text-sm font-bold text-black shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.5)] hover:scale-105"
              >
                <span>Explore Jewel of Panvel</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenBooking();
                }}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor-text="SCHEDULE"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#f5d77f]"
              >
                <Sparkles className="h-4 w-4 text-[#d4af37]" />
                <span>Schedule VIP Tour</span>
              </button>
            </div>

            {/* Micro badges below CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
                <span>MahaRERA: <strong className="text-gray-200">P52000028505</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d4af37]" />
                <span>M.G. Road, Old Panvel</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#d4af37]" />
                <span>2-Acre Mixed Development</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Architectural Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background luxury glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-3xl blur-2xl transform scale-95" />

            <div
              ref={visualCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#181b22] to-[#0c0e13] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                  alt="Mitkar Jewel of Panvel Landmark Tower"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/20 to-transparent opacity-90" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold tracking-wider text-[#f5d77f] border border-[#d4af37]/40 backdrop-blur-md uppercase">
                    Jewel of Panvel
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Now Booking
                  </span>
                </div>

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>4 Iconic Towers • Emerald, Sapphire, Opal & Pearl</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight">
                    Luxury 1, 2, 3 BHK & Sky Terraces
                  </h3>
                  <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
                    <span className="text-gray-300">Carpet: 367 - 1,150 sq.ft</span>
                    <span className="font-bold text-[#f5d77f]">From ₹ 54 L* Onwards</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 1: 26,000 Sq.Ft Podium */}
              <div
                ref={floatBadge1}
                className="absolute -left-6 top-16 hidden sm:flex items-center gap-3 rounded-2xl border border-[#d4af37]/40 bg-[#0f1117]/95 p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f]">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">26,000 Sq. Ft.</div>
                  <div className="text-[10px] text-[#f5d77f]">Grand Podium Amenities</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Panvel Junction Connectivity */}
              <div
                ref={floatBadge2}
                className="absolute -right-6 bottom-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#0f1117]/95 p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">3 Mins to Station</div>
                  <div className="text-[10px] text-gray-400">12 Mins to NMIA Airport</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
