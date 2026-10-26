import React from 'react';
import { ArrowUpRight, Clock, Star, Compass } from 'lucide-react';
import { Tour } from '../../types/travel';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';

interface SignatureExperiencesProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onViewAllExperiences: () => void;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  tours,
  onSelectTour,
  onViewAllExperiences,
}) => {
  // Curate key signature experiences with varied categories
  const balloonTour = tours.find(t => t.id === 'lux-01') || tours[0];
  const dahabiyaTour = tours.find(t => t.id === 'asw-01') || tours[1];
  const sphinxTour = tours.find(t => t.id === 'giz-01') || tours[2];
  const gemTour = tours.find(t => t.id === 'cai-01') || tours[3];
  const siwaTour = tours.find(t => t.id === 'siw-01') || tours[4];
  const redSeaTour = tours.find(t => t.id === 'hur-01') || tours[5];

  return (
    <section className="py-24 bg-[#F5F2EB] border-y border-[#E4DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="02"
            category="Curated Antiquities & Waters"
            title="Signature Experiences: Art-Directed Journeys"
            subtitle="Conceived for curious collectors of memories. Each journey is privately choreographed with senior archaeologists, private captains, and unparalleled regional access."
          />

          <button
            onClick={onViewAllExperiences}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#222222] hover:text-[#49BCE8] pb-1 border-b border-[#222222] hover:border-[#49BCE8] transition-colors self-start md:self-auto shrink-0 mb-4"
          >
            <span>View All Experiences Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Marquee Lead Feature: Sunrise Balloon Flight */}
        <div className="mb-14 bg-[#FAF9F6] border border-[#E4DCD3] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xs">
          <div
            onClick={() => onSelectTour(balloonTour)}
            className="lg:col-span-7 relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto overflow-hidden cursor-pointer"
          >
            <EditorialImage
              src={balloonTour.heroImage}
              alt={balloonTour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#222222] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-semibold px-3 py-1">
              Signature Highlight
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#888580] tracking-widest uppercase mb-3">
                <span className="text-[#49BCE8] font-medium">{balloonTour.destinationName}</span>
                <span aria-hidden="true">·</span>
                <span>{balloonTour.category}</span>
                <span aria-hidden="true">·</span>
                <span>{balloonTour.duration}</span>
              </div>

              <h3
                onClick={() => onSelectTour(balloonTour)}
                className="font-serif text-3xl sm:text-4xl text-[#222222] leading-tight mb-4 cursor-pointer hover:text-[#49BCE8] transition-colors"
              >
                {balloonTour.title}
              </h3>

              <p className="text-sm text-[#66625D] leading-relaxed font-light mb-6">
                {balloonTour.overview}
              </p>

              <div className="space-y-2 mb-8">
                {balloonTour.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#55524E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#49BCE8] mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE4DC] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888580] block">From</span>
                <span className="font-serif text-3xl font-medium text-[#222222] tabular-nums">
                  ${balloonTour.priceFromUSD}
                </span>
                <span className="text-xs text-[#888580]"> / guest</span>
              </div>

              <button
                onClick={() => onSelectTour(balloonTour)}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#161514] active:scale-[0.98] transition-all rounded-xs flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Discover Tour</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C542]" />
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (Varied proportions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Royal Dahabiya Voyage */}
          <div
            onClick={() => onSelectTour(dahabiyaTour)}
            className="group cursor-pointer bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-4/3 overflow-hidden">
                <EditorialImage
                  src={dahabiyaTour.heroImage}
                  alt={dahabiyaTour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#888580] uppercase tracking-wider mb-2">
                  <span className="text-[#49BCE8] font-medium">{dahabiyaTour.destinationName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{dahabiyaTour.category}</span>
                </div>
                <h4 className="font-serif text-2xl text-[#222222] group-hover:text-[#49BCE8] transition-colors leading-snug mb-3">
                  {dahabiyaTour.title}
                </h4>
                <p className="text-xs text-[#66625D] line-clamp-3 leading-relaxed font-light mb-4">
                  {dahabiyaTour.subtitle}
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-8 py-4 border-t border-[#EAE4DC] flex items-center justify-between bg-[#FBF9F5]">
              <div>
                <span className="text-[10px] text-[#888580] uppercase tracking-wider block">From</span>
                <span className="font-serif text-xl font-medium text-[#222222] tabular-nums">${dahabiyaTour.priceFromUSD}</span>
                <span className="text-xs text-[#888580]"> / suite</span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#222222] group-hover:text-[#49BCE8]">
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Sphinx Paws Clearance */}
          <div
            onClick={() => onSelectTour(sphinxTour)}
            className="group cursor-pointer bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-4/3 overflow-hidden">
                <EditorialImage
                  src={sphinxTour.heroImage}
                  alt={sphinxTour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#888580] uppercase tracking-wider mb-2">
                  <span className="text-[#49BCE8] font-medium">{sphinxTour.destinationName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{sphinxTour.category}</span>
                </div>
                <h4 className="font-serif text-2xl text-[#222222] group-hover:text-[#49BCE8] transition-colors leading-snug mb-3">
                  {sphinxTour.title}
                </h4>
                <p className="text-xs text-[#66625D] line-clamp-3 leading-relaxed font-light mb-4">
                  {sphinxTour.subtitle}
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-8 py-4 border-t border-[#EAE4DC] flex items-center justify-between bg-[#FBF9F5]">
              <div>
                <span className="text-[10px] text-[#888580] uppercase tracking-wider block">From</span>
                <span className="font-serif text-xl font-medium text-[#222222] tabular-nums">${sphinxTour.priceFromUSD}</span>
                <span className="text-xs text-[#888580]"> / guest</span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#222222] group-hover:text-[#49BCE8]">
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Siwa Salt Pools & Oasis */}
          <div
            onClick={() => onSelectTour(siwaTour)}
            className="group cursor-pointer bg-[#FAF9F6] border border-[#E4DCD3] hover:border-[#222222]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-4/3 overflow-hidden">
                <EditorialImage
                  src={siwaTour.heroImage}
                  alt={siwaTour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#888580] uppercase tracking-wider mb-2">
                  <span className="text-[#49BCE8] font-medium">{siwaTour.destinationName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{siwaTour.category}</span>
                </div>
                <h4 className="font-serif text-2xl text-[#222222] group-hover:text-[#49BCE8] transition-colors leading-snug mb-3">
                  {siwaTour.title}
                </h4>
                <p className="text-xs text-[#66625D] line-clamp-3 leading-relaxed font-light mb-4">
                  {siwaTour.subtitle}
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-8 py-4 border-t border-[#EAE4DC] flex items-center justify-between bg-[#FBF9F5]">
              <div>
                <span className="text-[10px] text-[#888580] uppercase tracking-wider block">From</span>
                <span className="font-serif text-xl font-medium text-[#222222] tabular-nums">${siwaTour.priceFromUSD}</span>
                <span className="text-xs text-[#888580]"> / guest</span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#222222] group-hover:text-[#49BCE8]">
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
