import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Download, 
  Building2, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Phone,
  Maximize2,
  ArrowRight
} from 'lucide-react';
import { soundFX } from '../utils/soundFx';

// Import subcomponents for rich deep-dive
import AmenitiesExplorer from '../components/AmenitiesExplorer';
import FloorPlanViewer from '../components/FloorPlanViewer';
import ConnectivityMap from '../components/ConnectivityMap';

export default function ProjectDetailPage({ onOpenBooking }) {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Scroll to top upon landing on page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const project = projectsData.find((p) => p.id === projectId) || projectsData[0];
  const isJewelOfPanvel = project.id === 'jewel-of-panvel';

  // Other projects for bottom recommendations
  const otherProjects = projectsData.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen bg-[#08090b] text-white pt-24 pb-20">
      
      {/* Sticky Sub-Header with Back Navigation & Quick Actions */}
      <div className="sticky top-16 z-40 border-y border-white/10 bg-[#0c0e14]/95 backdrop-blur-xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          
          <button
            onClick={() => {
              soundFX.playClick();
              navigate('/');
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#f5d77f] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← Back to Mitkar Group Corporate Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400 hidden md:inline">
              MahaRERA: <strong className="text-white font-mono">{project.rera}</strong>
            </span>

            <button
              onClick={() => {
                soundFX.playClick();
                onOpenBooking(project.name);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa820a] px-4 py-1.5 text-xs font-bold text-black shadow-md hover:scale-105 transition-transform"
            >
              Enquire / Book Tour
            </button>
          </div>
        </div>
      </div>

      {/* Main Project Hero */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        
        {/* Background glow */}
        <div className="pointer-events-none absolute top-10 left-1/3 w-[600px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[160px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Mitkar Group</Link>
            <span>/</span>
            <span className="text-gray-400">Projects</span>
            <span>/</span>
            <span className="text-[#f5d77f] font-semibold">{project.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 px-3.5 py-1 text-xs font-bold text-[#f5d77f]">
                  {project.category}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                  {project.type}
                </span>
                <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 text-xs font-semibold">
                  {project.status}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {project.name}
              </h1>

              <div className="text-lg text-[#d4af37] font-serif-luxury italic">
                "{project.tagline}"
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {project.overview}
              </p>

              {/* Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs font-bold text-white mt-0.5">{project.location}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Carpet Area</div>
                  <div className="text-xs font-mono font-bold text-[#f5d77f] mt-0.5">{project.carpetAreaRange}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Pricing Starting</div>
                  <div className="text-xs font-bold text-white mt-0.5">{project.priceStarting}</div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Key Architectural Highlights:
                </div>
                <div className="space-y-2">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-[#f5d77f] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenBooking(project.name);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-8 py-3.5 text-xs font-bold text-black shadow-lg hover:scale-105 transition-transform"
                >
                  Schedule Site Tour
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenBooking(`Brochure - ${project.name}`);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all flex items-center gap-2"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download E-Brochure</span>
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#d4af37]/40 shadow-2xl bg-black">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                  <div className="text-xs font-mono text-[#f5d77f]">{project.rera}</div>
                  <div className="text-base font-bold text-white">{project.name}</div>
                  <div className="text-xs text-gray-300">{project.location}</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* If Jewel of Panvel, show the 4 Towers, 26,000 Sq.Ft Podium, Floor Plan Viewer, and Panvel Transit Map */}
      {isJewelOfPanvel && (
        <>
          {/* 26,000 Sq.Ft Podium Amenities Section */}
          <AmenitiesExplorer onOpenBooking={onOpenBooking} />

          {/* Interactive Architectural Blueprint & Floor Plan Layout Viewer */}
          <FloorPlanViewer onOpenBooking={onOpenBooking} />

          {/* Panvel Strategic Connectivity */}
          <ConnectivityMap onOpenBooking={onOpenBooking} />
        </>
      )}

      {/* Non-Jewel Projects Configuration Grid */}
      {!isJewelOfPanvel && project.configurations && (
        <section className="py-16 bg-[#0a0c10] border-y border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <h2 className="text-2xl font-display font-bold text-white">Available Configurations & Specifications</h2>
              <p className="text-xs text-gray-400">Approved architectural drawings and layout specifications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.configurations.map((cfg, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-[#12141a] text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{cfg.type}</span>
                    <span className="text-xs font-mono text-[#f5d77f]">{cfg.carpetArea}</span>
                  </div>
                  {cfg.layout && <p className="text-xs text-gray-400">{cfg.layout}</p>}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Status</span>
                    <span className="font-bold text-[#d4af37]">{cfg.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore More Landmark Projects by Mitkar Group */}
      <section className="py-20 bg-[#08090b] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                More Landmarks by Mitkar Group
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Explore Other Projects Across Navi Mumbai
              </h3>
            </div>
            <Link
              to="/"
              className="text-xs font-semibold text-[#f5d77f] hover:underline flex items-center gap-1"
            >
              <span>View All 25+ Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  soundFX.playClick();
                  navigate(`/project/${item.id}`);
                }}
                className="group p-5 rounded-2xl border border-white/10 bg-[#111319] hover:border-[#d4af37]/60 cursor-pointer transition-all"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{item.location}</span>
                  <span className="text-[#d4af37] font-semibold">{item.category}</span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                  {item.name}
                </h4>
                <div className="text-xs text-gray-400 mt-2 flex items-center justify-between">
                  <span>{item.type}</span>
                  <span className="text-[#f5d77f] font-mono">{item.priceStarting}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
