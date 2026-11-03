import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Car, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundFx';
import { projectsData } from '../data/projectsData';

export default function ContactPage({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Jewel of Panvel (M.G. Road)',
    message: '',
    chauffeurPickup: false
  });

  // Honeypot & rate-limiting protection
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitError, setRateLimitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRateLimitError('');

    // 1. Honeypot check: If the hidden bot field is filled, silently discard
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // 2. Client-side Rate Limiting (20 second cooldown between submissions)
    const now = Date.now();
    const lastSubmitTime = parseInt(sessionStorage.getItem('mitkar_last_contact_submit') || '0', 10);
    if (now - lastSubmitTime < 20000) {
      setRateLimitError('Please wait 20 seconds before submitting another inquiry.');
      return;
    }

    setIsSubmitting(true);
    sessionStorage.setItem('mitkar_last_contact_submit', now.toString());
    soundFX.playSuccess();

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5d77f', '#ffffff', '#e8590c']
      });
    } catch {
      // Ignore
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-white pt-28 pb-20">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold text-[#f5d77f]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OFFICIAL CONTACT DESK • MITKAR BUILDERS & DEVELOPERS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            CONTACT <span className="text-gold-gradient font-serif-luxury italic">US</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Reach our senior advisory team at our Seawoods head office or request a private site visit.
          </p>
        </div>

        {/* 3 Clear Touchpoint Cards: Office, Phones, Email & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Official Corporate Office Seawoods */}
          <div className="p-6 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#181a24] to-[#0f1117] shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#f5d77f] uppercase tracking-widest font-semibold">Corporate Office</span>
                <h3 className="text-lg font-display font-bold text-white mt-0.5">Headquarters Address</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                Office #2 & 3, Raghunath Vihar, Plot No. 78, Sector 50, Seawoods, Navi Mumbai - 400706
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs space-y-1">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-3.5 w-3.5 text-[#d4af37]" />
                <span className="font-semibold text-emerald-400">Mon – Sun: 10:30 AM – 7:30 PM</span>
              </div>
              <div className="text-[11px] text-gray-400">Open all 7 days for consultations</div>
            </div>
          </div>

          {/* Card 2: Official Phone Numbers */}
          <div className="p-6 rounded-3xl border border-white/10 bg-[#111319] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f5d77f]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#f5d77f] uppercase tracking-widest font-semibold">Helpline Numbers</span>
                <h3 className="text-lg font-display font-bold text-white mt-0.5">Direct Call Lines</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect directly with our sales advisors for pricing, brochures, and site appointments.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-gray-400">Primary:</span>
                <a href="tel:+917304451177" className="text-white hover:text-[#f5d77f] font-mono font-bold">
                  +91 73044 51177
                </a>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-gray-400">Alternate:</span>
                <a href="tel:+917304481177" className="text-white hover:text-[#f5d77f] font-mono font-bold">
                  +91 73044 81177
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Email & WhatsApp */}
          <div className="p-6 rounded-3xl border border-white/10 bg-[#111319] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">Digital Support</span>
                <h3 className="text-lg font-display font-bold text-white mt-0.5">Email & WhatsApp</h3>
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-400">Email: </span>
                  <a href="mailto:sales@mitkarbuilders.com" className="text-[#f5d77f] font-semibold underline">
                    sales@mitkarbuilders.com
                  </a>
                </div>
                <div className="text-gray-400">
                  Official Website: <span className="text-gray-200">mitkarbuilders.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/917304451177?text=Hi%20Mitkar%20Builders,%20I%20would%20like%20to%20inquire%20about%20your%20projects"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 text-xs transition-colors shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Form and Google Maps in Balanced 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#141720] to-[#0c0e14] p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            
            {!submitted ? (
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">Send Us a Direct Message</h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Please provide your contact details and our team will get in touch with you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Invisible Honeypot Field (Bot Trap) */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="company_website_url">Company Website</label>
                    <input
                      id="company_website_url"
                      type="text"
                      name="company_website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {rateLimitError && (
                    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-2.5 text-xs text-amber-300 text-center">
                      {rateLimitError}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Deshmukh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 px-3.5 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 73044 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 px-3.5 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Email & Project Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 px-3.5 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Project / Inquiring About
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#171a23] py-2.5 px-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        {projectsData.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.location.split(',')[0].trim()})
                          </option>
                        ))}
                        <option value="Housing Society Redevelopment Proposal">Housing Society Redevelopment Proposal</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                      Message / Requirements
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Inquiring for 2 BHK at Jewel of Panvel..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 px-3.5 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>

                  {/* Chauffeur Toggle */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="chauffeur"
                      checked={formData.chauffeurPickup}
                      onChange={(e) => setFormData({ ...formData, chauffeurPickup: e.target.checked })}
                      className="rounded accent-[#d4af37] h-4 w-4"
                    />
                    <label htmlFor="chauffeur" className="text-xs text-gray-300 cursor-pointer flex items-center gap-1.5 font-medium">
                      <Car className="h-3.5 w-3.5 text-[#f5d77f]" />
                      <span>Request complimentary AC chauffeur site visit pickup</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] py-3.5 text-xs font-bold text-black shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Send Inquiry to sales@mitkarbuilders.com'}</span>
                  </button>

                  <div className="text-center text-[10px] text-gray-500">
                    MahaRERA: P52000028505 • Response within 24 working hours
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 space-y-5 my-auto">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our team has received your message and will connect with you on <span className="text-[#f5d77f] font-mono font-bold">{formData.phone}</span>.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/917304451177?text=Hi%20Mitkar%20Builders,%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20am%20inquiring%20about%20${encodeURIComponent(formData.interest)}.${formData.message ? `%20Message:%20${encodeURIComponent(formData.message)}` : ''}${formData.chauffeurPickup ? '%20(Requested%20Complimentary%20Chauffeur%20Pickup)' : ''}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 text-xs font-bold text-white transition-colors"
                  >
                    <span>Connect on WhatsApp Now</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Google Maps for Seawoods Office */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#111319] p-6 shadow-2xl flex flex-col justify-between space-y-4">
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider font-semibold">
                  LIVE LOCATION MAP
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Seawoods, Navi Mumbai
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">Visit Our Corporate Office</h3>
              <p className="text-xs text-gray-400">
                Raghunath Vihar, Plot No. 78, Sector 50, Seawoods (Near Seawoods Grand Central).
              </p>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                title="Mitkar Builders Seawoods Office Location Map"
                src="https://maps.google.com/maps?q=Mitkar+Builders+%26+Developers,+Plot+78,+Sector+50E,+Seawoods,+Navi+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Directions Action Button */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mitkar+Builders+%26+Developers,+Plot+78,+Sector+50E,+Seawoods,+Navi+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37] hover:text-black text-[#f5d77f] py-2.5 text-xs font-bold transition-all"
              >
                <MapPin className="h-4 w-4" />
                <span>Open in Google Maps Application</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
