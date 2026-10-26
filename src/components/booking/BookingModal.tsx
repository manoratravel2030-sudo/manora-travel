import React, { useState } from 'react';
import { X, Calendar, Users, ShieldCheck, CheckCircle2, Download, Printer, ArrowRight } from 'lucide-react';
import { Tour, BookingSubmission } from '../../types/travel';
import { calculateTourPrice, validateBookingForm, generateBookingReference } from '../../utils/bookingEngine';

interface BookingModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ tour, isOpen, onClose }) => {
  if (!isOpen || !tour) return null;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [travelDate, setTravelDate] = useState(minDateStr);
  const [guestCount, setGuestCount] = useState(2);
  const [tier, setTier] = useState<'Standard VIP' | 'Private Bespoke' | 'Royal Heritage Suite'>('Private Bespoke');
  const [includeGuide, setIncludeGuide] = useState(true);
  const [guideLang, setGuideLang] = useState(tour.languages[0] || 'English');
  const [pickupLocation, setPickupLocation] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  const priceCalc = calculateTourPrice({
    basePriceUSD: tour.priceFromUSD,
    guestCount,
    tier,
    includePrivateEgyptologist: includeGuide,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateBookingForm({
      fullName,
      email,
      phone,
      travelDate,
      guestCount,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const ref = generateBookingReference('PLM');
    const submission: BookingSubmission = {
      referenceNumber: ref,
      tourId: tour.id,
      tourTitle: tour.title,
      destinationName: tour.destinationName,
      fullName,
      email,
      phone,
      travelDate,
      guestCount,
      tier,
      guideLanguage: guideLang,
      hotelPickupLocation: pickupLocation || 'To be communicated to concierge',
      specialRequests,
      calculatedTotalUSD: priceCalc.totalUSD,
      submittedAt: new Date().toISOString(),
    };

    setConfirmedBooking(submission);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#E4DCD3] shadow-2xl rounded-xs overflow-hidden my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4DCD3] bg-[#F2EEE9]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-wide uppercase text-[#222222]">
              Palma Private Reservation
            </span>
            <span className="text-xs text-[#888580] hidden sm:inline">· Concierge Desk</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#55524E] hover:text-[#222222] transition-colors"
            aria-label="Close Reservation Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation Voucher Screen */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="p-6 bg-[#FAF9F6] border border-[#DDA326]/40 rounded-xs text-center relative overflow-hidden">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#49BCE8]/10 text-[#49BCE8] flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#49BCE8]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#888580] block mb-1">
                  Official Reservation Voucher
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] mb-1">
                  Reservation Request Received
                </h3>
                <p className="text-xs text-[#66625D] max-w-md mx-auto">
                  Your reservation dossier has been assigned to a Senior Palma Egypt Concierge.
                </p>

                <div className="my-6 p-4 bg-[#F2EEE9] border border-[#E4DCD3] inline-block text-left w-full sm:w-auto min-w-[320px]">
                  <div className="text-[11px] uppercase tracking-wider text-[#888580]">Voucher Reference</div>
                  <div className="font-mono text-xl font-bold text-[#222222] tracking-wider mb-3">
                    {confirmedBooking.referenceNumber}
                  </div>
                  <div className="space-y-1.5 text-xs text-[#55524E]">
                    <div className="flex justify-between border-b border-[#E4DCD3] pb-1">
                      <span className="text-[#888580]">Experience:</span>
                      <span className="font-medium text-[#222222] text-right truncate max-w-[200px]">{confirmedBooking.tourTitle}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E4DCD3] pb-1">
                      <span className="text-[#888580]">Date:</span>
                      <span className="font-medium text-[#222222]">{confirmedBooking.travelDate}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E4DCD3] pb-1">
                      <span className="text-[#888580]">Travelers:</span>
                      <span className="font-medium text-[#222222]">{confirmedBooking.guestCount} Guests · {confirmedBooking.tier}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#888580]">Estimated Total:</span>
                      <span className="font-serif text-base font-bold text-[#222222]">${confirmedBooking.calculatedTotalUSD} USD</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#66625D] space-y-1">
                  <p>A formal travel itinerary and secure payment link will be transmitted to <strong>{confirmedBooking.email}</strong> within 2 hours.</p>
                  <p className="text-[#888580] text-[11px] italic">No payment is captured during the initial request phase.</p>
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#222222] bg-[#FAF9F6] border border-[#222222] hover:bg-[#F2EEE9] transition-colors rounded-xs"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Voucher</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-colors rounded-xs"
                  >
                    Done
                  </button>
                </div>
              </div>

              {/* Developer notice for Claude handoff */}
              <div className="p-3 bg-[#EBF8FD] border border-[#49BCE8]/30 text-xs text-[#2695BF]">
                <strong>Developer Notice:</strong> This form captures full structured reservation state. In Phase 2, Claude will attach this handler to the Hostinger MariaDB/PostgreSQL backend and Stripe/Authorize.Net gateway.
              </div>
            </div>
          ) : (
            /* Booking Configuration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tour Brief Card */}
              <div className="p-4 bg-[#F5F2EB] border border-[#E4DCD3] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#49BCE8] font-medium block">
                    {tour.destinationName} · {tour.category}
                  </span>
                  <h4 className="font-serif text-lg text-[#222222] leading-snug">
                    {tour.title}
                  </h4>
                  <span className="text-xs text-[#66625D]">Duration: {tour.duration}</span>
                </div>
                <div className="text-right shrink-0 pl-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Base rate</span>
                  <span className="font-serif text-xl font-medium text-[#222222]">${tour.priceFromUSD}</span>
                  <span className="text-[11px] text-[#888580]"> / guest</span>
                </div>
              </div>

              {/* Preferences Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1.5">
                    Commencement Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={minDateStr}
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        errors.travelDate ? 'border-red-500' : 'border-[#D8D0C5]'
                      } focus:border-[#49BCE8] focus:outline-hidden text-[#222222]`}
                    />
                  </div>
                  {errors.travelDate && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.travelDate}</span>
                  )}
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1.5">
                    Guests (Party Size) <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest (Solo Private)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Luxury Experience Tier Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1.5">
                  Experience Service Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'Standard VIP', label: 'Standard VIP', desc: 'Chauffeured Mercedes & group clearances' },
                    { id: 'Private Bespoke', label: 'Private Bespoke', desc: 'Dedicated Mercedes V-Class & fast-track', tag: 'Recommended' },
                    { id: 'Royal Heritage Suite', label: 'Royal Heritage', desc: 'Maybach transfer & scholar accompaniment' },
                  ].map((t) => {
                    const isSelected = tier === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setTier(t.id as any)}
                        className={`p-3 border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#222222] bg-[#FAF9F6] shadow-xs ring-1 ring-[#222222]'
                            : 'border-[#E4DCD3] bg-white hover:border-[#CCC6BC]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-[#222222]">{t.label}</span>
                          {t.tag && (
                            <span className="text-[9px] uppercase tracking-wider text-[#DDA326] font-bold">
                              {t.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#66625D] leading-tight font-light">{t.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Guide Language & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1.5">
                    Preferred Guide Language
                  </label>
                  <select
                    value={guideLang}
                    onChange={(e) => setGuideLang(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
                  >
                    {['English', 'French', 'German', 'Spanish', 'Italian', 'Russian', 'Arabic'].map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-1.5">
                    Hotel or Dahabiya Pickup
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Winter Palace Luxor / Marriott Mena House"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
                  />
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="pt-4 border-t border-[#E4DCD3] space-y-4">
                <div className="text-xs uppercase tracking-widest text-[#888580] font-semibold">
                  Client Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-1">
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-[#55524E] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="As on passport"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3 py-2 text-xs bg-white border ${
                        errors.fullName ? 'border-red-500' : 'border-[#D8D0C5]'
                      } focus:border-[#49BCE8] focus:outline-hidden`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-[#55524E] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="client@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-2 text-xs bg-white border ${
                        errors.email ? 'border-red-500' : 'border-[#D8D0C5]'
                      } focus:border-[#49BCE8] focus:outline-hidden`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>
                    )}
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-[#55524E] mb-1">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3 py-2 text-xs bg-white border ${
                        errors.phone ? 'border-red-500' : 'border-[#D8D0C5]'
                      } focus:border-[#49BCE8] focus:outline-hidden`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-[#55524E] mb-1">
                    Special Requests or Accessibility Inquiries (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Dietary requirements, private photographer request, anniversary notes..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              {/* Real-time Pricing Summary */}
              <div className="p-4 bg-[#F2EEE9] border border-[#E4DCD3] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#888580] block">
                    Calculated Reservation Total ({guestCount} {guestCount === 1 ? 'Guest' : 'Guests'})
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-medium text-[#222222] tabular-nums">
                      ${priceCalc.totalUSD}
                    </span>
                    <span className="text-xs text-[#888580]">
                      (${priceCalc.perPersonUSD} / guest)
                    </span>
                  </div>
                  <span className="text-[11px] text-[#66625D]">Includes private vehicle, admissions, taxes & clearances</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-all rounded-xs shadow-md shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Request Reservation</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C542]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#888580]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#49BCE8]" />
                <span>Zero advance deposit required for initial availability verification</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
