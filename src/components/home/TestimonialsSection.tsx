import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types/travel';
import { SectionHeading } from '../ui/SectionHeading';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex] || testimonials[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#E4DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="06"
            category="Traveler Monographs"
            title="Voices of the Journey"
            subtitle="Reflections from patrons, curators, and collectors who have experienced Egypt in total privacy."
          />

          {/* Pagination controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto mb-4">
            <button
              onClick={handlePrev}
              className="p-3 border border-[#E4DCD3] hover:border-[#222222] text-[#222222] transition-colors rounded-xs focus:outline-hidden"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#888580] px-2 tabular-nums">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 border border-[#E4DCD3] hover:border-[#222222] text-[#222222] transition-colors rounded-xs focus:outline-hidden"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Pull-Quote Presentation */}
        <div className="p-8 sm:p-14 bg-[#F5F2EB] border border-[#E4DCD3] relative">
          <Quote className="w-10 h-10 text-[#49BCE8]/40 mb-6" />

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#222222] font-normal leading-[1.3] mb-8 italic">
            "{current.quote}"
          </blockquote>

          <div className="pt-6 border-t border-[#EAE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-serif text-lg text-[#222222] font-medium">
                {current.clientName}
              </div>
              <div className="text-xs text-[#66625D]">
                {current.clientTitle} · {current.country}
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#888580] block">Journey Undertaken</span>
              <span className="text-xs text-[#222222] font-medium">{current.tourTaken}</span>
              <span className="text-[11px] text-[#888580] block">Completed in {current.year}</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#EAE4DC]/60 flex items-center justify-between text-[11px] text-[#888580]">
            <span>Editorial Sample Monograph · Verified Guest Testimonial Placeholder</span>
            <span>Palma Travel Concierge Archives</span>
          </div>
        </div>

      </div>
    </section>
  );
};
