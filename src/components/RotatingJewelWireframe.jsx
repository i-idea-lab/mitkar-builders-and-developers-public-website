import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function RotatingJewelWireframe({ onExploreJewel }) {
  const containerRef = useRef(null);
  const jewelPivotRef = useRef(null);
  const jewelGroupRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const textRingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Continuous smooth 3D rotation of the central architectural jewel
      gsap.to(jewelGroupRef.current, {
        rotationY: 360,
        rotationZ: -15,
        duration: 32,
        repeat: -1,
        ease: 'none',
      });

      // 2. Slow rotation of outer orbital ring 1
      gsap.to(ring1Ref.current, {
        rotationZ: 360,
        rotationX: 65,
        duration: 42,
        repeat: -1,
        ease: 'none',
      });

      // 3. Counter-rotation of orbital ring 2
      gsap.to(ring2Ref.current, {
        rotationZ: -360,
        rotationX: -55,
        rotationY: 25,
        duration: 50,
        repeat: -1,
        ease: 'none',
      });

      // 4. Kinetic Typographic Ring rotation
      gsap.to(textRingRef.current, {
        rotationZ: 360,
        duration: 48,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    // Mouse parallax for subtle 3D depth tilt
    const handleMouseMove = (e) => {
      if (!jewelPivotRef.current) return;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(jewelPivotRef.current, {
        rotateY: xPercent * 16,
        rotateX: -yPercent * 12,
        duration: 1.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-[#08090b] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background radial gold glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#d4af37]/12 via-[#aa820a]/8 to-transparent rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Intro Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f] mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>FLAGSHIP ARCHITECTURAL DESIGN SCHEMATIC</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
          THE GEOMETRIC ESSENCE OF <span className="text-gold-gradient font-serif-luxury italic">JEWEL OF PANVEL</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
          An interactive 3D wireframe study of the 4 soaring architectural towers and 26,000 sq.ft podium recreation on M.G. Road.
        </p>

        {/* 3D Wireframe Display Canvas */}
        <div
          className="relative mt-8 flex items-center justify-center w-full h-[480px] sm:h-[560px] overflow-hidden"
          style={{
            perspective: '1200px',
            maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 55%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 55%, transparent 80%)',
          }}
        >
          {/* Interactive Mouse Tilting Rig */}
          <div
            ref={jewelPivotRef}
            className="relative flex items-center justify-center w-[500px] h-[500px] sm:w-[650px] sm:h-[650px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Core Golden Ambient Radiance */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#d4af37]/15 via-[#e8590c]/10 to-transparent blur-3xl opacity-80" />

            {/* 1. Kinetic Text Orbital Ring: "✦ JEWEL OF PANVEL ✦ 4 ICONIC TOWERS..." */}
            <div
              ref={textRingRef}
              className="absolute inset-0 flex items-center justify-center select-none"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <svg viewBox="0 0 500 500" className="w-[420px] h-[420px] sm:w-[540px] sm:h-[540px]">
                <defs>
                  <path
                    id="wireframeTextCircle"
                    d="M 250, 250 m -210, 0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0"
                  />
                </defs>
                <text
                  fill="#d4af37"
                  fontSize="8.5"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="600"
                  letterSpacing="3.5"
                  className="uppercase opacity-80"
                >
                  <textPath href="#wireframeTextCircle" startOffset="0%">
                    ✦ JEWEL OF PANVEL ✦ 4 ICONIC TOWERS: EMERALD • SAPPHIRE • OPAL • PEARL ✦ 26,000 SQ. FT. PODIUM ✦ M.G. ROAD PANVEL ✦
                  </textPath>
                </text>
              </svg>
            </div>

            {/* 2. Outer Celestial Orbital Ring 1 */}
            <div
              ref={ring1Ref}
              className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-[#d4af37]/30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#f5d77f] shadow-[0_0_10px_#d4af37]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#e8590c] shadow-[0_0_8px_#e8590c]" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d4af37]" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d4af37]" />
            </div>

            {/* 3. Outer Celestial Orbital Ring 2 */}
            <div
              ref={ring2Ref}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#d4af37]/25"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-1/4 right-0 w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            </div>

            {/* 4. Central 3D Faceted Architectural Jewel Structure */}
            <div
              ref={jewelGroupRef}
              className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full stroke-[#d4af37] fill-none drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                style={{ transform: 'scale(1.15)' }}
              >
                <defs>
                  <linearGradient id="wfFacetGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fceb97" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#aa820a" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="wfFacetGold2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#0d0f14" stopOpacity="0.04" />
                  </linearGradient>
                </defs>

                {/* Upper Diamond Crown Facets */}
                <polygon points="100,20 145,55 100,75 55,55" strokeWidth="1" fill="url(#wfFacetGold1)" />
                <polygon points="100,20 145,55 175,80 100,85" strokeWidth="0.75" strokeDasharray="2 1" />
                <polygon points="100,20 55,55 25,80 100,85" strokeWidth="0.75" strokeDasharray="2 1" />

                {/* 4 Tower Pylon Lines */}
                <line x1="100" y1="20" x2="100" y2="185" strokeWidth="1.2" strokeDasharray="3 2" stroke="rgba(245,215,127,0.75)" />
                <line x1="55" y1="55" x2="45" y2="155" strokeWidth="0.9" />
                <line x1="145" y1="55" x2="155" y2="155" strokeWidth="0.9" />
                <line x1="100" y1="75" x2="100" y2="165" strokeWidth="0.9" />

                {/* Lower Pavilion Facets */}
                <polygon points="25,80 55,55 100,75 145,55 175,80 155,135 100,185 45,135" strokeWidth="1.4" fill="url(#wfFacetGold2)" />
                
                {/* Cross Bracing */}
                <line x1="25" y1="80" x2="175" y2="80" strokeWidth="0.7" stroke="rgba(212,175,55,0.5)" />
                <line x1="45" y1="135" x2="155" y2="135" strokeWidth="0.7" stroke="rgba(212,175,55,0.4)" />
                <line x1="55" y1="55" x2="100" y2="185" strokeWidth="0.7" stroke="rgba(212,175,55,0.3)" />
                <line x1="145" y1="55" x2="100" y2="185" strokeWidth="0.7" stroke="rgba(212,175,55,0.3)" />

                {/* Glowing Vertices */}
                <circle cx="100" cy="185" r="3.5" fill="#f5d77f" stroke="none" />
                <circle cx="100" cy="20" r="3" fill="#f5d77f" stroke="none" />
                <circle cx="25" cy="80" r="2.5" fill="#f5d77f" stroke="none" />
                <circle cx="175" cy="80" r="2.5" fill="#f5d77f" stroke="none" />
              </svg>
            </div>

            {/* Cardinal Crosshair Axis Lines */}
            <div className="absolute w-[1px] h-[460px] bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
            <div className="absolute h-[1px] w-[460px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          </div>
        </div>

        {/* Action Button below wireframe */}
        <div className="mt-4">
          <button
            onClick={() => {
              soundFX.playClick();
              if (onExploreJewel) onExploreJewel();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-7 py-3 text-xs font-bold text-black shadow-lg hover:scale-105 transition-transform"
          >
            <span>Explore Jewel of Panvel Detailed Floor Plans</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
