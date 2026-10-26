import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateTourPrice,
  estimateCustomItinerary,
  generateBookingReference,
  validateBookingForm,
  filterTours,
} from './bookingEngine';
import { Tour } from '../types/travel';

test('calculateTourPrice computes luxury tier pricing correctly', () => {
  // Base test for 2 guests in Standard VIP
  const standard = calculateTourPrice({
    basePriceUSD: 200,
    guestCount: 2,
    tier: 'Standard VIP',
    includePrivateEgyptologist: false,
  });
  assert.equal(standard.perPersonUSD, 200);
  assert.equal(standard.totalUSD, 400);

  // Private Bespoke tier (1.35 multiplier) with Private Egyptologist (+$80)
  const bespoke = calculateTourPrice({
    basePriceUSD: 200,
    guestCount: 2,
    tier: 'Private Bespoke',
    includePrivateEgyptologist: true,
  });
  // 200 * 1.35 = 270 per person; 270 * 2 = 540 + 80 = 620
  assert.equal(bespoke.perPersonUSD, 270);
  assert.equal(bespoke.totalUSD, 620);
});

test('estimateCustomItinerary calculates total by days and travelers', () => {
  const estimate = estimateCustomItinerary({
    days: 7,
    travelerCount: 2,
    tierPerDayUSD: 450,
  });
  assert.equal(estimate.perPersonEstimateUSD, 3150);
  assert.equal(estimate.estimatedTotalUSD, 6300);
});

test('generateBookingReference produces expected prefix and format', () => {
  const ref = generateBookingReference('PLM');
  assert.match(ref, /^PLM-\d{4}-\d{4}$/);
});

test('validateBookingForm validates inputs and flags omissions', () => {
  const invalid = validateBookingForm({
    fullName: '',
    email: 'bad-email',
    phone: '',
    travelDate: '',
    guestCount: 0,
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.travelDate);
  assert.ok(invalid.errors.guestCount);

  const valid = validateBookingForm({
    fullName: 'Lady Eleanor Vance',
    email: 'eleanor@vance-travel.co.uk',
    phone: '+44 20 7946 0912',
    travelDate: '2026-11-15',
    guestCount: 2,
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('filterTours filters by destination and search query', () => {
  const mockTours: Tour[] = [
    {
      id: 'tour-1',
      slug: 'luxor-sunrise-balloon',
      destinationId: 'luxor',
      destinationName: 'Luxor',
      title: 'Sunrise Hot Air Balloon Flight',
      subtitle: 'Aerial majesty',
      category: 'Hot Air Balloon',
      duration: '3 Hours',
      durationDays: 1,
      groupType: 'Exclusive Private',
      priceFromUSD: 160,
      rating: 4.95,
      reviewCount: 340,
      isFeatured: true,
      heroImage: '/images/balloon.jpg',
      gallery: [],
      overview: 'Fly over ancient temples',
      highlights: ['Valley of the Kings'],
      itinerary: [],
      inclusions: ['Flight certificate'],
      exclusions: ['Gratuities'],
      physicalDemand: 'Gentle & Relaxed',
      meetingPoint: 'Luxor West Bank launch pad',
      departureTime: '04:30 AM',
      languages: ['English', 'French'],
    },
    {
      id: 'tour-2',
      slug: 'aswan-philae-felucca',
      destinationId: 'aswan',
      destinationName: 'Aswan',
      title: 'Private Felucca Sunset to Philae',
      subtitle: 'Nubian waters',
      category: 'Aswan Experiences',
      duration: '4 Hours',
      durationDays: 1,
      groupType: 'Exclusive Private',
      priceFromUSD: 120,
      rating: 4.9,
      reviewCount: 180,
      isFeatured: false,
      heroImage: '/images/aswan.jpg',
      gallery: [],
      overview: 'Tranquil sail',
      highlights: ['Philae Temple'],
      itinerary: [],
      inclusions: ['Tea service'],
      exclusions: [],
      physicalDemand: 'Gentle & Relaxed',
      meetingPoint: 'Old Cataract Pier',
      departureTime: '03:00 PM',
      languages: ['English'],
    },
  ];

  const filteredByDest = filterTours(mockTours, { destinationId: 'luxor' });
  assert.equal(filteredByDest.length, 1);
  assert.equal(filteredByDest[0].id, 'tour-1');

  const filteredBySearch = filterTours(mockTours, { searchQuery: 'felucca' });
  assert.equal(filteredBySearch.length, 1);
  assert.equal(filteredBySearch[0].id, 'tour-2');
});
