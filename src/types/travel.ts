export type Region = 
  | 'Upper Egypt' 
  | 'Lower Egypt & Delta' 
  | 'Red Sea Riviera' 
  | 'Western Desert & Oases' 
  | 'Sinai Peninsula';

export type TourCategory = 
  | 'Hot Air Balloon' 
  | 'Nile Cruise' 
  | 'Luxor Private Tours' 
  | 'Aswan Experiences' 
  | 'Red Sea Adventures' 
  | 'Desert Safari' 
  | 'Historical Egypt' 
  | 'Luxury Private Journeys';

export type TravelStyle = 
  | 'Private Dahabiya & Waterways' 
  | 'Archaeological Scholar Expedition' 
  | 'Royal Nile & Desert Luxury' 
  | 'Red Sea Wellness & Coastal Retreat' 
  | 'Family Heritage Odyssey';

export interface Destination {
  id: string;
  name: string;
  arabicName: string;
  region: Region;
  tagline: string;
  description: string;
  curatorNote: string;
  bestTimeToVisit: string;
  averageTemp: string;
  coordinates: string;
  heroImage: string;
  secondaryImage: string;
  highlights: string[];
  travelTips: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  meals: string;
  stay: string;
}

export interface Tour {
  id: string;
  slug: string;
  destinationId: string;
  destinationName: string;
  title: string;
  subtitle: string;
  category: TourCategory;
  duration: string;
  durationDays: number;
  groupType: 'Exclusive Private' | 'Curated Small Group (Max 8)' | 'Private Charter';
  priceFromUSD: number;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  physicalDemand: 'Gentle & Relaxed' | 'Moderate Exploration' | 'Active Adventure' | string;
  meetingPoint: string;
  departureTime: string;
  languages: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  country: string;
  tourTaken: string;
  year: string;
  avatarImage?: string;
}

export interface BookingSubmission {
  referenceNumber: string;
  tourId: string;
  tourTitle: string;
  destinationName: string;
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  guestCount: number;
  tier: 'Private Bespoke' | 'Royal Heritage Suite' | 'Standard VIP';
  guideLanguage: string;
  hotelPickupLocation: string;
  specialRequests?: string;
  calculatedTotalUSD: number;
  submittedAt: string;
}

export interface CustomItinerarySubmission {
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  selectedDestinations: string[];
  travelStyle: TravelStyle;
  estimatedDays: number;
  travelMonth: string;
  travelerCount: number;
  budgetPerPersonUSD: string;
  specificInterests: string[];
  notes: string;
  submittedAt: string;
}
