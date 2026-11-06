import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Building2, Users, CheckCircle2, Ruler } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function MetricsTicker() {
  const tickerRef = useRef(null);

  const metrics = [
    {
      value: 25,
      suffix: '+',
      label: 'Years of Engineering Legacy',
      subtext: 'Founded in 1999 • Led by Mr. Tabrez Ahmed Mitkar',
      icon: Award
    },
    {
      value: 25,
      suffix: '+',
      label: 'Landmark Projects Delivered',
      subtext: 'Across Seawoods, Nerul, Ulwe & Panvel',
      icon: Building2
    },
    {
      value: 1.2,
      suffix: 'M+',
      decimals: 1,
      label: 'Sq. Ft. Real Estate Crafted',
      subtext: 'Residential, Penthouses & Commercial',
      icon: Ruler
    },
    {
      value: 2500,
      suffix: '+',
      label: 'Delighted Homeowners',
      subtext: 'Generations of trust and happiness',
      icon: Users
    },
    {
      value: 100,
      suffix: '%',
      label: 'MahaRERA & Legal Compliance',
      subtext: 'Clear titles & timely handovers',
      icon: CheckCircle2
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = tickerRef.current?.querySelectorAll('.metric-number');
      if (!counters) return;

      counters.forEach((el) => {
        const targetVal = parseFloat(el.getAttribute('data-value') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        gsap.fromTo(
          el,
          { textContent: '0' },
          {
            textContent: targetVal,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            snap: { textContent: decimals === 0 ? 1 : 0.1 },
            onUpdate: function () {
              const current = parseFloat(this.targets()[0].textContent);
              el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();
            },
          }
        );
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={tickerRef} className="relative z-20 py-12 border-y border-white/10 bg-[#0b0d12]">
      {/* Subtle gold line gradient on top and bottom */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-start p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2 text-[#d4af37] opacity-80 group-hover:opacity-100 transition-opacity">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex items-baseline font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  <span
                    className="metric-number text-gold-gradient"
                    data-value={item.value}
                    data-decimals={item.decimals || 0}
                  >
                    0
                  </span>
                  <span className="text-[#f5d77f] font-serif-luxury ml-0.5">{item.suffix}</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-200">
                  {item.label}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
