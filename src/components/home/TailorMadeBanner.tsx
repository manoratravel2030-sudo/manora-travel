import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { EditorialImage } from '../ui/EditorialImage';

interface TailorMadeBannerProps {
  onStartCustomItinerary: () => void;
}

export const TailorMadeBanner: React.FC<TailorMadeBannerProps> = ({ onStartCustomItinerary }) => {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#E4DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1A18] text-[#FAF9F6] border border-[#2A2826] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl">
          
          {/* Visual column */}
          <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto overflow-hidden">
            <EditorialImage
              src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=85"
              alt="Tailor-made luxury travel in Egypt with private guides and sunset views"
              className="w-full h-full object-cover"
              overlayScrim={true}
            />
          </div>

          {/* Copy & CTA */}
          <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] text-[#F5C542] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Private Commissions</span>
              </div>

              <h2
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF9F6] leading-[1.15] mb-6"
                style={{ textWrap: 'balance' }}
              >
                Your Vision. Crafted by Antiquities Curators.
              </h2>

              <p className="text-sm sm:text-base text-[#DDD9D2] leading-relaxed font-light mb-8 max-w-xl">
                Whether you dream of a 14-day grand expedition crossing the Western Desert from Siwa to Luxor, a private family Dahabiya charter on the Nile, or a private helicopter transfer between Red Sea coral reefs and the Pyramids of Giza—our senior travel designers will choreograph every detail.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-8 border-b border-[#2A2826] text-xs text-[#CCC6BC]">
                <div>
                  <span className="block font-serif text-xl text-[#FAF9F6] mb-0.5">100%</span>
                  <span>Bespoke Routing</span>
                </div>
                <div>
                  <span className="block font-serif text-xl text-[#FAF9F6] mb-0.5">24h</span>
                  <span>Initial Proposal Turnaround</span>
                </div>
                <div>
                  <span className="block font-serif text-xl text-[#FAF9F6] mb-0.5">1-on-1</span>
                  <span>Curator Planning Call</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartCustomItinerary}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] transition-all rounded-xs cursor-pointer shadow-md"
              >
                <span>Design Custom Itinerary</span>
                <ArrowUpRight className="w-4 h-4 text-[#222222]" />
              </button>
              <span className="text-xs text-[#88837A] text-center sm:text-left">
                Complimentary consultation · No commitment
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
