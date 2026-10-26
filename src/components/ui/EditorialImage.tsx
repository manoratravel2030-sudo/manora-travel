import React, { useState } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | '21/9' | 'auto';
  caption?: string;
  overlayScrim?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt = 'Palma Travel Editorial Photography',
  className = '',
  aspectRatio = 'auto',
  caption,
  overlayScrim = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-4/3',
    '3/4': 'aspect-3/4',
    '1/1': 'aspect-square',
    '21/9': 'aspect-21/9',
    'auto': '',
  }[aspectRatio];

  return (
    <figure className={`relative overflow-hidden bg-[#EAE4DC] ${aspectClass} ${className}`}>
      {/* Subtle architectural placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E5DFD5] animate-pulse" />
      )}

      {hasError ? (
        // Resilient, elegant fallback surface (Zero Broken Image Guarantee)
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F2EEE9] border border-[#E4DCD3] text-[#55524E]">
          <div className="w-10 h-10 mb-3 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#49BCE8]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </div>
          <span className="font-serif text-base tracking-wide text-[#222222] italic">{alt}</span>
          <span className="text-[11px] tracking-widest uppercase text-[#888580] mt-1">Palma Travel Photographic Archive</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      )}

      {/* Measured Scrim for media overlay text legibility */}
      {overlayScrim && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      )}

      {caption && (
        <figcaption className="text-xs font-serif text-[#78716C] italic mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
