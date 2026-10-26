import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, ShieldCheck, MapPin, Check, X, Calendar, ArrowRight, Star, Compass } from 'lucide-react';
import { Tour } from '../types/travel';
import { EditorialImage } from '../components/ui/EditorialImage';
import { TourCard } from '../components/ui/TourCard';

interface TourDetailViewProps {
  tour: Tour;
  relatedTours: Tour[];
  onBack: () => void;
  onSelectTour: (tour: Tour) => void;
  onOpenBooking: (tour: Tour) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tour,
  relatedTours,
  onBack,
  onSelectTour,
  onOpenBooking,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(tour.heroImage);

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Top Back Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#66625D] hover:text-[#222222] transition-colors focus:outline-hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Experiences</span>
        </button>
      </div>

      {/* Hero Visual Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-16/9 md:aspect-21/9 overflow-hidden border border-[#E4DCD3] shadow-md">
          <EditorialImage
            src={selectedImage}
            alt={tour.title}
            className="w-full h-full object-cover"
            overlayScrim={true}
          />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-4xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-medium mb-2">
              <span>{tour.destinationName}</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>{tour.category}</span>
            </div>
            <h1
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] leading-[1.1] mb-3"
              style={{ textWrap: 'balance' }}
            >
              {tour.title}
            </h1>
            <p className="text-sm sm:text-lg text-white/90 font-light max-w-2xl leading-relaxed">
              {tour.subtitle}
            </p>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {tour.gallery && tour.gallery.length > 1 && (
          <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
            {[tour.heroImage, ...tour.gallery].slice(0, 4).map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-all ${
                  selectedImage === img ? 'border-[#49BCE8]' : 'border-[#E4DCD3] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Layout with Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Dossier Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#F5F2EB] border border-[#E4DCD3]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Duration</span>
                <span className="font-serif text-lg text-[#222222] font-medium flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-[#49BCE8]" />
                  <span>{tour.duration}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Format</span>
                <span className="font-serif text-lg text-[#222222] font-medium flex items-center gap-1.5 mt-0.5">
                  <Users className="w-4 h-4 text-[#F5C542]" />
                  <span>{tour.groupType}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Physical Demand</span>
                <span className="font-serif text-lg text-[#222222] font-medium mt-0.5 block truncate">
                  {tour.physicalDemand}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Rating</span>
                <span className="font-serif text-lg text-[#222222] font-medium flex items-center gap-1.5 mt-0.5">
                  <Star className="w-4 h-4 text-[#F5C542] fill-[#F5C542]" />
                  <span className="tabular-nums">{tour.rating}</span>
                  <span className="text-xs text-[#888580]">({tour.reviewCount})</span>
                </span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-2">
                Expedition Overview
              </span>
              <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
                {tour.overview}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#222222] mb-6">
                Curated Highlights & Access
              </h2>
              <div className="space-y-3">
                {tour.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-[#E4DCD3] flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#49BCE8]/10 text-[#49BCE8] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#222222] leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#222222] mb-6">
                Choreographed Itinerary
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-6 bg-[#F5F2EB] border border-[#E4DCD3] relative"
                  >
                    <div className="flex items-center justify-between mb-3 border-b border-[#EAE4DC] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-xl font-medium text-[#49BCE8]">
                          Day {day.day}
                        </span>
                        <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
                        <h3 className="font-serif text-xl text-[#222222]">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#55524E] leading-relaxed mb-4 font-light">
                      {day.description}
                    </p>

                    <div className="pt-3 border-t border-[#EAE4DC] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#66625D]">
                      {day.meals && (
                        <div>
                          <strong className="text-[#222222] font-semibold">Meals: </strong>
                          <span>{day.meals}</span>
                        </div>
                      )}
                      {day.stay && (
                        <div>
                          <strong className="text-[#222222] font-semibold">Accommodations: </strong>
                          <span>{day.stay}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-white border border-[#E4DCD3]">
                <h3 className="font-serif text-xl text-[#222222] mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Privileged Inclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#55524E]">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="leading-relaxed">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white border border-[#E4DCD3]">
                <h3 className="font-serif text-xl text-[#222222] mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-stone-400" />
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#55524E]">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stone-400 font-bold">×</span>
                      <span className="leading-relaxed">{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical Logistics */}
            <div className="p-6 bg-[#F2EEE9] border border-[#E4DCD3] space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#222222] font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#49BCE8]" />
                <span>Operational Briefing</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#55524E]">
                <div>
                  <span className="font-semibold text-[#222222] block">Meeting Point</span>
                  <span>{tour.meetingPoint}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#222222] block">Departure Time</span>
                  <span>{tour.departureTime}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#222222] block">Languages Supported</span>
                  <span>{tour.languages.join(', ')}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Desktop Booking Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 bg-white border border-[#E4DCD3] shadow-md">
              <span className="text-[11px] uppercase tracking-widest text-[#888580] block mb-1">
                Private Commission
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-4xl text-[#222222] font-medium tabular-nums">
                  ${tour.priceFromUSD}
                </span>
                <span className="text-xs text-[#888580]">/ guest (USD)</span>
              </div>

              <div className="space-y-3 pb-6 border-b border-[#EAE4DC] text-xs text-[#55524E]">
                <div className="flex justify-between">
                  <span className="text-[#888580]">Format:</span>
                  <span className="font-medium text-[#222222]">{tour.groupType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888580]">Duration:</span>
                  <span className="font-medium text-[#222222]">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888580]">Clearances:</span>
                  <span className="font-medium text-emerald-700">VIP Included</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  onClick={() => onOpenBooking(tour)}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-white bg-[#222222] hover:bg-[#161514] active:scale-[0.98] transition-all rounded-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Reservation</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C542]" />
                </button>

                <p className="text-[11px] text-[#888580] text-center italic">
                  Live pricing calculator & instant reservation voucher
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE4DC] flex items-center gap-2 text-[11px] text-[#66625D]">
                <ShieldCheck className="w-4 h-4 text-[#49BCE8] shrink-0" />
                <span>Palma Travel Concierge guarantee · Free cancellation up to 48 hours</span>
              </div>
            </div>

            {/* Direct Concierge Contact Card */}
            <div className="p-6 bg-[#F5F2EB] border border-[#E4DCD3] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#222222] block">
                Have Bespoke Preferences?
              </span>
              <p className="text-xs text-[#66625D] leading-relaxed">
                Connect directly with our Chief Egypt Concierge for custom dates, private air handling, or exclusive VIP closures.
              </p>
              <a
                href="mailto:concierge@palmatravel.com"
                className="inline-block text-xs font-semibold text-[#49BCE8] hover:underline pt-1"
              >
                concierge@palmatravel.com →
              </a>
            </div>
          </div>

        </div>

        {/* Related Experiences */}
        {relatedTours && relatedTours.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E4DCD3]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#49BCE8] font-semibold block mb-1">
                  Complementary Journeys
                </span>
                <h2 className="font-serif text-3xl text-[#222222]">
                  Related Egyptian Expeditions
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTours.slice(0, 3).map((rel) => (
                <TourCard
                  key={rel.id}
                  tour={rel}
                  onSelect={onSelectTour}
                  onQuickBook={onOpenBooking}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Floating Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF9F6] border-t border-[#E4DCD3] p-4 shadow-xl z-40 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Starting from</span>
          <span className="font-serif text-2xl font-medium text-[#222222] tabular-nums">${tour.priceFromUSD}</span>
          <span className="text-xs text-[#888580]"> / guest</span>
        </div>
        <button
          onClick={() => onOpenBooking(tour)}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] rounded-xs shadow-md"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};
