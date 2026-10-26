import React from 'react';

interface SectionHeadingProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  light = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {/* Clean unboxed editorial kicker with optional chapter index */}
      {(number || category) && (
        <div className={`flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-medium ${
          light ? 'text-[#49BCE8]' : 'text-[#888580]'
        } ${isCentered ? 'justify-center' : ''}`}>
          {number && <span className="font-sans text-[#49BCE8]">{number}</span>}
          {number && category && <span aria-hidden="true" className="text-[#CCC6BC]">·</span>}
          {category && <span>{category}</span>}
        </div>
      )}

      {/* Main High-Contrast Display Headline */}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight ${
          light ? 'text-[#FAF9F6]' : 'text-[#222222]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>

      {/* Editorial Descriptive Deck */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            light ? 'text-[#DDD9D2]' : 'text-[#55524E]'
          } ${isCentered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
