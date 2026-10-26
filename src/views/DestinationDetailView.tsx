import React from 'react';
import { ArrowLeft, MapPin, Sun, Calendar, ShieldCheck, Compass, ArrowUpRight } from 'lucide-react';
import { Destination, Tour } from '../types/travel';
import { TourCard } from '../components/ui/TourCard';
import { EditorialImage } from '../components/ui/EditorialImage';

interface DestinationDetailViewProps {
  destination: Destination;
  tours: Tour[];
  onBack: () => void;
  onSelectTour: (tour: Tour) => void;
  onOpenBooking: (tour: Tour) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({
  destination,
  tours,
  onBack,
  onSelectTour,
  onOpenBooking,
}) => {
  const destinationTours = tours.filter((t) => t.destinationId === destination.id);

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#66625D] hover:text-[#222222] transition-colors focus:outline-hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Destinations</span>
        </button>
      </div>

      {/* Cinematic Destination Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative min-h-[460px] lg:min-h-[520px] overflow-hidden border border-[#E4DCD3] flex flex-col justify-end p-8 sm:p-14">
          <EditorialImage
            src={destination.heroImage}
            alt={destination.name}
            className="absolute inset-0 w-full h-full object-cover"
            overlayScrim={true}
          />

          <div className="relative z-10 max-w-3xl text-white">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#49BCE8] font-medium mb-3">
              <span>{destination.region}</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="font-mono text-white/70">{destination.coordinates}</span>
            </div>

            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="font-serif text-5xl sm:text-7xl text-[#FAF9F6] tracking-tight leading-none">
                {destination.name}
              </h1>
              <span className="font-serif text-3xl sm:text-4xl text-[#F5C542]/90 opacity-80" dir="rtl">
                {destination.arabicName}
              </span>
            </div>

            <p className="text-base sm:text-xl text-white/90 font-light leading-relaxed mb-6" style={{ textWrap: 'balance' }}>
              {destination.tagline}
            </p>

            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#49BCE8]" />
                <span>Best Period: {destination.bestTimeToVisit}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#F5C542]" />
                <span>Average Climate: {destination.averageTemp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Monograph & Practical Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Monograph */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-2">
                Curatorial Monograph
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] leading-tight mb-6">
                The Spirit of {destination.name}
              </h2>
              <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light mb-6">
                {destination.description}
              </p>
            </div>

            {/* Curator's Private Note */}
            <div className="p-6 sm:p-8 bg-[#F5F2EB] border border-[#E4DCD3] relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Palma Curatorial Access Note</span>
              </div>
              <p className="font-serif text-lg text-[#222222] italic leading-relaxed">
                "{destination.curatorNote}"
              </p>
            </div>

            {/* Destination Highlights */}
            <div>
              <h3 className="font-serif text-2xl text-[#222222] mb-4">
                Signature Landmarks & Private Rituals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, i) => (
                  <div key={i} className="p-3.5 bg-white border border-[#E4DCD3] flex items-start gap-3">
                    <span className="font-serif text-base text-[#49BCE8] font-medium shrink-0">0{i+1}.</span>
                    <span className="text-xs text-[#55524E] leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Practical Guidance & Secondary Image */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative aspect-4/3 overflow-hidden border border-[#E4DCD3]">
              <EditorialImage
                src={destination.secondaryImage}
                alt={`${destination.name} architectural perspective`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#F2EEE9] border border-[#E4DCD3] space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#222222] font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#49BCE8]" />
                <span>Traveler Briefing</span>
              </div>
              <ul className="space-y-3 text-xs text-[#55524E]">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#49BCE8] font-bold">·</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Dedicated 5+ Tours Section for this Destination */}
        <div className="pt-16 border-t border-[#E4DCD3]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#49BCE8] font-semibold block mb-1">
                Curated Expeditions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222]">
                Tours in {destination.name} ({destinationTours.length})
              </h2>
            </div>
            <span className="text-xs text-[#888580]">
              Accompanied by licensed Egyptologists & private luxury transfers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onSelect={onSelectTour}
                onQuickBook={onOpenBooking}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
