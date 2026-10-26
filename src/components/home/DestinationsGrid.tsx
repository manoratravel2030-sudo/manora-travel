import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Destination, Region } from '../../types/travel';
import { DestinationCard } from '../ui/DestinationCard';
import { SectionHeading } from '../ui/SectionHeading';

interface DestinationsGridProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onViewAllDestinations: () => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  destinations,
  onSelectDestination,
  onViewAllDestinations,
}) => {
  const [activeRegion, setActiveRegion] = useState<Region | 'All'>('All');

  const regions: (Region | 'All')[] = [
    'All',
    'Upper Egypt',
    'Lower Egypt & Delta',
    'Red Sea Riviera',
    'Western Desert & Oases',
    'Sinai Peninsula',
  ];

  const filteredDestinations = activeRegion === 'All'
    ? destinations
    : destinations.filter(d => d.region === activeRegion);

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="01"
            category="The Egyptian Panorama"
            title="Discover Egypt: Twelve Sacred Lands"
            subtitle="From the grand sandstone hypostyles of Upper Egypt to the sapphire atolls of the Red Sea and mystical Western Desert oases."
          />

          <button
            onClick={onViewAllDestinations}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#222222] hover:text-[#49BCE8] pb-1 border-b border-[#222222] hover:border-[#49BCE8] transition-colors self-start md:self-auto shrink-0 mb-4"
          >
            <span>Explore All 12 Destinations</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Region Filter Segmented Tabs (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {regions.map((region) => {
            const isSelected = activeRegion === region;
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 text-xs font-medium tracking-wider whitespace-nowrap shrink-0 transition-all rounded-xs border cursor-pointer ${
                  isSelected
                    ? 'bg-[#222222] text-white border-[#222222]'
                    : 'bg-transparent text-[#66625D] border-[#E4DCD3] hover:border-[#222222] hover:text-[#222222]'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>

        {/* Unconventional Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
