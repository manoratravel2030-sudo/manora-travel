# PALMA TRAVEL — Ultra-Premium Egyptian Tourism Website Theme

> Extraordinary journeys. Timeless destinations. Unforgettable moments.

PALMA TRAVEL is a bespoke, agency-grade luxury tourism website frontend theme crafted for high-end Egyptian incoming tourism, Nile yacht expeditions, private antiquities clearances, and bespoke cultural itineraries.

---

## Highlights & Features

- **Luxury Editorial Aesthetic:** High-contrast serif headlines (`Cormorant Garamond`), crisp modern body typography (`Plus Jakarta Sans`), warm limestone canvas (`#FAF9F6`), and refined Sky Blue / Egyptian Gold accents.
- **Strict Anti-AI Slop Discipline:** Zero generic pill tags on metadata, zero mechanical code comments, zero cheesy airplane icons or generic templates. Every section is art-directed with asymmetric layouts and authentic proportions.
- **12 Curated Egyptian Destinations:**
  1. Luxor (The World's Greatest Open-Air Museum)
  2. Aswan (Granite Cataracts & Nubian Solitude)
  3. Cairo (Historic Islamic & Modern Culture)
  4. Giza (The Royal Necropolis & Great Sphinx)
  5. Hurghada (Red Sea Lagoons & Private Marina)
  6. Sharm El Sheikh (Crown Jewel of Sinai Marine Life)
  7. Marsa Alam (Wild Dolphins & Virgin Coral Reefs)
  8. Alexandria (The Mediterranean Pearl & Bibliotheca)
  9. Fayoum (Prehistoric Whale Valleys & Pottery)
  10. Siwa Oasis (Amun's Oracle, Salt Pools & Desert Glamping)
  11. Dahab (Bohemian Coastal Serenity & Blue Hole)
  12. South Sinai (Mount Sinai Summit & St. Catherine's Monastery)
- **60 Structured Tours:** At least 5 rich, structured tours per destination with day-by-day itineraries, inclusions, exclusions, and pricing.
- **Interactive Global Booking Engine:** Dynamic tier calculation, guest volume pricing, form validation, and instant official reservation vouchers with reference codes (`PLM-2026-XXXX`).
- **Interactive Multi-Step Bespoke Journey Builder:** Customize regions, pacing, style, and clearances with real-time investment estimation.
- **Dedicated Cinematic Showcases:**
  - **Royal Nile Cruises:** Private Dahabiyas vs. Historic Steamers comparison.
  - **Sunrise Hot Air Balloon Flight:** Over the Valley of the Kings and Queen Hatshepsut Temple.
- **Unit Tested Logic:** Node test runner (`node:test`) verifying pricing algorithms, validation, and tour filters.
- **Claude Handoff Ready:** Includes complete documentation in `CLAUDE_HANDOFF.md`, `DESIGN_SYSTEM.md`, and `COMPONENTS.md` for Hostinger deployment.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run unit tests
npx --yes tsx --test src/utils/bookingEngine.test.ts

# Start development server
npm run dev

# Build for production
npm run build
```

The compiled output in `/dist` can be deployed directly to any static web host or Hostinger's `public_html`.
