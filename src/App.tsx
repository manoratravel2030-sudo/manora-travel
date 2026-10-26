/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DESTINATIONS } from './data/destinations';
import { TOURS } from './data/tours';
import { TESTIMONIALS } from './data/testimonials';
import { Destination, Tour } from './types/travel';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';

import { HomeView } from './views/HomeView';
import { DestinationsView } from './views/DestinationsView';
import { DestinationDetailView } from './views/DestinationDetailView';
import { ExperiencesView } from './views/ExperiencesView';
import { TourDetailView } from './views/TourDetailView';
import { NileCruisesView } from './views/NileCruisesView';
import { HotAirBalloonView } from './views/HotAirBalloonView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { TailorMadeView } from './views/TailorMadeView';

export type ViewState =
  | 'home'
  | 'destinations'
  | 'destination-detail'
  | 'experiences'
  | 'tour-detail'
  | 'nile-cruises'
  | 'hot-air-balloon'
  | 'about'
  | 'contact'
  | 'tailor-made';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination>(DESTINATIONS[0]);
  const [selectedTour, setSelectedTour] = useState<Tour>(TOURS[0]);
  const [bookingTour, setBookingTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: string, payload?: any) => {
    if (view === 'destination-detail' && payload) {
      setSelectedDestination(payload);
    } else if (view === 'tour-detail' && payload) {
      setSelectedTour(payload);
    }
    setCurrentView(view as ViewState);
  };

  const handleSelectTour = (tour: Tour) => {
    setSelectedTour(tour);
    setCurrentView('tour-detail');
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setCurrentView('destination-detail');
  };

  const handleOpenBooking = (tour: Tour) => {
    setBookingTour(tour);
    setIsBookingOpen(true);
  };

  const nileTours = TOURS.filter(t => t.category === 'Nile Cruise');
  const balloonTour = TOURS.find(t => t.category === 'Hot Air Balloon') || TOURS[0];
  const relatedTours = TOURS.filter(
    t => t.id !== selectedTour.id && (t.destinationId === selectedTour.destinationId || t.category === selectedTour.category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#222222] font-sans antialiased selection:bg-[#49BCE8]/20 selection:text-[#222222]">
      {/* Universal Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            destinations={DESTINATIONS}
            tours={TOURS}
            testimonials={TESTIMONIALS}
            onNavigate={handleNavigate}
            onSelectTour={handleSelectTour}
            onSelectDestination={handleSelectDestination}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationsView
            destinations={DESTINATIONS}
            onSelectDestination={handleSelectDestination}
          />
        )}

        {currentView === 'destination-detail' && (
          <DestinationDetailView
            destination={selectedDestination}
            tours={TOURS}
            onBack={() => setCurrentView('destinations')}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'experiences' && (
          <ExperiencesView
            tours={TOURS}
            destinations={DESTINATIONS}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'tour-detail' && (
          <TourDetailView
            tour={selectedTour}
            relatedTours={relatedTours}
            onBack={() => setCurrentView('experiences')}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'nile-cruises' && (
          <NileCruisesView
            nileTours={nileTours}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
            onInquireCharter={() => setCurrentView('tailor-made')}
          />
        )}

        {currentView === 'hot-air-balloon' && (
          <HotAirBalloonView
            balloonTour={balloonTour}
            onBookFlight={handleOpenBooking}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onPlanTrip={() => setCurrentView('tailor-made')}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}

        {currentView === 'tailor-made' && (
          <TailorMadeView
            destinations={DESTINATIONS}
            onNavigateHome={() => setCurrentView('home')}
          />
        )}
      </main>

      {/* Interactive Global Booking Modal */}
      <BookingModal
        tour={bookingTour}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Universal Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
