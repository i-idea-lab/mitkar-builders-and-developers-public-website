import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CinematicDroneBackground() {
  const containerRef = useRef(null);
  const droneViewportRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // The actual official architectural renders of the Jewel of Panvel building
  const droneAngles = [
    {
      src: '/jewel/01-slide.jpg',
      label: 'AERIAL VIEW: 4 HIGH-RISE TOWERS & PODIUM DECK',
      alt: 'Jewel of Panvel - Full Aerial Perspective'
    },
    {
      src: '/jewel/02-slide.jpg',
      label: 'DRONE SWEEP: M.G. ROAD FACING BOULEVARD ELEVATION',
      alt: 'Jewel of Panvel - Street & Podium Frontage'
    },
    {
      src: '/jewel/03-slide.jpg',
      label: 'ELEVATED ORBIT: 26,000 SQ.FT PODIUM & RESIDENCES',
      alt: 'Jewel of Panvel - Podium Landscape & Towers'
    },
    {
      src: '/jewel/04-slide.jpg',
      label: 'ROOFTOP & SKYLINE HORIZON VIEW',
      alt: 'Jewel of Panvel - Architectural Skyline'
    }
  ];

  // Smooth crossfade between real drone angles every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % droneAngles.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [droneAngles.length]);

  // GSAP continuous drone camera breathing & slow pan
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Smooth slow drone yaw / orbital drift
      gsap.to(droneViewportRef.current, {
        rotationY: 7,
        rotationZ: -1.5,
        scale: 1.08,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 2. Subtle altitude drift
      gsap.to(droneViewportRef.current, {
        y: -15,
        rotationX: 4,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    // Mouse parallax for 3D depth
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(droneViewportRef.current, {
        rotateY: xPercent * 9,
        rotateX: -yPercent * 6,
        duration: 2.2,
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
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0"
      style={{
        perspective: '1200px',
        maskImage: 'radial-gradient(ellipse 70% 65% at 50% 48%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 48%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, transparent 85%)',
      }}
    >
      {/* Twilight Ambient Light Accent */}
      <div className="absolute w-[800px] h-[550px] bg-gradient-to-tr from-[#d4af37]/12 via-amber-600/8 to-transparent rounded-full blur-[140px] opacity-70" />

      {/* Drone Camera Viewport Rig */}
      <div
        ref={droneViewportRef}
        className="relative w-[88vw] max-w-[850px] aspect-[16/10] rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-black"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Real Building Photos with Cinematic Drone Transitions */}
        {droneAngles.map((angle, idx) => (
          <div
            key={angle.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-85 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={angle.src}
              alt={angle.alt}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
              style={{
                filter: 'brightness(0.72) contrast(1.1) saturate(1.05)',
              }}
            />
          </div>
        ))}

        {/* Soft Vignette & Cinematic Dark Tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-[#08090b]/50 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/70 via-transparent to-[#08090b]/70 z-20" />

        {/* Realistic Drone Camera Telemetry Overlay */}
        <div className="absolute inset-0 z-30 p-4 sm:p-6 flex flex-col justify-between pointer-events-none select-none text-[9px] sm:text-[10px] font-mono">
          
          {/* Top Bar: Rec Indicator & Project Coordinates */}
          <div className="flex items-center justify-between text-gray-300">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-bold text-white tracking-widest uppercase">REC • 4K DRONE CAM</span>
              <span className="text-gray-500 hidden sm:inline">| FPS: 60</span>
            </div>

            <div className="flex items-center gap-3 text-[#f5d77f]">
              <span className="hidden sm:inline">MAHARERA: P52000028505</span>
              <span className="rounded-full bg-black/60 border border-[#d4af37]/30 px-2 py-0.5 font-bold">
                OLD PANVEL
              </span>
            </div>
          </div>

          {/* Center Crosshair Aim */}
          <div className="self-center flex flex-col items-center justify-center opacity-30">
            <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            </div>
          </div>

          {/* Bottom Bar: Current Angle & Telemetry */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-gray-400 border-t border-white/10 pt-2 bg-black/40 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 px-4 py-2 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span className="font-bold text-white tracking-wider">
                {droneAngles[currentSlide].label}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[9px] text-[#f5d77f] font-mono">
              <span>ALT: 92M</span>
              <span>FOV: 84°</span>
              <span>4 TOWERS • 2-ACRE LANDMARK</span>
            </div>
          </div>

        </div>

        {/* Drone HUD Corner Viewfinder Reticles */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 z-30" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 z-30" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 z-30" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 z-30" />
      </div>
    </div>
  );
}
