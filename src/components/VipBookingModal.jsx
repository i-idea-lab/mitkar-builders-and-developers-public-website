import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, User, Phone, Mail, Building, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundFx';
import { projectsData } from '../data/projectsData';

export default function VipBookingModal({ isOpen, onClose, preselectedProject }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Jewel of Panvel',
    date: '',
    time: '11:00 AM',
    chauffeurPickup: false,
    pickupLocation: ''
  });

  // Honeypot field for bot protection (invisible to humans, auto-filled by bots)
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitError, setRateLimitError] = useState('');

  useEffect(() => {
    if (preselectedProject) {
      // Find matching project from projectsData if possible
      const match = projectsData.find(
        (p) => p.name.toLowerCase() === preselectedProject.toLowerCase() || p.id.toLowerCase() === preselectedProject.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        project: match ? match.name : preselectedProject
      }));
    }
  }, [preselectedProject]);

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    const lastSubmitTime = parseInt(sessionStorage.getItem('mitkar_last_vip_submit') || '0', 10);
    if (now - lastSubmitTime < 20000) {
      setRateLimitError('Please wait 20 seconds before submitting another request.');
      return;
    }

    setIsSubmitting(true);
    sessionStorage.setItem('mitkar_last_vip_submit', now.toString());
    soundFX.playSuccess();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5d77f', '#ffffff', '#aa820a']
      });
    } catch {
      // Ignore
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRateLimitError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      
      <div className="relative w-full max-w-lg rounded-3xl border border-[#d4af37]/50 bg-gradient-to-b from-[#161922] to-[#0c0e14] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-white">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:border-[#d4af37] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 px-3 py-1 text-[11px] font-bold text-[#f5d77f] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Priority Access Concierge</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-2">
                Schedule VIP Site Visit
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {preselectedProject 
                  ? `Regarding: ${preselectedProject}`
                  : 'Experience the 26,000 sq.ft podium lifestyle at Jewel of Panvel (M.G. Road)'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Invisible Honeypot Field (Bot Trap) */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="company_profile_url">Company URL</label>
                <input
                  id="company_profile_url"
                  type="text"
                  name="company_profile_url"
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

              {/* Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rohan Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  />
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="rohan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Project Dropdown */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                  Preferred Project *
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-[#1a1d26] py-2.5 px-3 text-xs text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                >
                  {projectsData.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.location.split(',')[0].trim()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time of Visit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Visit Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 px-3 text-xs text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#1a1d26] py-2.5 px-3 text-xs text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                    >
                      <option value="10:30 AM - Morning">10:30 AM (Morning Tour)</option>
                      <option value="11:30 AM - Morning">11:30 AM</option>
                      <option value="01:00 PM - Afternoon">01:00 PM (Afternoon Tour)</option>
                      <option value="03:00 PM - Golden Hour">03:00 PM</option>
                      <option value="04:30 PM - Evening">04:30 PM</option>
                      <option value="06:00 PM - Sunset View">06:00 PM (Sunset View)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Complimentary Chauffeur Pickup Checkbox */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300">
                  <input
                    type="checkbox"
                    checked={formData.chauffeurPickup}
                    onChange={(e) => setFormData({ ...formData, chauffeurPickup: e.target.checked })}
                    className="rounded accent-[#d4af37] h-4 w-4"
                  />
                  <span className="font-semibold text-[#f5d77f] flex items-center gap-1.5">
                    <Car className="h-3.5 w-3.5" />
                    Request Complimentary AC Chauffeur Pickup
                  </span>
                </label>
                {formData.chauffeurPickup && (
                  <input
                    type="text"
                    placeholder="Enter your residence area (e.g., Seawoods, Vashi, Panvel, Thane)"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full rounded-lg border border-white/15 bg-black/40 py-1.5 px-3 text-[11px] text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                  />
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7d884] to-[#aa820a] py-3 text-xs font-bold text-black shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Confirming...' : 'Confirm VIP Tour & Instant Brochure'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="text-center text-[10px] text-gray-500">
              Your information is secure. No spam, guaranteed. MahaRERA: P52000028505.
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-white">
                VIP Pass Confirmed!
              </h3>
              <p className="text-xs text-gray-300 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior real estate advisor has received your visit request for <strong>{formData.project}</strong>.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-left space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Scheduled Date & Time:</span>
                <span className="text-[#f5d77f] font-semibold">{formData.date || 'To be confirmed'} • {formData.time}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Official Sales Desk:</span>
                <span className="text-[#f5d77f] font-mono font-bold">+91 73044 51177</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Official Email:</span>
                <span className="text-white">sales@mitkarbuilders.com</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Head Office:</span>
                <span className="text-white">Office #2 & 3, Raghunath Vihar, Sector 50, Seawoods</span>
              </div>
              {formData.chauffeurPickup && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Chauffeur Service:</span>
                  <span>Requested ({formData.pickupLocation || 'Navi Mumbai'})</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/917304451177?text=Hi%20Mitkar%20Builders,%20I%20just%20scheduled%20a%20VIP%20visit%20for%20${encodeURIComponent(formData.project)}%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="flex-1 rounded-xl border border-white/20 hover:border-[#d4af37] py-2.5 text-xs font-semibold text-gray-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
