# PALMA TRAVEL — COMPONENT CATALOG & API SPECIFICATION

This document details the modular component architecture of the Palma Travel luxury frontend theme.

---

## 1. UI Components (`/src/components/ui/`)

### `EditorialImage`
- **Path:** `/src/components/ui/EditorialImage.tsx`
- **Purpose:** Resilient, high-fidelity image wrapper with smooth loading animation and zero-broken-image fallback.
- **Props:**
  - `src: string` — Image URL.
  - `alt?: string` — Accessible descriptive label.
  - `aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | '21/9' | 'auto'` — Container geometry.
  - `overlayScrim?: boolean` — Measured dark gradient for text legibility.
  - `caption?: string` — Optional editorial caption underneath.

### `SectionHeading`
- **Path:** `/src/components/ui/SectionHeading.tsx`
- **Purpose:** Consistent, non-mechanical section headers adhering to anti-slop guidelines.
- **Props:**
  - `number?: string` — Natural human chapter index (`01`, `02`).
  - `category?: string` — Curatorial classification.
  - `title: string` — Main display headline (`text-wrap: balance`).
  - `subtitle?: string` — Editorial explanation deck.
  - `align?: 'left' | 'center'` — Layout alignment.
  - `light?: boolean` — Dark-surface variant.

### `TourCard`
- **Path:** `/src/components/ui/TourCard.tsx`
- **Purpose:** Reusable luxury tour presentation card.
- **Variants:**
  - `standard`: Vertical card for 3-column or 4-column grids.
  - `horizontal`: Editorial wide card with split image and itinerary summary.
- **Props:**
  - `tour: Tour` — The structured tour record.
  - `onSelect: (tour: Tour) => void` — Handler for opening tour details.
  - `onQuickBook?: (tour: Tour) => void` — Handler for opening instant booking modal.

### `DestinationCard`
- **Path:** `/src/components/ui/DestinationCard.tsx`
- **Purpose:** High-impact editorial photography card for Egypt's 12 destinations.
- **Props:**
  - `destination: Destination` — Structured destination record with coordinates and Arabic name.
  - `onSelect: (dest: Destination) => void` — Opens dedicated destination detail view.
  - `tourCount?: number` — Count of curated expeditions available.

---

## 2. Layout Components (`/src/components/layout/`)

### `Navbar`
- **Path:** `/src/components/layout/Navbar.tsx`
- **Contract:** Adheres to the strict 3-zone Top Bar Contract:
  - Zone 1: Single text element wordmark (`PALMA TRAVEL`).
  - Zone 2: Single-line text navigation links (`Destinations`, `Experiences`, `Nile Cruises`, `Hot Air Balloon`, `About Us`, `Contact`).
  - Zone 3: Exactly 1 primary CTA (`Tailor-Made Journey`).
  - Mobile: Full-screen luxury drawer with phone hotline, WhatsApp, and navigation.

### `Footer`
- **Path:** `/src/components/layout/Footer.tsx`
- **Contract:** Minimalist, complete luxury footer with:
  - Cairo, Luxor, and Aswan operational desk addresses and contact lines.
  - Ministry of Tourism and Antiquities license credentials.
  - Curated links and Hostinger portability indicators.

---

## 3. Booking Components (`/src/components/booking/`)

### `BookingModal`
- **Path:** `/src/components/booking/BookingModal.tsx`
- **Purpose:** Comprehensive luxury reservation dialog with live dynamic pricing calculation, calendar date validation, guest tiers, guide language options, and instant official reservation voucher generation.
- **Props:**
  - `tour: Tour | null` — Selected tour.
  - `isOpen: boolean` — Modal visibility state.
  - `onClose: () => void` — Dismiss handler.

---

## 4. Page Views (`/src/views/`)

| View | File | Description |
|---|---|---|
| `HomeView` | `/src/views/HomeView.tsx` | Complete homepage featuring Hero, 12 Destinations, Signature Experiences, Nile Cruise, Balloon, Why Palma, Custom Itinerary, Testimonials, and Final CTA |
| `DestinationsView` | `/src/views/DestinationsView.tsx` | All 12 destinations catalog with regional filtering (Upper Egypt, Delta, Red Sea, Western Desert, Sinai) and search |
| `DestinationDetailView` | `/src/views/DestinationDetailView.tsx` | In-depth destination guide with cultural monograph, travel advice, climate, and all 5+ structured tours |
| `ExperiencesView` | `/src/views/ExperiencesView.tsx` | Full catalog of all 60 tours with category filter tabs, duration, price sorting, and layout switching |
| `TourDetailView` | `/src/views/TourDetailView.tsx` | Full tour dossier: day-by-day itinerary, inclusions/exclusions, gallery, and sticky desktop/mobile booking |
| `NileCruisesView` | `/src/views/NileCruisesView.tsx` | Dedicated Nile cruise guide comparing Private Dahabiyas with Boutique River Steamers |
| `HotAirBalloonView` | `/src/views/HotAirBalloonView.tsx` | Dedicated sunrise flight guide over Luxor with flight tiers, schedule timeline, and safety credentials |
| `AboutView` | `/src/views/AboutView.tsx` | Brand philosophy, academic Egyptologists, and local artisan heritage stewardship |
| `ContactView` | `/src/views/ContactView.tsx` | Cairo and Luxor concierge desks, WhatsApp private hotline, and interactive inquiry form |
| `TailorMadeView` | `/src/views/TailorMadeView.tsx` | Interactive bespoke journey builder with multi-step preferences and real-time investment estimation |
