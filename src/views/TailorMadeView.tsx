import React, { useState } from 'react';
import { Sparkles, Calendar, Users, MapPin, Check, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Destination, TravelStyle, CustomItinerarySubmission } from '../types/travel';
import { estimateCustomItinerary, generateBookingReference } from '../utils/bookingEngine';

interface TailorMadeViewProps {
  destinations: Destination[];
  onNavigateHome: () => void;
}

export const TailorMadeView: React.FC<TailorMadeViewProps> = ({ destinations, onNavigateHome }) => {
  const [selectedDests, setSelectedDests] = useState<string[]>(['luxor', 'aswan', 'cairo']);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Royal Nile & Desert Luxury');
  const [durationDays, setDurationDays] = useState(8);
  const [travelerCount, setTravelerCount] = useState(2);
  const [travelMonth, setTravelMonth] = useState('November 2026');
  const [tierRate, setTierRate] = useState(550); // USD per day per person
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [interests, setInterests] = useState<string[]>([
    'Private Tomb Access (Nefertari / Tutankhamun)',
    'Sunrise Hot Air Balloon Flight',
    'Private Dahabiya Sailing',
  ]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [confirmedDossier, setConfirmedDossier] = useState<CustomItinerarySubmission | null>(null);

  const availableInterests = [
    'Private Tomb Access (Nefertari / Tutankhamun)',
    'Sunrise Hot Air Balloon Flight',
    'Private Dahabiya Sailing',
    'Great Sphinx Paws VIP Clearance',
    'Red Sea Private Yacht & Diving',
    'Siwa Salt Lake & Desert Glamping',
    'Grand Egyptian Museum (GEM) Private Tour',
    'Abu Simbel by Private Flight',
    'Bedouin Astronomy & Stargazing',
  ];

  const travelStyles: { title: TravelStyle; desc: string; dailyRate: number }[] = [
    {
      title: 'Royal Nile & Desert Luxury',
      desc: 'The quintessential grand tour: 5-star historic palaces, private Dahabiya, and private Egyptologists throughout.',
      dailyRate: 550,
    },
    {
      title: 'Private Dahabiya & Waterways',
      desc: 'Deep focus on Upper Egypt river life, secluded sandbank moorings, and temple sanctuaries between Luxor and Aswan.',
      dailyRate: 620,
    },
    {
      title: 'Archaeological Scholar Expedition',
      desc: 'Intensive academic access to restricted subterranean tombs, hieroglyphic deciphering, and active excavations.',
      dailyRate: 680,
    },
    {
      title: 'Red Sea Wellness & Coastal Retreat',
      desc: 'Pairing cultural antiquities with private yachting, virgin coral reef diving, and Thalassotherapy.',
      dailyRate: 480,
    },
    {
      title: 'Family Heritage Odyssey',
      desc: 'Choreographed for multi-generational comfort: private air transfers, hands-on archaeology, and relaxed pacing.',
      dailyRate: 520,
    },
  ];

  const toggleDestination = (id: string) => {
    setSelectedDests((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const estimate = estimateCustomItinerary({
    days: durationDays,
    travelerCount,
    tierPerDayUSD: tierRate,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    const submission: CustomItinerarySubmission = {
      referenceNumber: generateBookingReference('PLM-BESPOKE'),
      fullName,
      email,
      phone,
      country,
      selectedDestinations: selectedDests,
      travelStyle,
      estimatedDays: durationDays,
      travelMonth,
      travelerCount,
      budgetPerPersonUSD: `$${estimate.perPersonEstimateUSD}`,
      specificInterests: interests,
      notes: specialNotes,
      submittedAt: new Date().toISOString(),
    };

    setConfirmedDossier(submission);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#F5C542] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
            <span>Private Atelier Commission</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Design Your Tailor-Made Egyptian Itinerary
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            Every traveler is unique. Configure your desired regions, pacing, and private antiquities clearances below. Our senior travel designers will craft a bespoke day-by-day dossier for your review.
          </p>
        </div>

        {confirmedDossier ? (
          /* Confirmation State */
          <div className="max-w-3xl mx-auto p-8 sm:p-14 bg-white border border-[#E4DCD3] shadow-lg text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#49BCE8]/10 text-[#49BCE8] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#888580] block">
              Bespoke Commission Dossier # {confirmedDossier.referenceNumber}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222]">
              Commission Dossier Received
            </h2>
            <p className="text-sm text-[#55524E] max-w-xl mx-auto leading-relaxed">
              Thank you, <strong>{confirmedDossier.fullName}</strong>. A dedicated Senior Egyptologist has been assigned to construct your tailored itinerary for <strong>{confirmedDossier.travelMonth}</strong>.
            </p>

            <div className="p-6 bg-[#F5F2EB] border border-[#E4DCD3] text-left text-xs text-[#55524E] space-y-2 max-w-lg mx-auto">
              <div className="flex justify-between border-b border-[#EAE4DC] pb-1.5">
                <span className="text-[#888580]">Travel Style:</span>
                <span className="font-medium text-[#222222]">{confirmedDossier.travelStyle}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE4DC] pb-1.5">
                <span className="text-[#888580]">Duration & Party:</span>
                <span className="font-medium text-[#222222]">{confirmedDossier.estimatedDays} Days · {confirmedDossier.travelerCount} Guests</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE4DC] pb-1.5">
                <span className="text-[#888580]">Selected Enclaves:</span>
                <span className="font-medium text-[#222222] uppercase">{confirmedDossier.selectedDestinations.join(', ')}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#888580]">Estimated Investment:</span>
                <span className="font-serif text-base font-bold text-[#222222]">${estimate.estimatedTotalUSD} USD</span>
              </div>
            </div>

            <p className="text-xs text-[#888580]">
              You will receive a confidential PDF monograph with day-by-day mapping at <strong>{confirmedDossier.email}</strong> within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={onNavigateHome}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-colors rounded-xs shadow-md"
              >
                Return to Palma Homepage
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Atelier Form */
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Step 1: Select Enclaves / Destinations */}
            <div className="p-8 bg-white border border-[#E4DCD3] shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-1">
                <span>Phase 01</span>
                <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
                <span>Geographical Focus</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-2">
                Select Your Desired Egyptian Destinations
              </h3>
              <p className="text-xs text-[#66625D] mb-6">
                Choose one or more destinations to weave into your route:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {destinations.map((dest) => {
                  const isChecked = selectedDests.includes(dest.id);
                  return (
                    <div
                      key={dest.id}
                      onClick={() => toggleDestination(dest.id)}
                      className={`p-3.5 border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-[#222222] bg-[#FAF9F6] shadow-xs ring-1 ring-[#222222]'
                          : 'border-[#E4DCD3] hover:border-[#CCC6BC] bg-white'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-base text-[#222222] block leading-snug">
                          {dest.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#888580]">
                          {dest.region}
                        </span>
                      </div>
                      <div className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#222222] border-[#222222] text-white' : 'border-[#D8D0C5]'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 text-[#F5C542]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Travel Style & Pacing */}
            <div className="p-8 bg-white border border-[#E4DCD3] shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-1">
                <span>Phase 02</span>
                <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
                <span>Philosophy & Style</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-2">
                Select Your Preferred Travel Aesthetic
              </h3>
              <p className="text-xs text-[#66625D] mb-6">
                Defines accommodation class, transport tier, and guide specialization:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelStyles.map((style) => {
                  const isSelected = travelStyle === style.title;
                  return (
                    <div
                      key={style.title}
                      onClick={() => {
                        setTravelStyle(style.title);
                        setTierRate(style.dailyRate);
                      }}
                      className={`p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#222222] bg-[#FAF9F6] shadow-xs ring-1 ring-[#222222]'
                          : 'border-[#E4DCD3] bg-white hover:border-[#CCC6BC]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-xl text-[#222222] block mb-2">
                          {style.title}
                        </span>
                        <p className="text-xs text-[#66625D] leading-relaxed font-light mb-4">
                          {style.desc}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#EAE4DC] flex items-center justify-between text-xs">
                        <span className="text-[#888580]">Indicative Daily Rate</span>
                        <span className="font-serif font-medium text-[#222222] tabular-nums">
                          ${style.dailyRate} / day
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Duration, Timing & Party */}
            <div className="p-8 bg-white border border-[#E4DCD3] shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-1">
                <span>Phase 03</span>
                <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
                <span>Dimensions & Timing</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-6">
                Duration, Party Size & Anticipated Period
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-2">
                    Total Duration (Days): <strong className="text-[#222222]">{durationDays} Days</strong>
                  </label>
                  <input
                    type="range"
                    min={4}
                    max={21}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-[#222222] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#888580] mt-1">
                    <span>4 Days (Mini)</span>
                    <span>10 Days (Ideal)</span>
                    <span>21 Days (Grand)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-2">
                    Number of Travelers
                  </label>
                  <select
                    value={travelerCount}
                    onChange={(e) => setTravelerCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Solo Traveler' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55524E] mb-2">
                    Anticipated Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
                  >
                    {[
                      'October 2026',
                      'November 2026',
                      'December 2026 (Festive)',
                      'January 2027',
                      'February 2027',
                      'March 2027',
                      'April 2027 (Easter)',
                      'May 2027',
                      'Autumn 2027',
                    ].map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Specific Privileged Access Elements */}
            <div className="p-8 bg-white border border-[#E4DCD3] shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-1">
                <span>Phase 04</span>
                <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
                <span>Privileged Access</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-2">
                Specialized Inclusions & Clearances
              </h3>
              <p className="text-xs text-[#66625D] mb-6">
                Select special access privileges you wish our concierges to secure:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableInterests.map((interest) => {
                  const isChecked = interests.includes(interest);
                  return (
                    <div
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-3 border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-[#222222] bg-[#FAF9F6] shadow-xs ring-1 ring-[#222222]'
                          : 'border-[#E4DCD3] bg-white hover:border-[#CCC6BC]'
                      }`}
                    >
                      <span className="text-xs text-[#222222] leading-snug pr-2">{interest}</span>
                      <div className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#222222] border-[#222222] text-white' : 'border-[#D8D0C5]'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 text-[#F5C542]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Info & Instant Estimate */}
            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3] shadow-md space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-1">
                  Phase 05 · Client Dossier
                </span>
                <h3 className="font-serif text-2xl text-[#222222]">
                  Your Details & Investment Estimate
                </h3>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your passport name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="client@luxury.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55524E] mb-1">
                  Additional Vision, Medical or Dietary Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversary celebrations, private air handling, specific Pharaoh tombs..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden resize-none"
                />
              </div>

              {/* Real-time Calculation Card */}
              <div className="p-6 bg-white border border-[#E4DCD3] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#888580] block">
                    Estimated Private Commission Investment ({travelerCount} {travelerCount === 1 ? 'Guest' : 'Guests'}, {durationDays} Days)
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-3xl sm:text-4xl font-medium text-[#222222] tabular-nums">
                      ${estimate.estimatedTotalUSD}
                    </span>
                    <span className="text-xs text-[#888580]">
                      (${estimate.perPersonEstimateUSD} / guest)
                    </span>
                  </div>
                  <span className="text-[11px] text-[#66625D]">
                    Inclusive of private Egyptologists, 5-star palace hotels/Dahabiya, private clearances & luxury Mercedes fleet.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-all rounded-xs shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Bespoke Commission</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C542]" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#888580]">
                <ShieldCheck className="w-4 h-4 text-[#49BCE8]" />
                <span>Complimentary curatorial design · Non-binding proposal delivered within 24 hours</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
