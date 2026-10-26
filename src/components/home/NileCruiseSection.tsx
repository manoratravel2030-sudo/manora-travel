import React from 'react';
import { ArrowUpRight, Anchor, Utensils, Compass, Wind } from 'lucide-react';
import { EditorialImage } from '../ui/EditorialImage';

interface NileCruiseSectionProps {
  onExploreCruises: () => void;
  onCharterInquiry: () => void;
}

export const NileCruiseSection: React.FC<NileCruiseSectionProps> = ({
  onExploreCruises,
  onCharterInquiry,
}) => {
  return (
    <section className="py-24 bg-[#181716] text-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>03</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>The Royal Waterways</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] leading-[1.1] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            The Nile, As It Was Meant to Be Sailed.
          </h2>
          <p className="text-base sm:text-lg text-[#CCC6BC] leading-relaxed font-light">
            Step back into the golden age of Nile exploration. Aboard Palma’s private twin-masted Dahabiyas, time dissolves as billowing linen sails catch the northern breeze between Luxor and Aswan.
          </p>
        </div>

        {/* Cinematic Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Visual */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full overflow-hidden border border-[#2A2826]">
            <EditorialImage
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1600&q=85"
              alt="Luxury private Dahabiya sailing on the tranquil Nile near Aswan"
              className="w-full h-full object-cover"
              overlayScrim={true}
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#F5C542] block mb-1">
                Vessel Profile · The Dahabiya Nefertiti
              </span>
              <p className="font-serif text-2xl text-[#FAF9F6]">
                Only 6 River Suites · Hand-Laid Teak Decks · Zero Engine Noise
              </p>
            </div>
          </div>

          {/* Editorial Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#201F1D] p-8 sm:p-10 border border-[#2A2826]">
            <div>
              <h3 className="font-serif text-2xl text-[#FAF9F6] mb-6 border-b border-[#2A2826] pb-4">
                The Dahabiya Distinction
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Wind className="w-5 h-5 text-[#49BCE8] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF9F6] mb-1">
                      Pure Wind Navigation & Seclusion
                    </h4>
                    <p className="text-xs text-[#A8A29E] leading-relaxed font-light">
                      Unlike commercial cruisers carrying 150 guests, our Dahabiyas navigate purely by sail and tug. Moor at private riverbanks where mega-ships cannot dock.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Utensils className="w-5 h-5 text-[#F5C542] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF9F6] mb-1">
                      Farm-to-Deck Gourmet Dining
                    </h4>
                    <p className="text-xs text-[#A8A29E] leading-relaxed font-light">
                      Fresh produce, Nile fish, and organic herbs sourced daily from Upper Egyptian riverbanks, prepared by your private on-board master chef.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Anchor className="w-5 h-5 text-[#49BCE8] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF9F6] mb-1">
                      Private Shore Access with Scholar
                    </h4>
                    <p className="text-xs text-[#A8A29E] leading-relaxed font-light">
                      Walk into the sandstone quarries of Gebel el-Silsila and the sanctuaries of Kom Ombo accompanied by our dedicated Egyptologist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2826] flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCruises}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] transition-colors rounded-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Nile Itineraries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onCharterInquiry}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] border border-white/30 hover:border-white transition-colors rounded-xs cursor-pointer"
              >
                <span>Inquire Private Charter</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
