import React, { useState } from 'react';
import { Search, MapPin, ArrowUpRight } from 'lucide-react';
import { Destination, Region } from '../types/travel';
import { DestinationCard } from '../components/ui/DestinationCard';
import { SectionHeading } from '../components/ui/SectionHeading';

interface DestinationsViewProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  destinations,
  onSelectDestination,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [search, setSearch] = useState('');

  const regions: (Region | 'All')[] = [
    'All',
    'Upper Egypt',
    'Lower Egypt & Delta',
    'Red Sea Riviera',
    'Western Desert & Oases',
    'Sinai Peninsula',
  ];

  const filtered = destinations.filter((d) => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesSearch =
      search.trim() === '' ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.tagline.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>Geographical Compendium</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>Twelve Egyptian Enclaves</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            All Destinations
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            Each Egyptian landscape possesses its own cadence, archaeology, and light. Explore our comprehensive collection of twelve sacred destinations across Upper Egypt, Lower Egypt, the Red Sea, the Western Desert, and the Sinai.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 pb-6 border-b border-[#E4DCD3] flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {regions.map((region) => {
              const isSelected = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
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

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#888580] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#222222]"
            />
          </div>
        </div>

        {/* Results Count & Grid */}
        <div className="mb-6 text-xs text-[#888580] uppercase tracking-wider">
          Showing {filtered.length} of {destinations.length} Destinations
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center bg-[#F5F2EB] border border-[#E4DCD3]">
            <p className="font-serif text-2xl text-[#222222] mb-2">No destinations match your search.</p>
            <p className="text-xs text-[#66625D]">Try selecting 'All' regions or clearing the search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={onSelectDestination}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
