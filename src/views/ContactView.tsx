import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { generateBookingReference } from '../utils/bookingEngine';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Private Antiquities Expedition');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    const ref = generateBookingReference('INQ');
    setTicketRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>Direct Access</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>Cairo, Luxor & Aswan</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Palma Private Concierge Desks
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            Whether inquiring regarding an upcoming journey, requesting private air arrangements, or seeking special protocol clearances with the Ministry of Antiquities, our senior concierges respond with precision and discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Regional Desks */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3] space-y-6">
              <h3 className="font-serif text-2xl text-[#222222]">
                Regional Operational Desks
              </h3>

              {/* Cairo */}
              <div className="space-y-1 text-xs text-[#55524E] pb-4 border-b border-[#EAE4DC]">
                <strong className="text-sm font-serif text-[#222222] block">Cairo Headquarters</strong>
                <p>14 Al-Shams Towers, Corniche El Nil, Garden City, Cairo</p>
                <div className="pt-1 flex items-center gap-2 text-[#222222]">
                  <Phone className="w-3.5 h-3.5 text-[#49BCE8]" />
                  <span>+20 100 088 9977 (24/7 Diplomatic Line)</span>
                </div>
              </div>

              {/* Luxor */}
              <div className="space-y-1 text-xs text-[#55524E] pb-4 border-b border-[#EAE4DC]">
                <strong className="text-sm font-serif text-[#222222] block">Luxor West Bank & Nile Base</strong>
                <p>Winter Palace Pavilion & Marine Pier, Corniche Street, Luxor</p>
                <div className="pt-1 flex items-center gap-2 text-[#222222]">
                  <Phone className="w-3.5 h-3.5 text-[#F5C542]" />
                  <span>+20 95 238 4400</span>
                </div>
              </div>

              {/* Aswan */}
              <div className="space-y-1 text-xs text-[#55524E]">
                <strong className="text-sm font-serif text-[#222222] block">Aswan Dahabiya Moorings</strong>
                <p>Elephantine View Dock, Old Cataract Promenade, Aswan</p>
                <div className="pt-1 flex items-center gap-2 text-[#222222]">
                  <Phone className="w-3.5 h-3.5 text-[#49BCE8]" />
                  <span>+20 97 231 6000</span>
                </div>
              </div>
            </div>

            {/* Direct Digital Communications */}
            <div className="p-8 bg-white border border-[#E4DCD3] space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#888580] font-semibold">
                Instant Messaging & Dispatch
              </div>

              <div className="space-y-3 text-xs">
                <a
                  href="https://wa.me/201000889977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222] flex items-center gap-3 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#222222] block">WhatsApp Private Client Desk</span>
                    <span className="text-[#66625D]">Instant response for active guests and urgent requests</span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@palmatravel.com"
                  className="p-3 bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222] flex items-center gap-3 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#49BCE8] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#222222] block">concierge@palmatravel.com</span>
                    <span className="text-[#66625D]">Encrypted dispatch for comprehensive dossiers</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Concierge Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white border border-[#E4DCD3] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#49BCE8]/10 text-[#49BCE8] flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#888580] block">
                  Dossier Logged · Concierge Dispatch
                </span>
                <h3 className="font-serif text-3xl text-[#222222]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#66625D] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your inquiry has been routed to our senior travel director.
                </p>
                <div className="my-4 p-3 bg-[#F2EEE9] border border-[#E4DCD3] inline-block font-mono text-sm font-bold text-[#222222]">
                  Reference ID: {ticketRef}
                </div>
                <p className="text-xs text-[#888580]">
                  Expected concierge review SLA: Within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#222222] border border-[#222222] hover:bg-[#F2EEE9] transition-colors rounded-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-1">
                    Confidential Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#222222]">
                    Communicate With Our Concierge
                  </h3>
                  <p className="text-xs text-[#66625D] mt-1 font-light">
                    Every message is treated with utmost diplomatic discretion.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="client@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                      Phone / WhatsApp (With Country Code)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                      Inquiry Focus
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#55524E]"
                    >
                      <option value="Private Antiquities Expedition">Private Antiquities Expedition</option>
                      <option value="Royal Dahabiya Nile Charter">Royal Dahabiya Nile Charter</option>
                      <option value="VIP Sunrise Balloon Flight">VIP Sunrise Balloon Flight</option>
                      <option value="Desert & Oasis Journey (Siwa/Fayoum)">Desert & Oasis Journey (Siwa/Fayoum)</option>
                      <option value="Diplomatic / Corporate Delegation">Diplomatic / Corporate Delegation</option>
                      <option value="Media & Photographic Clearances">Media & Photographic Clearances</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                    Your Requirements & Travel Vision <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Preferred dates, number of travelers, destinations of interest, and any bespoke requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-[#888580]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#49BCE8]" />
                    <span>Non-disclosure guaranteed</span>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-all rounded-xs shadow-xs cursor-pointer"
                  >
                    Transmit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
