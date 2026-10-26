# CLAUDE HANDOFF & BACKEND INTEGRATION GUIDE
## Project: PALMA TRAVEL — Ultra-Premium Egyptian Tourism Theme

This document is prepared for **Claude** (or any succeeding backend engineer) to continue engineering, connect backend databases, wire real transactional email/SMS gateways, integrate payment providers, and deploy the application to **Hostinger** (or any static/PHP/Node.js host).

---

## 1. Project Overview & Architecture

PALMA TRAVEL is an ultra-premium luxury tourism web application for Egypt. The frontend is built with:
- **Framework:** React 19 SPA with TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";` with custom theme tokens)
- **Icons:** `lucide-react`
- **Build Tool:** Vite 6 / ESNext
- **Architecture:** Decoupled presentation & data model architecture. All tours, destinations, and booking calculations are isolated in `/src/data/` and `/src/utils/` without tight coupling to React views.

### Directory Structure:
```
/
├── index.html                   # Entry HTML with typography pre-connects (Cormorant Garamond + Plus Jakarta Sans)
├── metadata.json                # Project identity metadata
├── package.json                 # Dependencies & build scripts
├── tsconfig.json                # TypeScript bundle configuration
├── vite.config.ts               # Vite configuration with aliases (@/*)
├── src/
│   ├── main.tsx                 # React DOM root entry
│   ├── index.css                # Global styles, fonts, smooth scrollbar, and Tailwind tokens
│   ├── App.tsx                  # Master router, view state machine, and global modal state
│   ├── types/
│   │   └── travel.ts            # Type definitions (Destination, Tour, BookingSubmission, etc.)
│   ├── data/
│   │   ├── destinations.ts      # 12 Egyptian destinations with rich metadata & curator notes
│   │   ├── tours.ts             # 60 structured tours (5 tours for each of the 12 destinations)
│   │   └── testimonials.ts      # Verified editorial testimonials
│   ├── utils/
│   │   ├── bookingEngine.ts     # Pure business logic (pricing, filters, form validation, reference codes)
│   │   └── bookingEngine.test.ts # Unit tests for pure logic (run with tsx --test)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Top Bar Contract header with mobile drawer
│   │   │   └── Footer.tsx       # Minimal luxury footer with operational desk contacts
│   │   ├── ui/
│   │   │   ├── EditorialImage.tsx # Resilient image with shimmer & zero-broken-image fallback
│   │   │   ├── SectionHeading.tsx # Editorial chapter heading with typography balance
│   │   │   ├── TourCard.tsx       # Tour card with zero-pill metadata discipline
│   │   │   └── DestinationCard.tsx# Destination card with Arabic typography & coordinates
│   │   ├── home/
│   │   │   ├── Hero.tsx                 # Cinematic hero with exact requested copy
│   │   │   ├── DestinationsGrid.tsx     # 12 destinations interactive showcase
│   │   │   ├── SignatureExperiences.tsx # Asymmetric editorial layout with varied image ratios
│   │   │   ├── NileCruiseSection.tsx    # Cinematic Dahabiya feature
│   │   │   ├── HotAirBalloonSection.tsx # Sunrise flight over Valley of the Kings
│   │   │   ├── WhyPalma.tsx             # Credibility pillars & guarantees
│   │   │   ├── TailorMadeBanner.tsx     # Custom itinerary invitation
│   │   │   ├── TestimonialsSection.tsx  # Editorial pull-quote presentation
│   │   │   └── FinalCTA.tsx             # Closing CTA section
│   │   └── booking/
│   │       └── BookingModal.tsx         # Interactive booking form with live pricing & voucher output
│   └── views/
│       ├── HomeView.tsx                 # Homepage view
│       ├── DestinationsView.tsx         # All 12 destinations directory with region filters
│       ├── DestinationDetailView.tsx    # Destination view with guide, highlights & its 5+ tours
│       ├── ExperiencesView.tsx          # Catalog of all 60 tours with filter & sorting
│       ├── TourDetailView.tsx           # Full tour details: itinerary, inclusions, gallery & sticky booking
│       ├── NileCruisesView.tsx          # Dedicated Nile cruises page (Dahabiyas vs Steamers)
│       ├── HotAirBalloonView.tsx        # Dedicated sunrise hot air balloon page
│       ├── AboutView.tsx                # Heritage, curators, and ethical tourism
│       ├── ContactView.tsx              # Desks in Cairo, Luxor, Aswan + inquiry form
│       └── TailorMadeView.tsx           # Multi-step bespoke journey builder
```

---

## 2. Installation & Local Development

### Requirements:
- Node.js 20+
- npm 10+

### Setup Commands:
```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
npx --yes tsx --test src/utils/bookingEngine.test.ts

# 3. Start local development server
npm run dev

# 4. Create production build
npm run build
```

---

## 3. Data Structures for Backend Database Migration

The project uses clean, serializable TypeScript models in `/src/types/travel.ts`. When moving to a SQL (PostgreSQL / MySQL / SQLite) or NoSQL (MongoDB / Firestore) database, map these interfaces to database tables/collections:

### 1. `destinations` Table
| Field | Type | Description |
|---|---|---|
| `id` | VARCHAR(64) PRIMARY KEY | Unique slug (e.g., `luxor`, `aswan`, `siwa`) |
| `name` | VARCHAR(128) | English display name |
| `arabic_name` | VARCHAR(128) | Arabic calligraphy name |
| `region` | VARCHAR(64) | Upper Egypt, Sinai, Red Sea, etc. |
| `tagline` | VARCHAR(255) | Editorial descriptor |
| `description` | TEXT | Curatorial overview |
| `curator_note` | TEXT | Special antiquities clearances |
| `best_time_to_visit` | VARCHAR(128) | Recommended travel months |
| `average_temp` | VARCHAR(64) | Seasonal temperature |
| `coordinates` | VARCHAR(64) | Latitude and longitude |
| `hero_image` | VARCHAR(512) | High-res photography URL |
| `highlights` | JSON / ARRAY | Array of key landmark bullets |
| `travel_tips` | JSON / ARRAY | Practical traveler advice |

### 2. `tours` Table
| Field | Type | Description |
|---|---|---|
| `id` | VARCHAR(64) PRIMARY KEY | Unique ID (e.g. `lux-01`, `asw-01`) |
| `slug` | VARCHAR(255) UNIQUE | URL slug |
| `destination_id` | VARCHAR(64) FK | References `destinations.id` |
| `title` | VARCHAR(255) | Tour title |
| `subtitle` | VARCHAR(255) | Deck line |
| `category` | VARCHAR(64) | Hot Air Balloon, Nile Cruise, etc. |
| `duration` | VARCHAR(64) | Display duration (e.g. `3.5 Hours`, `5 Days`) |
| `duration_days` | INT | Duration in days (for sorting) |
| `group_type` | VARCHAR(64) | Exclusive Private / Curated Small Group |
| `price_from_usd` | INT | Base starting rate per guest |
| `rating` | DECIMAL(3,2) | User rating (e.g. 4.98) |
| `review_count` | INT | Number of verified reviews |
| `hero_image` | VARCHAR(512) | Main image |
| `gallery` | JSON / ARRAY | Additional photography URLs |
| `overview` | TEXT | Full description |
| `highlights` | JSON / ARRAY | Array of strings |
| `itinerary` | JSON / ARRAY | Array of `{ day, title, description, meals, stay }` |
| `inclusions` | JSON / ARRAY | Array of included items |
| `exclusions` | JSON / ARRAY | Array of excluded items |
| `physical_demand` | VARCHAR(64) | Gentle, Moderate, Active |
| `meeting_point` | VARCHAR(255) | Departure location |
| `departure_time` | VARCHAR(64) | Scheduled time |
| `languages` | JSON / ARRAY | Supported languages |

### 3. `bookings` Table (Submissions)
| Field | Type | Description |
|---|---|---|
| `id` | SERIAL / UUID PRIMARY KEY | Internal identifier |
| `reference_number` | VARCHAR(32) UNIQUE | e.g. `PLM-2026-8742` |
| `tour_id` | VARCHAR(64) FK | References `tours.id` |
| `tour_title` | VARCHAR(255) | Name of tour |
| `full_name` | VARCHAR(128) | Guest name |
| `email` | VARCHAR(128) | Guest email |
| `phone` | VARCHAR(64) | Phone / WhatsApp |
| `travel_date` | DATE | Date of tour commencement |
| `guest_count` | INT | Number of guests |
| `tier` | VARCHAR(64) | Standard VIP / Private Bespoke / Royal Heritage |
| `guide_language` | VARCHAR(32) | Selected guide language |
| `hotel_pickup_location` | VARCHAR(255) | Accommodation pickup point |
| `special_requests` | TEXT | Dietary or custom requests |
| `calculated_total_usd` | INT | Estimated total in USD |
| `payment_status` | VARCHAR(32) | `pending_quote`, `deposit_paid`, `confirmed` |
| `created_at` | TIMESTAMP | Submission timestamp |

---

## 4. Connecting the Forms to a Real Backend

The frontend currently uses structured client-side demo state with authoritative reference generation:
1. **Tour Reservation Form:** Located in `/src/components/booking/BookingModal.tsx`.
   - Function: `handleSubmit`
   - Data payload: `BookingSubmission` interface
   - To connect:
     ```typescript
     // Replace setConfirmedBooking(...) with an API POST:
     const response = await fetch('/api/bookings', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(submission),
     });
     const data = await response.json();
     setConfirmedBooking(data);
     ```

2. **Tailor-Made Itinerary Form:** Located in `/src/views/TailorMadeView.tsx`.
   - Function: `handleSubmit`
   - Data payload: `CustomItinerarySubmission` interface
   - Target endpoint: `POST /api/custom-itineraries`

3. **General Contact & Concierge Form:** Located in `/src/views/ContactView.tsx`.
   - Target endpoint: `POST /api/inquiries`

---

## 5. Hostinger Deployment Considerations

**CRITICAL NOTE FOR CLAUDE:** Many Hostinger shared hosting plans **do not support persistent Node.js background services**; they natively serve static HTML/CSS/JS and PHP.

This application is built as a **portable, standalone Static Single Page Application (SPA)** that compiles down to clean static assets:

### Step 1: Build the Static Bundle
```bash
npm run build
```
This produces an optimized `/dist` directory containing:
- `index.html`
- `/assets/*.js`
- `/assets/*.css`

### Step 2: Upload to Hostinger `public_html`
Upload all contents of `/dist` directly into Hostinger's `public_html` directory via FTP / Git / Hostinger File Manager.

### Step 3: Configure `.htaccess` for Client-Side Routing
Create an `.htaccess` file inside `public_html` so deep links and refreshes redirect to `index.html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Optional PHP Form Processing on Hostinger
If using Hostinger Shared Hosting without Node.js, Claude can create lightweight PHP proxy scripts in a `/api/` subfolder (e.g., `public_html/api/booking.php`) that read `php://input`, store the booking in MySQL (using PDO), and send confirmation emails using PHP `mail()` or PHPMailer via SMTP.

---

## 6. Payment Gateway Integration Recommendations

For luxury tourism bookings where transactions often exceed $1,000–$10,000 USD:
1. **Stripe Checkout / Elements:** Ideal for immediate deposits (e.g., 20% holding deposit) and international credit cards.
2. **Bank Wire / Swift Invoice Generator:** Provide downloadable PDF pro-forma invoice with Egyptian bank Swift/IBAN details (standard in high-end Egyptian incoming travel).
3. **Paymob / Fawry:** If local Egyptian card payments (EGP) are required.

---

## 7. Contact & Support
- **Client Email:** manoratravel2030@gmail.com
- **Brand Wordmark:** PALMA TRAVEL
- **Status:** Complete production-grade frontend theme ready for backend attachment.
