import { Tour, TourCategory } from '../types/travel';

export interface PriceCalculationParams {
  basePriceUSD: number;
  guestCount: number;
  tier: 'Private Bespoke' | 'Royal Heritage Suite' | 'Standard VIP';
  includePrivateEgyptologist?: boolean;
}

export interface TourFilterOptions {
  category?: TourCategory | 'All';
  destinationId?: string | 'All';
  maxPrice?: number;
  searchQuery?: string;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'duration';
}

/**
 * Calculates real-time booking price for luxury travel reservations
 */
export function calculateTourPrice(params: PriceCalculationParams): {
  perPersonUSD: number;
  totalUSD: number;
  tierMultiplier: number;
  guideSurcharge: number;
} {
  const { basePriceUSD, guestCount, tier, includePrivateEgyptologist = true } = params;
  
  if (guestCount <= 0) {
    return { perPersonUSD: basePriceUSD, totalUSD: basePriceUSD, tierMultiplier: 1, guideSurcharge: 0 };
  }

  let tierMultiplier = 1;
  if (tier === 'Private Bespoke') {
    tierMultiplier = 1.35;
  } else if (tier === 'Royal Heritage Suite') {
    tierMultiplier = 1.85;
  }

  // Small group volume efficiency: 1-2 guests have higher per-person private vehicle overhead
  let volumeRatio = 1.0;
  if (guestCount === 1) {
    volumeRatio = 1.25; // Solo private luxury supplement
  } else if (guestCount >= 4) {
    volumeRatio = 0.90; // Family/private party efficiency
  }

  const guideSurcharge = includePrivateEgyptologist ? 80 : 0;
  const perPersonUSD = Math.round(basePriceUSD * tierMultiplier * volumeRatio);
  const totalUSD = (perPersonUSD * guestCount) + guideSurcharge;

  return {
    perPersonUSD,
    totalUSD,
    tierMultiplier,
    guideSurcharge,
  };
}

/**
 * Estimates custom bespoke itinerary budget
 */
export function estimateCustomItinerary(params: {
  days: number;
  travelerCount: number;
  tierPerDayUSD: number;
}): {
  estimatedTotalUSD: number;
  perPersonEstimateUSD: number;
} {
  const { days, travelerCount, tierPerDayUSD } = params;
  const safeDays = Math.max(1, days);
  const safeTravelers = Math.max(1, travelerCount);
  const perPersonEstimateUSD = safeDays * tierPerDayUSD;
  const estimatedTotalUSD = perPersonEstimateUSD * safeTravelers;

  return {
    estimatedTotalUSD,
    perPersonEstimateUSD,
  };
}

/**
 * Generates an authoritative luxury booking voucher reference code
 * Example: PLM-2026-8742
 */
export function generateBookingReference(prefix: string = 'PLM'): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${randomSuffix}`;
}

/**
 * Validates booking inquiry submission
 */
export function validateBookingForm(data: {
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  guestCount: number;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name as shown on your passport.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid concierge email address.';
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please provide a contact phone or WhatsApp number with country code.';
  }

  if (!data.travelDate) {
    errors.travelDate = 'Please select your preferred commencement date.';
  }

  if (!data.guestCount || data.guestCount < 1 || data.guestCount > 30) {
    errors.guestCount = 'Travel party must be between 1 and 30 guests.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters and sorts tours cleanly
 */
export function filterTours(tours: Tour[], options: TourFilterOptions): Tour[] {
  let result = [...tours];

  if (options.destinationId && options.destinationId !== 'All') {
    result = result.filter(t => t.destinationId === options.destinationId);
  }

  if (options.category && options.category !== 'All') {
    result = result.filter(t => t.category === options.category);
  }

  if (options.maxPrice && options.maxPrice > 0) {
    result = result.filter(t => t.priceFromUSD <= options.maxPrice!);
  }

  if (options.searchQuery && options.searchQuery.trim().length > 0) {
    const q = options.searchQuery.toLowerCase().trim();
    result = result.filter(
      t =>
        t.title.toLowerCase().includes(q) ||
        t.destinationName.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.overview.toLowerCase().includes(q)
    );
  }

  if (options.sortBy) {
    switch (options.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.priceFromUSD - b.priceFromUSD);
        break;
      case 'price-desc':
        result.sort((a, b) => b.priceFromUSD - a.priceFromUSD);
        break;
      case 'duration':
        result.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }
  }

  return result;
}
