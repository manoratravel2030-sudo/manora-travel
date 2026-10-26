import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { Destination } from '../../types/travel';
import { EditorialImage } from './EditorialImage';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  tourCount?: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
  tourCount = 5,
}) => {
  return (
    <article
      onClick={() => onSelect(destination)}
      className="group relative cursor-pointer overflow-hidden border border-[#E4DCD3] bg-[#FAF9F6] transition-all duration-500 hover:border-[#222222]/50 hover:shadow-lg flex flex-col justify-between"
    >
      {/* High-res Image with Scrim */}
      <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden">
        <EditorialImage
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Measured Scrim for typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:via-black/50 transition-all duration-300" />

        {/* Region & Coordinates Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs tracking-wider uppercase font-medium">
          <span className="text-[#49BCE8] drop-shadow-xs">{destination.region}</span>
          <span className="text-[10px] text-white/70 font-mono tracking-widest hidden sm:inline">
            {destination.coordinates}
          </span>
        </div>

        {/* Bottom Editorial Content */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-baseline justify-between mb-1.5">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] tracking-wide leading-none">
              {destination.name}
            </h3>
            <span className="font-['Amiri',serif] text-xl text-[#F5C542]/90 opacity-90 tracking-normal" dir="rtl">
              {destination.arabicName}
            </span>
          </div>

          <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light mb-3">
            {destination.tagline}
          </p>

          <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
            <span className="text-[11px] uppercase tracking-wider text-white/70">
              {tourCount} Curated Expeditions
            </span>
            <span className="flex items-center gap-1 text-[#49BCE8] group-hover:translate-x-0.5 transition-transform font-medium">
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
