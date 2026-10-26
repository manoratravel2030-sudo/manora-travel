import React from 'react';
import { ArrowUpRight, Anchor, Wind, Utensils, ShieldCheck, Compass, Check } from 'lucide-react';
import { Tour } from '../types/travel';
import { EditorialImage } from '../components/ui/EditorialImage';
import { TourCard } from '../components/ui/TourCard';

interface NileCruisesViewProps {
  nileTours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onOpenBooking: (tour: Tour) => void;
  onInquireCharter: () => void;
}

export const NileCruisesView: React.FC<NileCruisesViewProps> = ({
  nileTours,
  onSelectTour,
  onOpenBooking,
  onInquireCharter,
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>The Sacred River</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>Royal Dahabiyas & Historic Steamers</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Luxury Nile Cruises
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            To experience the Nile aboard a Palma private Dahabiya is to travel as European royalty and 19th-century Egyptologists once did. Silent sails, hand-crafted woodwork, farm-to-deck cuisine, and exclusive moorings at isolated sandbars inaccessible to commercial mega-ships.
          </p>
        </div>

        {/* Feature Vessel Presentation */}
        <div className="mb-16 bg-[#181716] text-[#FAF9F6] border border-[#2A2826] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl">
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full overflow-hidden">
            <EditorialImage
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1600&q=85"
              alt="Dahabiya sailing boat on the Nile at sunset"
              className="w-full h-full object-cover"
              overlayScrim={true}
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F5C542] font-semibold block mb-2">
                Flagship Private Charter
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] mb-4 leading-tight">
                The Dahabiya Nefertiti
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD9D2] leading-relaxed font-light mb-6">
                A 48-meter twin-masted wooden sailing vessel built to the highest contemporary maritime specifications. Accommodating a maximum of 12 privileged guests across 6 river-view suites.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#CCC6BC]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#49BCE8]" />
                  <span>Teak panoramic sun deck with daybeds and canvas sail canopies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#49BCE8]" />
                  <span>Personal executive chef preparing seasonal Upper Egyptian banquets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#49BCE8]" />
                  <span>Private shore clearances at Gebel el-Silsila and Esna</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2826] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#88837A] block">Private Charter Rate</span>
                <span className="font-serif text-2xl font-medium text-[#FAF9F6] tabular-nums">$2,450</span>
                <span className="text-xs text-[#88837A]"> / night</span>
              </div>
              <button
                onClick={onInquireCharter}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#222222] bg-[#FAF9F6] hover:bg-[#F5C542] transition-colors rounded-xs"
              >
                Inquire Charter
              </button>
            </div>
          </div>
        </div>

        {/* Vessel Architecture Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#49BCE8] font-semibold mb-2">
                <Wind className="w-4 h-4" />
                <span>Slow Luxury · The Private Dahabiya</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-3">
                Twin-Masted Sail Sailing
              </h3>
              <p className="text-xs leading-relaxed text-[#66625D] font-light mb-4">
                Designed for families and private parties seeking absolute privacy and quiet. No engines hum while sailing; the vessel relies on wind or a discreet support tug positioned 50 meters away. Mooring occurs exclusively at pristine uninhabited river islands with candlelit sandbar dinners.
              </p>
              <div className="text-xs text-[#222222] space-y-1 font-medium">
                <div>Capacity: 6 to 12 Guests</div>
                <div>Crew Ratio: 2.5 staff members per guest</div>
                <div>Itineraries: 4 Nights (Aswan to Luxor) or 5 Nights (Luxor to Aswan)</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EAE4DC]">
              <span className="text-xs text-[#888580] italic">Ideal for: Discerning families, collectors, honeymooners</span>
            </div>
          </div>

          <div className="p-8 bg-[#F5F2EB] border border-[#E4DCD3] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5C542] font-semibold mb-2">
                <Anchor className="w-4 h-4" />
                <span>Historic Grandeur · The Boutique River Ship</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222222] mb-3">
                Victorian Steam Heritage
              </h3>
              <p className="text-xs leading-relaxed text-[#66625D] font-light mb-4">
                Featuring Belle Époque brass detailing, mahogany library salons, and plunge pools on the shaded upper deck. Designed for travelers who desire the social elegance of historic grand hotels coupled with personal archaeologist guides for shore visits.
              </p>
              <div className="text-xs text-[#222222] space-y-1 font-medium">
                <div>Capacity: 16 to 24 Suites</div>
                <div>Facilities: Library, Plunge pool, Spa treatment room</div>
                <div>Itineraries: 7 Nights Grand Nile Expedition</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EAE4DC]">
              <span className="text-xs text-[#888580] italic">Ideal for: Cultural societies, architectural enthusiasts</span>
            </div>
          </div>
        </div>

        {/* Curated Nile Cruise Tours */}
        <div className="pt-12 border-t border-[#E4DCD3]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-1">
              Scheduled Expeditions
            </span>
            <h2 className="font-serif text-3xl text-[#222222]">
              Curated Nile River Itineraries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nileTours.map((tour) => (
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
