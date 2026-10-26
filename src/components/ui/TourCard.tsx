import React from 'react';
import { ArrowUpRight, Clock, Star } from 'lucide-react';
import { Tour } from '../../types/travel';
import { EditorialImage } from './EditorialImage';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onQuickBook?: (tour: Tour) => void;
  variant?: 'standard' | 'horizontal' | 'featured';
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onSelect,
  onQuickBook,
  variant = 'standard',
}) => {
  if (variant === 'horizontal') {
    return (
      <div className="group bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222]/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        <div className="md:col-span-5 relative aspect-16/9 md:aspect-auto overflow-hidden">
          <EditorialImage
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Unboxed Metadata Discipline */}
            <div className="flex items-center gap-2 text-xs text-[#888580] tracking-wider uppercase mb-2">
              <span className="text-[#49BCE8] font-medium">{tour.destinationName}</span>
              <span aria-hidden="true">·</span>
              <span>{tour.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#A8A29E]" />
                <span>{tour.duration}</span>
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] group-hover:text-[#49BCE8] transition-colors leading-tight mb-3">
              {tour.title}
            </h3>

            <p className="text-sm text-[#66625D] line-clamp-2 leading-relaxed mb-4 font-light">
              {tour.overview}
            </p>
          </div>

          <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#888580] block">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl font-medium text-[#222222] tabular-nums">
                  ${tour.priceFromUSD}
                </span>
                <span className="text-xs text-[#888580]">/ guest</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelect(tour)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#222222] hover:text-[#49BCE8] transition-colors"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              {onQuickBook && (
                <button
                  onClick={() => onQuickBook(tour)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] rounded-xs transition-colors shadow-xs"
                >
                  Reserve
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* High-res Image with subtle zoom */}
        <div className="relative aspect-4/3 overflow-hidden cursor-pointer" onClick={() => onSelect(tour)}>
          <EditorialImage
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {tour.isBestseller && (
            <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 backdrop-blur-xs text-[#222222] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-[#E4DCD3]">
              Curator Selected
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Clean Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center gap-2 text-[11px] text-[#888580] tracking-wider uppercase mb-2">
            <span className="text-[#49BCE8] font-medium">{tour.destinationName}</span>
            <span aria-hidden="true">·</span>
            <span>{tour.category}</span>
          </div>

          <h3
            onClick={() => onSelect(tour)}
            className="font-serif text-xl sm:text-2xl text-[#222222] group-hover:text-[#49BCE8] transition-colors leading-snug cursor-pointer mb-2.5"
          >
            {tour.title}
          </h3>

          <p className="text-xs text-[#66625D] line-clamp-2 leading-relaxed mb-4 font-light">
            {tour.subtitle}
          </p>

          <div className="flex items-center gap-4 text-xs text-[#888580] pb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
              <span>{tour.duration}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#F5C542] fill-[#F5C542]" />
              <span className="tabular-nums font-medium text-[#222222]">{tour.rating}</span>
              <span>({tour.reviewCount})</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-[#EAE4DC] flex items-center justify-between bg-[#FBF9F5]">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#888580] block">From</span>
          <span className="font-serif text-xl font-medium text-[#222222] tabular-nums">
            ${tour.priceFromUSD}
          </span>
          <span className="text-[11px] text-[#888580]"> / guest</span>
        </div>

        <button
          onClick={() => onSelect(tour)}
          className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-[#222222] group-hover:text-[#49BCE8] transition-colors"
        >
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
