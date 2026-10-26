import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyPalma: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Sovereign Antiquities Clearances',
      description: 'Through our official protocols with the Ministry of Tourism and Antiquities, our guests step between the paws of the Great Sphinx and unlock Queen Nefertari’s royal tomb long after public closure.',
    },
    {
      index: '02',
      title: 'Curatorial Egyptologists',
      description: 'We do not employ generic tour guides. Every Palma expedition is accompanied by published Egyptologists and academic researchers who translate hieroglyphs and illuminate context in real time.',
    },
    {
      index: '03',
      title: 'Discreet Private Logistics',
      description: 'From VIP private jet tarmac handling at Cairo and Luxor airports to dedicated Mercedes-Maybach and V-Class transfers, your travel is seamless, private, and utterly unhurried.',
    },
    {
      index: '04',
      title: 'Heritage Stewardship',
      description: 'A portion of each expedition directly subsidizes independent preservation efforts in Upper Egypt and supports generational artisan guilds in Siwa Oasis and Old Cairo.',
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EB] border-b border-[#E4DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="The Palma Standard"
          title="Why Discerning Travelers Choose Palma"
          subtitle="A philosophy rooted in intellectual depth, quiet luxury, and extraordinary access across Egypt."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-8 bg-[#FAF9F6] border border-[#E4DCD3] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#49BCE8] block mb-4">
                  {pillar.index}
                </span>
                <h3 className="font-serif text-xl text-[#222222] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#66625D] font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EAE4DC] flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#888580]">
                <span>Palma Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
