import React from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { EditorialImage } from '../ui/EditorialImage';

interface FinalCTAProps {
  onPlanTrip: () => void;
  onContactConcierge: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanTrip, onContactConcierge }) => {
  return (
    <section className="relative py-28 bg-[#181716] text-[#FAF9F6] overflow-hidden">
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=2000&q=85"
          alt="Ancient Giza Pyramids at twilight"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181716] via-[#181716]/80 to-[#181716]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] text-[#49BCE8] font-medium">
          <span>The Next Chapter</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Palma Travel Concierge</span>
        </div>

        <h2
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF9F6] leading-[1.08] mb-6"
          style={{ textWrap: 'balance' }}
        >
          Begin Your Egyptian Odyssey.
        </h2>

        <p
          className="text-base sm:text-xl text-[#DDD9D2] font-light max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ textWrap: 'balance' }}
        >
          Let our team of senior Egyptologists and private travel curators craft your journey through five thousand years of wonder.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onPlanTrip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] transition-all rounded-xs shadow-xl cursor-pointer"
          >
            <span>Plan Bespoke Journey</span>
            <ArrowUpRight className="w-4 h-4 text-[#222222]" />
          </button>

          <button
            onClick={onContactConcierge}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#FAF9F6] border border-white/30 hover:border-white hover:bg-white/10 transition-all rounded-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#49BCE8]" />
            <span>Speak With a Concierge</span>
          </button>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs text-[#9E988F]">
          <span>Direct Cairo Desk: +20 100 088 9977</span>
          <span aria-hidden="true">·</span>
          <span>Luxor Operations: +20 95 238 4400</span>
          <span aria-hidden="true">·</span>
          <span>concierge@palmatravel.com</span>
        </div>
      </div>
    </section>
  );
};
