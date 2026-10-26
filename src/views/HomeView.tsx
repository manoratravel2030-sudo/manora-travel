import React from 'react';
import { Destination, Tour, Testimonial } from '../types/travel';
import { Hero } from '../components/home/Hero';
import { DestinationsGrid } from '../components/home/DestinationsGrid';
import { SignatureExperiences } from '../components/home/SignatureExperiences';
import { NileCruiseSection } from '../components/home/NileCruiseSection';
import { HotAirBalloonSection } from '../components/home/HotAirBalloonSection';
import { WhyPalma } from '../components/home/WhyPalma';
import { TailorMadeBanner } from '../components/home/TailorMadeBanner';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomeViewProps {
  destinations: Destination[];
  tours: Tour[];
  testimonials: Testimonial[];
  onNavigate: (view: string, payload?: any) => void;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onOpenBooking: (tour: Tour) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  destinations,
  tours,
  testimonials,
  onNavigate,
  onSelectTour,
  onSelectDestination,
  onOpenBooking,
}) => {
  const balloonTour = tours.find(t => t.id === 'lux-01') || tours[0];

  return (
    <div>
      {/* 1. Cinematic Hero */}
      <Hero
        onExploreClick={() => onNavigate('experiences')}
        onBespokeClick={() => onNavigate('tailor-made')}
      />

      {/* 2. Discover Egypt: The 12 Destinations Showcase */}
      <DestinationsGrid
        destinations={destinations}
        onSelectDestination={onSelectDestination}
        onViewAllDestinations={() => onNavigate('destinations')}
      />

      {/* 3. Signature Experiences: Editorial presentation */}
      <SignatureExperiences
        tours={tours}
        onSelectTour={onSelectTour}
        onViewAllExperiences={() => onNavigate('experiences')}
      />

      {/* 4. Nile Cruise Showcase */}
      <NileCruiseSection
        onExploreCruises={() => onNavigate('nile-cruises')}
        onCharterInquiry={() => onNavigate('tailor-made')}
      />

      {/* 5. Hot Air Balloon Experience */}
      <HotAirBalloonSection
        onBookBalloon={() => onOpenBooking(balloonTour)}
        onViewBalloonDetails={() => onNavigate('hot-air-balloon')}
      />

      {/* 6. Why Travel With Palma */}
      <WhyPalma />

      {/* 7. Tailor-Made Journeys Invitation */}
      <TailorMadeBanner
        onStartCustomItinerary={() => onNavigate('tailor-made')}
      />

      {/* 8. Editorial Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
      />

      {/* 9. Final CTA */}
      <FinalCTA
        onPlanTrip={() => onNavigate('tailor-made')}
        onContactConcierge={() => onNavigate('contact')}
      />
    </div>
  );
};
