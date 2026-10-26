import React from 'react';
import { ShieldCheck, Award, BookOpen, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { EditorialImage } from '../components/ui/EditorialImage';

interface AboutViewProps {
  onPlanTrip: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onPlanTrip }) => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>Our Foundation</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>Est. Luxor & Cairo</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Palma Travel: Heritage, Intellect & Slow Luxury
          </h1>
          <p className="text-base sm:text-xl text-[#55524E] leading-relaxed font-light">
            Founded by Egyptian Egyptologists and private travel curators, Palma Travel was born from a singular conviction: that Egypt’s sublime antiquities and landscapes should be experienced with scholarly depth, unhurried contemplation, and absolute privacy.
          </p>
        </div>

        {/* Brand Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 relative aspect-16/10 overflow-hidden border border-[#E4DCD3] shadow-md">
            <EditorialImage
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1600&q=85"
              alt="Ancient sandstone columns of Karnak Temple illuminated by dawn light"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl text-[#222222] leading-tight">
              Beyond the Tourism Gaze
            </h2>
            <p className="text-sm leading-relaxed text-[#55524E] font-light">
              Too often, travel to Egypt is treated as a checklist of crowded monuments. We reject rushed schedules and noisy tour buses.
            </p>
            <p className="text-sm leading-relaxed text-[#55524E] font-light">
              Instead, Palma crafts intimate private encounters. We open royal tombs at sunrise before gates unlock for the public. We sail traditional wooden Dahabiyas whose billowing sails mirror those of pharaonic barques. We seat our guests with university scholars who have dedicated their lives to deciphering hieroglyphs.
            </p>
            <div className="pt-4 border-t border-[#EAE4DC] flex items-center gap-4 text-xs text-[#888580]">
              <span>Licensed Egyptian Tour Operator</span>
              <span aria-hidden="true">·</span>
              <span>Ministry of Tourism #2481</span>
            </div>
          </div>
        </div>

        {/* Four Curatorial Pillars */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-1">
              Curatorial Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222]">
              The Four Commitments of Palma
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3]">
              <BookOpen className="w-6 h-6 text-[#49BCE8] mb-4" />
              <h3 className="font-serif text-xl text-[#222222] mb-2">Scholarly Depth</h3>
              <p className="text-xs text-[#66625D] leading-relaxed font-light">
                Every guide is a licensed researcher or university lecturer with rigorous historical fluency.
              </p>
            </div>

            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3]">
              <ShieldCheck className="w-6 h-6 text-[#F5C542] mb-4" />
              <h3 className="font-serif text-xl text-[#222222] mb-2">Diplomatic Security</h3>
              <p className="text-xs text-[#66625D] leading-relaxed font-light">
                Discreet personal security details and armored transport available for international delegations.
              </p>
            </div>

            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3]">
              <Compass className="w-6 h-6 text-[#49BCE8] mb-4" />
              <h3 className="font-serif text-xl text-[#222222] mb-2">Private Clearances</h3>
              <p className="text-xs text-[#66625D] leading-relaxed font-light">
                Direct official clearances from the Supreme Council of Antiquities for special private site openings.
              </p>
            </div>

            <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3]">
              <HeartHandshake className="w-6 h-6 text-[#F5C542] mb-4" />
              <h3 className="font-serif text-xl text-[#222222] mb-2">Local Stewardship</h3>
              <p className="text-xs text-[#66625D] leading-relaxed font-light">
                100% of ground partnerships empower generational craftsmen, Nubian boatmen, and Bedouin desert families.
              </p>
            </div>
          </div>
        </div>

        {/* Concierge Leadership Callout */}
        <div className="p-8 sm:p-14 bg-[#181716] text-[#FAF9F6] border border-[#2A2826] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#F5C542] font-semibold block mb-2">
              Private Travel Advisory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] mb-3">
              Begin a Dialogue With Our Founders
            </h2>
            <p className="text-xs sm:text-sm text-[#CCC6BC] leading-relaxed font-light">
              Every Palma itinerary is personally reviewed by our directors before confirmation. We welcome your private travel inquiries.
            </p>
          </div>

          <button
            onClick={onPlanTrip}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] transition-colors rounded-xs shadow-md shrink-0 cursor-pointer"
          >
            Design Itinerary
          </button>
        </div>

      </div>
    </div>
  );
};
