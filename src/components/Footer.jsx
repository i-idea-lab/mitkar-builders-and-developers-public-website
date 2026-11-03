import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, ShieldCheck, ArrowUp, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/10 text-white pt-16 pb-12 overflow-hidden">
      
      {/* Decorative top gold gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top VIP Invitation Bar */}
        <div className="mb-14 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#141720] via-[#101217] to-[#141720] p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="h-4 w-4" />
              Direct Developer Privilege
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Own a Piece of Panvel’s Crowning Landmark
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              Connect directly with our corporate sales management team at our Seawoods head office or Panvel site lounge.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenBooking();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] px-7 py-3.5 text-xs font-bold text-black shadow-lg hover:scale-105 transition-transform"
            >
              Book Priority Consultation
            </button>
            <a
              href="https://wa.me/917304451177?text=Hi%20Mitkar%20Builders,%20I%20am%20inquiring%20via%20your%20website"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
            >
              WhatsApp Us (+91 73044 51177)
            </a>
          </div>
        </div>

        {/* 4 Columns Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & MahaRERA */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/mitkar-logo-white.png"
                alt="Mitkar Builders & Developers"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(232,89,12,0.3)]"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Founded by civil engineer Mr. Muzakki Mitkar. For over 25 years, Mitkar Group has delivered premier residential and commercial landmarks across Seawoods, Nerul, Ulwe, and Panvel.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#f5d77f] font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>MahaRERA Registered Project</span>
              </div>
              <div className="text-[11px] text-gray-300">
                Jewel of Panvel: <strong className="text-white">P52000028505</strong>
              </div>
              <div className="text-[10px] text-gray-500">
                Official verification available at maharera.mahaonline.gov.in
              </div>
            </div>
          </div>

          {/* Col 2: Landmark Projects */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Signature Projects
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link to="/project/jewel-of-panvel" className="hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                  <span>Jewel of Panvel (M.G. Road)</span>
                  <span className="text-[9px] text-[#d4af37] font-semibold">Flagship</span>
                </Link>
              </li>
              <li><Link to="/project/apramit-seawoods" className="hover:text-white transition-colors">Apramit (Seawoods)</Link></li>
              <li><Link to="/project/nm-heights" className="hover:text-white transition-colors">N. M. Height (Seawoods)</Link></li>
              <li><Link to="/project/m-com-pride" className="hover:text-white transition-colors">M. Com Pride (Seawoods)</Link></li>
              <li><Link to="/project/villa-castle" className="hover:text-white transition-colors">Villa Castle (Seawoods)</Link></li>
              <li><Link to="/project/m-tech-homes" className="hover:text-white transition-colors">M. Tech Homes (Nerul)</Link></li>
              <li><Link to="/project/anmol-heritage" className="hover:text-white transition-colors">Anmol Heritage (Ulwe)</Link></li>
              <li className="pt-1">
                <Link to="/portfolio" className="text-[#f5d77f] font-semibold hover:underline flex items-center gap-1">
                  <span>View All 25+ Projects &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate & Site Offices */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Official Head Office & Sales Desk
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mitkar+Builders+%26+Developers,+Plot+78,+Sector+50E,+Seawoods,+Navi+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
                title="View Corporate Office on Google Maps"
              >
                <MapPin className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <strong className="text-white block group-hover:text-[#f5d77f] transition-colors">Corporate Office:</strong>
                  Office #2 & 3, Raghunath Vihar, Plot No. 78, Sector 50, Seawoods, Navi Mumbai - 400706
                </div>
              </a>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="h-4 w-4 text-[#d4af37] shrink-0" />
                <div className="flex flex-wrap gap-x-3 font-mono">
                  <a href="tel:+917304451177" className="hover:text-[#f5d77f] font-bold text-white">
                    +91 73044 51177
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="tel:+917304481177" className="hover:text-[#f5d77f] font-bold text-white">
                    +91 73044 81177
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#d4af37] shrink-0" />
                <a href="mailto:sales@mitkarbuilders.com" className="hover:text-[#f5d77f] text-gray-200">
                  sales@mitkarbuilders.com
                </a>
              </div>

              <div className="pt-1 text-[11px] text-gray-400">
                Working Hours: <strong className="text-emerald-400">Mon – Sun: 10:30 AM – 7:30 PM</strong> (Open 7 Days)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Mitkar Builders & Developers (Mitkar Group). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/contact" className="hover:text-[#f5d77f] transition-colors font-semibold">Contact Concierge</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition-colors">RERA Disclosures</a>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-[#d4af37] hover:text-[#f5d77f] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* MahaRERA Disclaimer Notice */}
        <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-gray-500 text-center leading-relaxed">
          Disclaimer: The contents, artistic impressions, 3D renderings, and specifications depicted on this website are indicative and for representation purposes only. The project "Jewel of Panvel" is registered under MahaRERA registration number P52000028505. All contracts and sales agreements shall strictly adhere to terms specified under MahaRERA guidelines.
        </div>

      </div>
    </footer>
  );
}
