import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { Building, MapPin, ShieldCheck, ArrowRight, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function PortfolioPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Ongoing / Flagship', 'Delivered Landmarks', 'Commercial Icons'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory || (activeCategory === 'Ongoing / Flagship' && p.category.includes('Flagship')));

  const handleSelectProject = (projectId) => {
    soundFX.playClick();
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-white pt-28 pb-24">
      {/* Top Banner / Header */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#d4af37]/15 to-transparent rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>25+ DELIVERED & ONGOING DEVELOPMENTS ACROSS NAVI MUMBAI</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            COMPLETE <span className="text-gold-gradient font-serif-luxury italic">PORTFOLIO</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300">
            From our grand 2-acre flagship on M.G. Road to delivered boutique towers across Seawoods, Nerul, Ulwe, Kamothe, and Taloja.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveCategory(cat);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105'
                      : 'border border-white/10 bg-[#12141a] text-gray-300 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleSelectProject(project.id)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#111319] transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_20px_45px_rgba(212,175,55,0.15)] cursor-pointer"
              data-cursor-text="VIEW PAGE"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold text-[#f5d77f] border border-[#d4af37]/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-md ${
                    project.status.includes('Delivered')
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                    <span>{project.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mt-0.5">{project.tagline}</p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Card Specs */}
                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="text-gray-400">Typology:</span>
                    <span className="font-medium text-white">{project.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="text-gray-400">Carpet Area:</span>
                    <span className="font-mono text-[#f5d77f]">{project.carpetAreaRange}</span>
                  </div>
                  {project.rera && (
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span>RERA / Status:</span>
                      <span className="font-semibold text-gray-300">{project.rera}</span>
                    </div>
                  )}
                </div>

                {/* Primary Button Action: Go to Detailed Page */}
                <div className="pt-2">
                  <div className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/15 py-2.5 text-xs font-bold text-white transition-all group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-black shadow-md">
                    <span>Explore Project Detailed Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
