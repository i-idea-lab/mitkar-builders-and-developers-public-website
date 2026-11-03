import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// ─── 1. STICK TOWER CRANE ─────────────────────────────────────────────────────
function StickTowerCrane() {
  const trolleyRef = useRef(null);
  const hookRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trolley glides along horizontal boom
      gsap.to(trolleyRef.current, {
        x: 45,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Hook cable gently raises and lowers
      gsap.to(hookRef.current, {
        y: 18,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-40 sm:w-48 h-32 sm:h-36 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      <svg viewBox="0 0 180 140" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="craneGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d77f" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#aa820a" />
          </linearGradient>
        </defs>

        {/* Vertical Lattice Mast Tower */}
        <line x1="60" y1="35" x2="60" y2="135" stroke="url(#craneGoldStroke)" strokeWidth="1.5" />
        <line x1="72" y1="35" x2="72" y2="135" stroke="url(#craneGoldStroke)" strokeWidth="1.5" />
        {/* Lattice X-Braces */}
        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <line x1="60" y1={35 + i * 20} x2="72" y2={55 + i * 20} stroke="#d4af37" strokeWidth="0.8" opacity="0.7" />
            <line x1="72" y1={35 + i * 20} x2="60" y2={55 + i * 20} stroke="#d4af37" strokeWidth="0.8" opacity="0.7" />
          </g>
        ))}

        {/* Mast Base Plate */}
        <line x1="52" y1="135" x2="80" y2="135" stroke="#f5d77f" strokeWidth="2" />

        {/* Slewing Cabin & Apex Peak */}
        <polygon points="56,35 76,35 66,12" fill="none" stroke="url(#craneGoldStroke)" strokeWidth="1.5" />
        <rect x="54" y="24" width="14" height="11" fill="none" stroke="#d4af37" strokeWidth="1" rx="1" />
        {/* Flashing Red Aviation Beacon on Crane Apex */}
        <circle cx="66" cy="12" r="2.5" fill="#ef4444" className="animate-ping" />
        <circle cx="66" cy="12" r="2" fill="#ef4444" />

        {/* Main Jib Boom (Pointing Right) */}
        <line x1="72" y1="35" x2="175" y2="35" stroke="url(#craneGoldStroke)" strokeWidth="2" />
        <line x1="72" y1="41" x2="175" y2="35" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
        {/* Suspension Tie Wire */}
        <line x1="66" y1="12" x2="160" y2="35" stroke="#f5d77f" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

        {/* Counter Jib & Weight (Pointing Left) */}
        <line x1="60" y1="35" x2="15" y2="35" stroke="url(#craneGoldStroke)" strokeWidth="2" />
        <line x1="66" y1="12" x2="18" y2="35" stroke="#f5d77f" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        <rect x="18" y="32" width="16" height="12" fill="none" stroke="#d4af37" strokeWidth="1.5" rx="1" />
        <line x1="26" y1="32" x2="26" y2="44" stroke="#d4af37" strokeWidth="1" />

        {/* Laser Streak Pulse running along the Boom */}
        <line
          x1="72"
          y1="35"
          x2="175"
          y2="35"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeDasharray="18 90"
          className="hero-stick-streak"
        />

        {/* Moving Trolley Assembly */}
        <g ref={trolleyRef} transform="translate(85, 35)">
          <rect x="-5" y="-2" width="10" height="5" fill="#f5d77f" stroke="#aa820a" strokeWidth="0.8" rx="1" />
          {/* Wire Cable */}
          <line x1="0" y1="3" x2="0" y2="35" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          
          {/* Hoist Block & Hook */}
          <g ref={hookRef} transform="translate(0, 35)">
            <circle cx="0" cy="2" r="2.5" fill="#d4af37" />
            <path d="M0,4 C-3,6 -3,11 0,12 C2,12 3,10 2,8" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
            {/* Suspended Steel Beam */}
            <g transform="translate(-16, 15)">
              <line x1="0" y1="0" x2="32" y2="0" stroke="#f5d77f" strokeWidth="2" />
              <line x1="0" y1="-2" x2="32" y2="-2" stroke="#d4af37" strokeWidth="1" />
              <line x1="0" y1="2" x2="32" y2="2" stroke="#d4af37" strokeWidth="1" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

// ─── 2. STICK CEMENT TRANSIT MIXER TRUCK ───────────────────────────────────────
function StickCementTruck() {
  const wheel1Ref = useRef(null);
  const wheel2Ref = useRef(null);
  const wheel3Ref = useRef(null);
  const drumRibsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotating Spoked Wheels
      [wheel1Ref.current, wheel2Ref.current, wheel3Ref.current].forEach((w) => {
        if (w) {
          gsap.to(w, {
            rotation: 360,
            transformOrigin: 'center center',
            duration: 2.2,
            repeat: -1,
            ease: 'none'
          });
        }
      });

      // Rotating Drum Spiral Ribs (Horizontal Phase Shift to mimic 3D Drum Spin)
      gsap.to(drumRibsRef.current, {
        x: 18,
        duration: 1.5,
        repeat: -1,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-44 sm:w-52 h-28 sm:h-32 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      <svg viewBox="0 0 190 110" className="w-full h-full overflow-visible">
        <defs>
          <clipPath id="drumClip">
            {/* Tilted Elliptical Drum boundary */}
            <polygon points="35,32 105,20 120,58 45,66" />
          </clipPath>
        </defs>

        {/* Road Reference Line */}
        <line x1="10" y1="92" x2="185" y2="92" stroke="#d4af37" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />

        {/* Truck Cabin Outline */}
        <path
          d="M130,42 L158,42 L172,56 L172,82 L130,82 Z"
          fill="none"
          stroke="#f5d77f"
          strokeWidth="1.8"
        />
        {/* Windshield */}
        <polygon points="148,46 166,58 148,58" fill="none" stroke="#d4af37" strokeWidth="1" />
        {/* Headlight Ray */}
        <line x1="172" y1="72" x2="188" y2="72" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="172,72 195,64 195,80" fill="rgba(212,175,55,0.15)" />

        {/* Main Chassis Rail */}
        <line x1="25" y1="82" x2="170" y2="82" stroke="#d4af37" strokeWidth="2.5" />
        {/* Chassis Streak Pulse */}
        <line
          x1="25"
          y1="82"
          x2="170"
          y2="82"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeDasharray="20 70"
          className="hero-stick-streak"
        />

        {/* Cement Mixer Drum Outline (Tilted Polygon) */}
        <polygon
          points="35,32 105,20 120,58 45,66"
          fill="none"
          stroke="#f5d77f"
          strokeWidth="1.8"
        />

        {/* Rotating Helical Spiral Ribs (Inside Clip) */}
        <g clipPath="url(#drumClip)">
          <g ref={drumRibsRef}>
            {[-2, -1, 0, 1, 2, 3].map((k) => (
              <path
                key={k}
                d={`M${25 + k * 18},20 Q${40 + k * 18},45 ${30 + k * 18},70`}
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.4"
                opacity="0.8"
              />
            ))}
          </g>
        </g>

        {/* Drum Pivot Pedestal & Chute */}
        <line x1="35" y1="32" x2="25" y2="70" stroke="#d4af37" strokeWidth="1.5" />
        <line x1="25" y1="60" x2="16" y2="72" stroke="#f5d77f" strokeWidth="1.5" />

        {/* Spoked Wheels */}
        {/* Rear Wheel 1 */}
        <g ref={wheel1Ref} transform="translate(45, 82)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#d4af37" strokeWidth="1" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#d4af37" strokeWidth="1" />
          <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
        </g>

        {/* Rear Wheel 2 */}
        <g ref={wheel2Ref} transform="translate(70, 82)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#d4af37" strokeWidth="1" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#d4af37" strokeWidth="1" />
          <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
        </g>

        {/* Front Wheel */}
        <g ref={wheel3Ref} transform="translate(150, 82)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#d4af37" strokeWidth="1" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#d4af37" strokeWidth="1" />
          <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
        </g>
      </svg>
    </div>
  );
}

// ─── 3. STICK HYDRAULIC EXCAVATOR ──────────────────────────────────────────────
function StickExcavator() {
  const boomRef = useRef(null);
  const bucketRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Articulated hydraulic main boom motion
      gsap.to(boomRef.current, {
        rotation: 12,
        transformOrigin: '0px 0px',
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Bucket curl articulation
      gsap.to(bucketRef.current, {
        rotation: -25,
        transformOrigin: '0px 0px',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-44 sm:w-52 h-28 sm:h-32 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      <svg viewBox="0 0 190 120" className="w-full h-full overflow-visible">
        {/* Ground level */}
        <line x1="15" y1="96" x2="175" y2="96" stroke="#d4af37" strokeWidth="1" strokeDasharray="5 3" opacity="0.4" />

        {/* Crawler Track Undercarriage */}
        <rect x="25" y="82" width="65" height="14" rx="7" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
        {/* Track Rollers */}
        {[0, 1, 2, 3].map((r) => (
          <circle key={r} cx={35 + r * 15} cy="89" r="4" fill="none" stroke="#d4af37" strokeWidth="1" />
        ))}

        {/* Cabin & Upper Slew Base */}
        <rect x="35" y="60" width="35" height="22" rx="2" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
        <polygon points="50,64 66,64 66,74 50,74" fill="none" stroke="#d4af37" strokeWidth="1" />
        {/* Counterweight */}
        <line x1="30" y1="62" x2="30" y2="80" stroke="#d4af37" strokeWidth="3" />

        {/* Articulated Hydraulic Boom */}
        <g transform="translate(68, 70)">
          {/* Main Boom Pivot Joint */}
          <circle cx="0" cy="0" r="3" fill="#d4af37" />
          
          <g ref={boomRef}>
            {/* Primary Boom Beam */}
            <path d="M0,0 L35,-32 L60,-28" fill="none" stroke="#f5d77f" strokeWidth="2.2" />
            <path d="M0,0 L35,-26 L60,-28" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
            
            {/* Hydraulic Cylinder */}
            <line x1="10" y1="4" x2="32" y2="-18" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />

            {/* Streak along main boom */}
            <path
              d="M0,0 L35,-32 L60,-28"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray="14 50"
              className="hero-stick-streak"
            />

            {/* Second Articulated Dipper Arm */}
            <g transform="translate(60, -28)">
              <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
              <line x1="0" y1="0" x2="25" y2="25" stroke="#f5d77f" strokeWidth="1.8" />
              
              {/* Bucket Assembly */}
              <g ref={bucketRef} transform="translate(25, 25)">
                <circle cx="0" cy="0" r="2" fill="#d4af37" />
                {/* Excavator Tooth Bucket */}
                <path d="M0,0 L12,4 L14,14 L4,16 Z" fill="none" stroke="#f5d77f" strokeWidth="1.5" />
                <line x1="12" y1="14" x2="16" y2="18" stroke="#d4af37" strokeWidth="1.2" />
                <line x1="8" y1="15" x2="11" y2="19" stroke="#d4af37" strokeWidth="1.2" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

// ─── 4. STICK SURVEYOR LASER THEODOLITE ────────────────────────────────────────
function StickTheodolite() {
  const laserRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(laserRef.current, {
        rotation: 8,
        transformOrigin: '0px 0px',
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-40 sm:w-48 h-28 sm:h-32 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      <svg viewBox="0 0 170 120" className="w-full h-full overflow-visible">
        {/* Tripod Legs */}
        <line x1="50" y1="45" x2="20" y2="105" stroke="#f5d77f" strokeWidth="1.5" />
        <line x1="50" y1="45" x2="50" y2="105" stroke="#d4af37" strokeWidth="1.5" />
        <line x1="50" y1="45" x2="80" y2="105" stroke="#f5d77f" strokeWidth="1.5" />

        {/* Tripod Stabilizer Ring */}
        <ellipse cx="50" cy="78" rx="20" ry="3" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 2" />

        {/* Tribrach Mounting Plate */}
        <polygon points="42,45 58,45 55,38 45,38" fill="none" stroke="#f5d77f" strokeWidth="1.5" />

        {/* Pivoting Scope & Optical Barrel */}
        <g transform="translate(50, 36)">
          <g ref={laserRef}>
            <rect x="-8" y="-6" width="16" height="12" fill="none" stroke="#d4af37" strokeWidth="1.2" rx="1" />
            <line x1="-12" y1="0" x2="16" y2="0" stroke="#f5d77f" strokeWidth="2" />
            {/* Long Range Measuring Laser Beam */}
            <line x1="16" y1="0" x2="115" y2="0" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.85" />
            {/* Reticle / Crosshair Target */}
            <g transform="translate(115, 0)">
              <circle cx="0" cy="0" r="5" fill="none" stroke="#ef4444" strokeWidth="1" className="animate-ping" />
              <circle cx="0" cy="0" r="4" fill="none" stroke="#f5d77f" strokeWidth="1" />
              <line x1="-6" y1="0" x2="6" y2="0" stroke="#f5d77f" strokeWidth="0.8" />
              <line x1="0" y1="-6" x2="0" y2="6" stroke="#f5d77f" strokeWidth="0.8" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

// ─── MASTER MANAGER COMPONENT ─────────────────────────────────────────────────
export default function HeroStickAnimations() {
  const [currentIdx, setCurrentIdx] = useState(0); // 0: Crane, 1: Truck, 2: Excavator, 3: Theodolite
  const [zoneIdx, setZoneIdx] = useState(0);       // 0: TL, 1: TR, 2: BL, 3: BR
  const [visible, setVisible] = useState(true);
  const elementRef = useRef(null);

  // Four safe positioning zones framing the central text within the exact vertical height of the content
  const zones = [
    // Zone 0: Top-Left (aligned with the upper content height)
    'left-0 sm:left-4 lg:left-8 top-0 sm:top-2',
    // Zone 1: Top-Right (aligned with the upper content height)
    'right-0 sm:right-4 lg:right-8 top-0 sm:top-2',
    // Zone 2: Bottom-Left (aligned with the lower content height)
    'left-0 sm:left-4 lg:left-10 bottom-0 sm:bottom-2',
    // Zone 3: Bottom-Right (aligned with the lower content height)
    'right-0 sm:right-4 lg:right-10 bottom-0 sm:bottom-2',
  ];

  const items = [
    <StickTowerCrane key="crane" />,
    <StickCementTruck key="truck" />,
    <StickExcavator key="excavator" />,
    <StickTheodolite key="theodolite" />,
  ];

  useEffect(() => {
    // Cycle every 3.5 seconds
    const interval = setInterval(() => {
      // 1. Fade out current element
      setVisible(false);

      setTimeout(() => {
        // 2. Pick next element and a different random zone
        setCurrentIdx((prev) => (prev + 1) % items.length);
        setZoneIdx((prevZone) => {
          let next;
          do {
            next = Math.floor(Math.random() * zones.length);
          } while (next === prevZone);
          return next;
        });
        // 3. Fade in new element
        setVisible(true);
      }, 500); // 500ms fade transition gap
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length, zones.length]);

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-10 hidden lg:block">
      <style>{`
        @keyframes streakGlide {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
        .hero-stick-streak {
          animation: streakGlide 1.8s linear infinite;
        }
      `}</style>

      {/* Dynamic Animated Stick Element Container */}
      <div
        ref={elementRef}
        className={`absolute transition-all duration-700 ease-out transform ${zones[zoneIdx]} ${
          visible
            ? 'opacity-85 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        {items[currentIdx]}
      </div>
    </div>
  );
}