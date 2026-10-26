import React from 'react';
import { ArrowUpRight, ShieldCheck, Sun, Clock, Compass, Award, Check } from 'lucide-react';
import { Tour } from '../types/travel';
import { EditorialImage } from '../components/ui/EditorialImage';

interface HotAirBalloonViewProps {
  balloonTour: Tour;
  onBookFlight: (tour: Tour) => void;
}

export const HotAirBalloonView: React.FC<HotAirBalloonViewProps> = ({
  balloonTour,
  onBookFlight,
}) => {
  const flightTiers = [
    {
      name: 'Classic Royal Flight',
      capacity: 'Max 12 Guests per compartment',
      priceUSD: 180,
      description: 'The definitive sunrise flight. Shared luxury compartment with high safety partitions, expert flight captain narration, and full commemorative credentials.',
      perks: ['Pre-flight Nile launch with espresso', '45–60 minute flight', 'Flight certificate signed by pilot', 'Round-trip hotel transfers'],
    },
    {
      name: 'Deluxe Small Group',
      capacity: 'Curated Max 6 Guests',
      priceUSD: 290,
      description: 'Enhanced space and 360-degree photography angles. High-altitude flight with dedicated flight photographer capturing personal aerial portraits.',
      perks: ['All Classic perks included', 'Guaranteed corner basket positioning', 'Personal digital aerial photo package', 'Moët & Chandon post-flight toast'],
    },
    {
      name: 'Exclusive VIP Private Basket',
      capacity: 'Private Charter (1–4 Guests)',
      priceUSD: 950,
      description: 'The basket is exclusively chartered for your private party. Total romantic privacy or intimate family celebration soaring over the mortuary temples.',
      perks: ['Private basket exclusively for your group', 'Private Mercedes-Maybach ground transfers', 'Caviar & champagne breakfast upon landing', 'Custom flight route based on morning winds'],
    },
  ];

  const timeline = [
    { time: '04:15 AM', label: 'Private Hotel Pickup', desc: 'Chauffeured pickup from your Luxor hotel or private Dahabiya dock.' },
    { time: '04:45 AM', label: 'Private Nile Crossing', desc: 'Board our private mahogany motor launch with freshly brewed espresso, Egyptian mint tea, and artisan date pastries.' },
    { time: '05:15 AM', label: 'Inflation & Safety Briefing', desc: 'Meet your flight master at the West Bank private launch field for the civil aviation safety review.' },
    { time: '05:35 AM', label: 'Sunrise Lift-off', desc: 'Ascend into the golden thermals as dawn illuminates Queen Hatshepsut’s temple and the limestone peaks of Thebes.' },
    { time: '06:30 AM', label: 'Gentle Touchdown & Ceremony', desc: 'Touch down in the sugar cane plains; enjoy the traditional ceremonial champagne toast and receive your flight credential.' },
    { time: '07:30 AM', label: 'Return Transfer', desc: 'Private transfer back to your accommodation in time for full breakfast.' },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>The Theban Skies</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>Luxor West Bank</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Sunrise Hot Air Balloon Expeditions
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            Drifting silently above the Valley of the Kings as the sun breaks over the sacred Nile is widely considered one of the world’s most transcendent aerial journeys. We operate the premier luxury flight service in Luxor.
          </p>
        </div>

        {/* Marquee Visual Hero */}
        <div className="mb-16 relative aspect-16/9 md:aspect-21/9 overflow-hidden border border-[#E4DCD3] shadow-lg">
          <EditorialImage
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85"
            alt="Hot air balloons floating above Luxor West Bank mortuary temples at sunrise"
            className="w-full h-full object-cover"
            overlayScrim={true}
          />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#F5C542] font-semibold block mb-2">
              Egyptian Civil Aviation Authority Licensed Operator
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#FAF9F6] leading-snug">
              "To see Hatshepsut from 1,500 feet in the early morning stillness is an encounter with eternity."
            </p>
          </div>
        </div>

        {/* Flight Tiers */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-2">
              Flight Packages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222]">
              Choose Your Sunrise Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flightTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 bg-[#F5F2EB] border border-[#E4DCD3] flex flex-col justify-between hover:border-[#222222]/50 transition-all"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#49BCE8] font-semibold block mb-1">
                    {tier.capacity}
                  </span>
                  <h3 className="font-serif text-2xl text-[#222222] mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#66625D] leading-relaxed font-light mb-6">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 pb-6 border-b border-[#EAE4DC] text-xs text-[#55524E]">
                    {tier.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#49BCE8] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Rate</span>
                    <span className="font-serif text-3xl text-[#222222] font-medium tabular-nums">
                      ${tier.priceUSD}
                    </span>
                    <span className="text-xs text-[#888580]"> / guest</span>
                  </div>

                  <button
                    onClick={() => onBookFlight(balloonTour)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] transition-colors rounded-xs shadow-xs"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dawn Timeline Choreography */}
        <div className="p-8 sm:p-12 bg-[#F2EEE9] border border-[#E4DCD3] mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#888580] font-semibold block mb-1">
              Choreographed Protocol
            </span>
            <h2 className="font-serif text-3xl text-[#222222]">
              The Sunrise Flight Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((step, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E4DCD3]">
                <span className="font-mono text-xs font-bold text-[#49BCE8] block mb-1">
                  {step.time}
                </span>
                <h4 className="font-serif text-lg text-[#222222] mb-1.5">
                  {step.label}
                </h4>
                <p className="text-xs text-[#66625D] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Aviation Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#E4DCD3] text-xs text-[#55524E]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#49BCE8] shrink-0" />
            <div>
              <strong className="text-[#222222] block font-semibold mb-1">Pilot Credentials</strong>
              <span>Pilots have minimum 1,500 commercial flight hours and European EASA certifications.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sun className="w-6 h-6 text-[#F5C542] shrink-0" />
            <div>
              <strong className="text-[#222222] block font-semibold mb-1">Weather Clearance</strong>
              <span>Daily flight clearances issued by Egyptian Meteorological Authority at 04:00 AM.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-[#49BCE8] shrink-0" />
            <div>
              <strong className="text-[#222222] block font-semibold mb-1">Fleet Maintenance</strong>
              <span>New generation UltraMagic and Cameron balloons inspected bi-monthly.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
