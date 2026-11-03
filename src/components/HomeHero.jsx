import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';
import HeroStickAnimations from './HeroStickAnimations';

export default function HomeHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.8,
      })
      .from(headlineRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-14 lg:pt-36 lg:pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Animated GSAP Moving Net Checkered Grid Background (Unchanged) */}
      <AnimatedGridBackground />

      {/* Random Stick Machinery Animations with Border Streaks (Crane, Truck, Excavator, Theodolite) */}
      <HeroStickAnimations />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#d4af37]/15 via-[#997b28]/10 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-12 right-12 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[140px]" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Heritage Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#12141a]/90 px-4 py-1.5 shadow-[0_0_25px_rgba(212,175,55,0.2)] backdrop-blur-md mb-4 sm:mb-5">
          <span className="flex h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
          <Award className="h-3.5 w-3.5 text-[#f5d77f]" />
          <span className="text-xs font-semibold tracking-wider text-[#f5d77f] uppercase font-mono">
            MITKAR BUILDERS & DEVELOPERS • ESTD. 1999 • 25+ YEARS OF TRUST
          </span>
        </div>

        {/* Cinematic Kinetic Headline */}
        <h1 ref={headlineRef} className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
          <span className="block">ENGINEERING TOMORROW’S</span>
          <span className="block text-gold-gradient font-serif-luxury italic font-medium">
            LANDMARKS ACROSS NAVI MUMBAI
          </span>
          <span className="block text-silver-gradient text-2xl sm:text-4xl xl:text-5xl font-light tracking-wide mt-2">
            Seawoods • Nerul • Ulwe • Panvel
          </span>
        </h1>

      </div>
    </section>
  );
}
