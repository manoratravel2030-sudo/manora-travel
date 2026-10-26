import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { Tour, TourCategory, Destination } from '../types/travel';
import { filterTours } from '../utils/bookingEngine';
import { TourCard } from '../components/ui/TourCard';

interface ExperiencesViewProps {
  tours: Tour[];
  destinations: Destination[];
  onSelectTour: (tour: Tour) => void;
  onOpenBooking: (tour: Tour) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  tours,
  destinations,
  onSelectTour,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'All'>('All');
  const [selectedDestination, setSelectedDestination] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [search, setSearch] = useState('');
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');

  const categories: (TourCategory | 'All')[] = [
    'All',
    'Hot Air Balloon',
    'Nile Cruise',
    'Luxor Private Tours',
    'Aswan Experiences',
    'Red Sea Adventures',
    'Desert Safari',
    'Historical Egypt',
    'Luxury Private Journeys',
  ];

  const filtered = filterTours(tours, {
    category: selectedCategory,
    destinationId: selectedDestination,
    searchQuery: search,
    sortBy,
  });

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-[#49BCE8] font-medium">
            <span>The Collection</span>
            <span aria-hidden="true" className="text-[#CCC6BC]">·</span>
            <span>All Sixty Curated Journeys</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl text-[#222222] leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            All Experiences
          </h1>
          <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
            Every expedition is private, led by academic specialists, and designed to sidestep the ordinary. Filter by experience discipline, region, or price.
          </p>
        </div>

        {/* Category Horizontal Filter Tabs (Functional buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider whitespace-nowrap shrink-0 transition-all rounded-xs border cursor-pointer ${
                  isSelected
                    ? 'bg-[#222222] text-white border-[#222222]'
                    : 'bg-transparent text-[#66625D] border-[#E4DCD3] hover:border-[#222222] hover:text-[#222222]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Secondary Filters Bar (Search, Destination Dropdown, Sort, View Layout) */}
        <div className="mb-10 p-4 bg-[#F5F2EB] border border-[#E4DCD3] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#888580] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search expeditions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden"
              />
            </div>

            {/* Destination Selector */}
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="px-3 py-1.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#55524E]"
            >
              <option value="All">All Destinations ({destinations.length})</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 text-xs bg-white border border-[#D8D0C5] focus:border-[#49BCE8] focus:outline-hidden text-[#55524E]"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="price-asc">Sort: Price Low to High</option>
              <option value="price-desc">Sort: Price High to Low</option>
              <option value="duration">Sort: Duration</option>
            </select>
          </div>

          {/* Results count & Layout toggle */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#E4DCD3]">
            <span className="text-xs text-[#888580] uppercase tracking-wider">
              {filtered.length} {filtered.length === 1 ? 'Expedition' : 'Expeditions'}
            </span>

            <div className="flex items-center border border-[#D8D0C5] bg-white rounded-xs">
              <button
                onClick={() => setViewLayout('grid')}
                className={`p-1.5 ${viewLayout === 'grid' ? 'bg-[#222222] text-white' : 'text-[#66625D]'}`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewLayout('list')}
                className={`p-1.5 ${viewLayout === 'list' ? 'bg-[#222222] text-white' : 'text-[#66625D]'}`}
                aria-label="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tours Collection Render */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center bg-[#F5F2EB] border border-[#E4DCD3]">
            <p className="font-serif text-2xl text-[#222222] mb-2">No expeditions match your criteria.</p>
            <p className="text-xs text-[#66625D]">Try adjusting your search terms or clearing selected filters.</p>
          </div>
        ) : viewLayout === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onSelect={onSelectTour}
                onQuickBook={onOpenBooking}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                variant="horizontal"
                onSelect={onSelectTour}
                onQuickBook={onOpenBooking}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
