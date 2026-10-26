import React from 'react';
import { ArrowUpRight, ShieldCheck, Sun, Compass, Check } from 'lucide-react';
import { EditorialImage } from '../ui/EditorialImage';

interface HotAirBalloonSectionProps {
  onBookBalloon: () => void;
  onViewBalloonDetails: () => void;
}

export const HotAirBalloonSection: React.FC<HotAirBalloonSectionProps> = ({
  onBookBalloon,
  onViewBalloonDetails,
}) => {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#E4DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
              <span>04</span>
              <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
              <span>The Theban Skies</span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#222222] leading-[1.1] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Dawn Over the Valley of the Kings.
            </h2>

            <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
              As the Egyptian sun crests the eastern horizon, rise in total silence above the West Bank of Luxor. Gaze down upon 4,000 years of mortuary architecture carved into the golden limestone amphitheater.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F5F2EB] border border-[#E4DCD3]">
                <span className="font-serif text-3xl font-medium text-[#222222] tabular-nums block mb-1">
                  1,500 ft
                </span>
                <span className="text-xs uppercase tracking-wider text-[#888580]">
                  Peak Altitude Drift
                </span>
              </div>

              <div className="p-4 bg-[#F5F2EB] border border-[#E4DCD3]">
                <span className="font-serif text-3xl font-medium text-[#222222] tabular-nums block mb-1">
                  45–60 min
                </span>
                <span className="text-xs uppercase tracking-wider text-[#888580]">
                  Aerial Flight Duration
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-[#55524E]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#49BCE8]" />
                <span>Civil Aviation Authority (CAA) Certified Master Flight Captains</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sun className="w-4 h-4 text-[#F5C542]" />
                <span>Private Nile motor launch crossing with dawn espresso and dates</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookBalloon}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-colors rounded-xs flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Reserve Sunrise Flight</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C542]" />
              </button>
              <button
                onClick={onViewBalloonDetails}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#222222] border border-[#222222] hover:bg-[#F2EEE9] transition-colors rounded-xs cursor-pointer"
              >
                <span>Flight Guide & Details</span>
              </button>
            </div>
          </div>

          {/* Spectacular Visual Framing */}
          <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 overflow-hidden border border-[#E4DCD3] shadow-md">
            <EditorialImage
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85"
              alt="Spectacular sunrise photograph of hot air balloons soaring peacefully over the Valley of the Kings"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-xs px-3 py-1.5 border border-[#E4DCD3] text-[10px] uppercase tracking-widest text-[#222222] font-semibold">
              Daily Sunrise Departure · Luxor West Bank
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
