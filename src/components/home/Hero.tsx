import React from 'react';
import { ArrowUpRight, Compass, Shield, Award, Sparkles } from 'lucide-react';
import { EditorialImage } from '../ui/EditorialImage';

interface HeroProps {
  onExploreClick: () => void;
  onBespokeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBespokeClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#181716]">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=2000&q=88"
          alt="Ancient Egyptian Pyramids of Giza at golden sunset"
          className="w-full h-full object-cover scale-100"
          overlayScrim={true}
        />
        {/* Additional Subtle Gradient Wash for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Main Hero Typography & Call-to-Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] text-[#49BCE8] font-medium">
            <span>Contemporary Egyptian Tourism</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-[#F5C542]">Est. Luxor & Cairo</span>
          </div>

          {/* Requested Exact Headline */}
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF9F6] leading-[1.08] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            EGYPT, BEAUTIFULLY UNDISCOVERED.
          </h1>

          {/* Requested Exact Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-light text-[#E5DFD5] leading-relaxed mb-10 max-w-2xl"
            style={{ textWrap: 'balance' }}
          >
            Extraordinary journeys. Timeless destinations. Unforgettable moments.
          </p>

          {/* Distinctive Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] active:scale-[0.98] transition-all rounded-xs shadow-lg group cursor-pointer"
            >
              <span>Explore Experiences</span>
              <ArrowUpRight className="w-4 h-4 text-[#222222] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onBespokeClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#FAF9F6] border border-white/40 hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all rounded-xs backdrop-blur-xs cursor-pointer"
            >
              <span>Plan Tailor-Made Itinerary</span>
            </button>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon (Claim-to-Proof & Operational Standards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#49BCE8] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#FAF9F6]">
                Private Clearances
              </span>
              <span className="text-xs text-white/70 font-light">
                Exclusive after-hours tomb & temple entry
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#F5C542] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#FAF9F6]">
                Licensed Scholars
              </span>
              <span className="text-xs text-white/70 font-light">
                PhD Egyptologists accompanying all private tours
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#49BCE8] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#FAF9F6]">
                Royal Dahabiyas
              </span>
              <span className="text-xs text-white/70 font-light">
                Private twin-masted yachts on secluded Nile sandbanks
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#F5C542] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#FAF9F6]">
                24/7 Diplomatic Concierge
              </span>
              <span className="text-xs text-white/70 font-light">
                Personal handler from tarmac landing to departure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
