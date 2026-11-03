import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

// SVG Google Logo
function GoogleIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Genuine Google Reviews from official Google Maps profile
  const reviews = [
    {
      name: "Nantha Kumar",
      badge: "2 reviews",
      time: "2 years ago",
      initials: "NK",
      avatarBg: "bg-indigo-700",
      rating: 5,
      quote: "I have purchased 2bhk in this project and I am very much satisfied. Best location with easy connectivity. Mitkar group provides best construction quality best customer service. 👍 👌"
    },
    {
      name: "Fazal Khan",
      badge: "Local Guide · 11 reviews",
      time: "5 years ago",
      initials: "FK",
      avatarBg: "bg-purple-700",
      rating: 5,
      quote: "One of the Finest Project's are made by One of the most Reliable \"Mitkar Builder's & Developers\". Its just not about the Projects but also about the Person whom you can Rely on."
    },
    {
      name: "Vedant Tripathi",
      badge: "6 reviews · 1 photo",
      time: "5 years ago",
      initials: "VT",
      avatarBg: "bg-amber-700",
      rating: 5,
      quote: "Very professional and friendly staff, great service and the buildings constructed have all amenities as required."
    },
    {
      name: "Bhaiji",
      badge: "1 review",
      time: "2 years ago",
      initials: "B",
      avatarBg: "bg-emerald-700",
      rating: 5,
      quote: "This is a best project in old Panvel. Heart of city. I like this project and top class amenities . I will 2 BHK join flats book ."
    },
    {
      name: "santosh palkar",
      badge: "2 reviews",
      time: "Edited 2 years ago",
      initials: "SP",
      avatarBg: "bg-fuchsia-700",
      rating: 5,
      quote: "I really like this project. I am happy to have my own house from Mitkar Developers."
    },
    {
      name: "Siddhant Chavan",
      badge: "1 review",
      time: "2 years ago",
      initials: "SC",
      avatarBg: "bg-rose-700",
      rating: 5,
      quote: "This project location is best location in panvel every thing is nearby the project"
    }
  ];

  const handlePrev = () => {
    soundFX.playClick();
    setCurrentIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    soundFX.playClick();
    setCurrentIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const r = reviews[currentIdx];

  return (
    <section className="relative py-24 bg-[#0a0c10] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            <GoogleIcon className="h-4 w-4" />
            <span>VERIFIED GOOGLE REVIEWS</span>
            <span className="text-[#f5d77f] font-bold ml-1">★ 5.0 RATING</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            VOICES OF <span className="text-gold-gradient font-serif-luxury italic">TRUST</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Real feedback from verified homeowners and property investors across Navi Mumbai on Google.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#141720] to-[#0c0e13] p-7 sm:p-10 shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
              <GoogleIcon className="h-4 w-4" />
              <span>Google Review</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{r.time}</span>
            </div>
            <Quote className="h-8 w-8 text-[#d4af37]/40" />
          </div>

          <div className="flex items-center gap-1 text-[#fbbc05] mb-4">
            {[...Array(r.rating)].map((_, i) => (
              <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-[#fbbc05]" />
            ))}
          </div>

          <p className="font-serif-luxury text-lg sm:text-2xl text-gray-100 leading-relaxed min-h-[90px]">
            "{r.quote}"
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* User Profile Info */}
            <div className="flex items-center gap-3.5">
              <div className={`h-11 w-11 rounded-full ${r.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md ring-2 ring-white/10`}>
                {r.initials}
              </div>
              <div className="text-left">
                <h4 className="text-base font-display font-bold text-white capitalize">{r.name}</h4>
                <div className="text-xs text-gray-400">{r.badge}</div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-500 mr-1">
                {currentIdx + 1} / {reviews.length}
              </span>
              <button
                onClick={handlePrev}
                onMouseEnter={() => soundFX.playHover()}
                className="h-10 w-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => soundFX.playHover()}
                className="h-10 w-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Review Switcher Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-white/5">
            {reviews.map((rev, index) => (
              <button
                key={index}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentIdx(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIdx
                    ? 'w-7 h-2 bg-[#d4af37]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to review by ${rev.name}`}
              />
            ))}
          </div>

        </div>

        {/* Call to Action - Read on Google Maps */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mitkar+Builders+%26+Developers,+Plot+78,+Sector+50E,+Seawoods,+Navi+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37] hover:text-black text-[#f5d77f] px-5 py-2.5 text-xs font-bold transition-all shadow-md group"
          >
            <GoogleIcon className="h-4 w-4" />
            <span>Read All Reviews on Google Maps</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}