# An Gha — Design System & Implementation Source of Truth

> **Visual Source of Truth:** Stitch Project `10960198426158664538` ("Angha Editorial Design System")  
> **Aesthetic Philosophy:** "Catalogue in Motion" — Quiet Luxury Editorial  
> **Last Verified:** September 2026

---

## 1. Global Visual Language

### 1.1 Design Philosophy & Aesthetic
- **Tactile Modern Editorial:** Blends the poetic cadence and typographic dignity of independent print fashion monographs with the frictionless speed of precision e-commerce.
- **Restrained & Literary:** Avoids generic algorithmic e-commerce density. Employs purposeful whitespace, monospaced archival numbering (`01 / 12`), and narrative chapter rhythms.
- **Architectural Materiality:** Surfaces evoke unbleached paper stock, raw linen, and warm plaster. Visual structure is articulated through razor-thin `1px` hairlines and pure rectilinear geometry rather than synthetic drop shadows or glassmorphism.
- **Dual-Voice Hierarchy:** High-contrast `Playfair Display` serif typography governs artistic and narrative moments; geometric `Manrope` sans-serif governs cognitive, functional, and transactional interactions.

---

## 2. Typography System

### 2.1 Font Families
- **Editorial Typeface:** `Playfair Display` (Google Fonts, Serif)
- **Commerce / UI Typeface:** `Manrope` (Google Fonts, Sans-Serif)

### 2.2 Exact Typographic Scale & Tokens

| Token | Family | Font Size | Weight | Line Height | Letter Spacing | Case / Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Playfair Display | `4.5rem` (72px) | 400 | `1.05` | `-0.02em` | Uppercase, Hero statements (Desktop) |
| `display-lg-mobile` | Playfair Display | `2.75rem` (44px) | 400 | `1.10` | `-0.01em` | Uppercase, Hero statements (Mobile) |
| `display-md` | Playfair Display | `3.25rem` (52px) | 400 | `1.10` | `-0.015em` | Uppercase, Chapter titles (Desktop) |
| `display-md-mobile` | Playfair Display | `2.25rem` (36px) | 400 | `1.15` | `-0.01em` | Uppercase, Chapter titles (Mobile) |
| `headline-lg` | Playfair Display | `2.25rem` (36px) | 400 | `1.20` | `-0.01em` | Section headlines, Collection names |
| `headline-sm` | Playfair Display | `1.5rem` (24px) | 500 | `1.25` | `0em` | Product titles, Card headings |
| `body-lg` | Manrope | `1.125rem` (18px) | 400 | `1.60` | `0em` | Editorial intros, Lead copy |
| `body-md` | Manrope | `0.9375rem` (15px) | 400 | `1.55` | `0.01em` | Standard descriptions, Paragraphs |
| `body-sm` | Manrope | `0.8125rem` (13px) | 400 | `1.50` | `0.01em` | Secondary notes, Specifications |
| `label-editorial` | Manrope | `0.6875rem` (11px) | 600 | `1.20` | `0.18em` | Uppercase, Season/Index labels |
| `label-ui` | Manrope | `0.75rem` (12px) | 600 | `1.30` | `0.08em` | Uppercase, Navigation, Buttons, CTAs |
| `price-lg` | Manrope | `1.125rem` (18px) | 500 | `1.20` | `0.02em` | Product prices, Totals |
| `index-numeral` | Manrope | `0.75rem` (12px) | 500 | `1.00` | `0.15em` | Monospaced indices (`01 / 12`) |

---

## 3. Color System

### 3.1 Palette & Role Allocations

| Role | Color Name | Hex Value | Application & Usage |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | Warm Ivory | `#FAF6F1` | Global page background, tactile base stock |
| **Surface Inset** | Light Sand / Soft Tan | `#EFE4D8` | Secondary panels, filter backgrounds, cards |
| **Surface Tint Low** | Pale Warmth | `#FFF1EA` | Highlight containers, hero information cards |
| **Primary Ink** | Deep Charcoal | `#2B2420` | All primary typography, high-contrast action blocks |
| **Secondary Ink** | Warm Gray | `#7A7168` | Archival indices (`01 / 12`), metadata, secondary copy |
| **Primary Accent** | Dusty Terracotta | `#C17A63` | Active selections, wishlist indicators, key CTAs |
| **Supporting Accent** | Deep Olive | `#5C5A3E` | Archive tags, seasonal markers, provenance badges |
| **Hairline Borders** | Muted Boundary | `#E5D7D1` | 1px dividers, gridlines, card perimeters |
| **Hairline Subtle** | Charcoal Tint (12%) | `rgba(43, 36, 32, 0.12)` | Navigation borders, input bottom rules |
| **Selection BG** | Soft Blush | `#EFE4D8` | Text highlight background |
| **Selection Text** | Deep Charcoal | `#2B2420` | Text highlight ink |
| **Alert / Error** | Terra Crimson | `#BA1A1A` | Validation errors, stock alerts |
| **Error Container** | Soft Crimson Tint | `#FFDAD6` | Error notice banners |

---

## 4. Layout & Spacing System

### 4.1 Page Dimensions & Containers
- **Max Content Container Width:** `1440px`
- **Desktop Margins:** `3rem` (48px)
- **Tablet Margins:** `2rem` (32px)
- **Mobile Margins:** `1rem` (16px)
- **Desktop Gutters:** `1.5rem` (24px)
- **Mobile Gutters:** `0.75rem` (12px)

### 4.2 Exact Spacing Tokens
- `space-xs`: `0.25rem` (4px) — Tight label-to-numeral offsets
- `space-sm`: `0.5rem` (8px) — Intra-cluster gaps, icon paddings
- `space-md`: `1rem` (16px) — Card internal padding, control spacing
- `space-lg`: `1.5rem` (24px) — Component group gaps, header margins
- `space-xl`: `2.5rem` (40px) — Column padding, section sub-breaks
- `space-2xl`: `4rem` (64px) — Section header to grid spacing
- `space-3xl`: `6rem` (96px) — Major narrative chapter intervals

### 4.3 Grid Framework
- **Desktop (12 Columns):** Fluid grid. Supports asymmetric 8/4 editorial splits and symmetric 4-column (`col-span-3`) product grids.
- **Tablet (8 Columns):** 2-column or 3-column product distributions.
- **Mobile (4 Columns):** Single-column full-width storytelling or 2-column compact catalog cards.

---

## 5. Reusable Component Patterns

### 5.1 Global Header & Navigation
- **Announcement Strip:** Height `py-2`, text `label-editorial` (`11px` tracking `0.18em`), single-line with separator `|`.
- **Desktop Header:** 3-column structured grid (Left: Search trigger, Center: `ANGHA` Playfair wordmark, Right: Wishlist & Bag counter).
- **Secondary Desktop Nav:** Centered category links (`SHOP`, `DRESSES`, `OUTERWEAR`, `KNITWEAR`, `ACCESSORIES`) with `1.5px` terracotta bottom rule on active state.
- **Mobile Header:** Height `h-14`, Left: `ANGHA` logo, Right: Search, Bag `(0)`, and Hamburger Menu trigger.
- **Mobile Drawer:** Full height, max-width `384px`, Warm Ivory surface, sharp border, large touch targets (`py-3.5`), keyboard `Escape` dismiss.

### 5.2 Buttons & Action Controls
- **Primary Button:** Solid Deep Charcoal (`#2B2420`) rectangular block, Warm Ivory text, uppercase `label-ui` (`12px`, tracking `0.08em`), `0px` radius, padding `1rem 2rem`. Transitions to Dusty Terracotta (`#C17A63`) on hover.
- **Secondary / Outline Button:** Transparent background, `1px` solid Deep Charcoal (`#2B2420`) border, `0px` radius. Inverts on hover.
- **Editorial Text Action:** Uppercase `label-ui` followed by an arrow (`EXPLORE →` or `VIEW ARCHIVE — 01`) with hairline hover underline.

### 5.3 Product & Lookbook Cards
- **Image Frame:** Strict `3:4` aspect ratio, Warm Ivory / Sand backdrop (`#FAF6F1` / `#FFF1EA`), `0px` border-radius, smooth `1.05x` hover zoom.
- **Top Badges:**
  - Top-Left: Monospaced catalog index badge (`01 / 12`) on semi-translucent ivory chip (`px-2 py-1`).
  - Top-Right: Wishlist heart icon button (`32x32px`), active state fills in Dusty Terracotta (`#C17A63`).
- **Card Metadata:**
  - Line 1: Category (`label-editorial` in `#7A7168`) + Price (`price-lg` in `#2B2420`).
  - Line 2: Product Name (`headline-sm` Playfair Display, hover to `#C17A63`).
  - Line 3: Quick Explore rule with `1px` top border.

### 5.4 Form Inputs & Controls
- **Text Inputs:** Flat transparent/ivory field with a single `1px` bottom rule in `#E5D7D1`. Focus transitions border to `#2B2420` or `#C17A63` without halo/glow.
- **Labels:** Uppercase `label-editorial` (`11px`, tracking `0.18em`), positioned 8px above input baseline.
- **Checkboxes & Radios:** Sharp `16px` square boxes, `1px` border. Checked state renders solid Deep Charcoal fill.
- **Color / Fabric Swatches:** Square `24px` swatches with `1px` frame; active swatch gets a `2px` offset outline.

### 5.5 Filters & Tag Chips
- **Category / Attribute Chips:** Rectangular `0px` radius boxes with `1px` border in `#E5D7D1` and `label-editorial` typography.
- **Active State:** Solid Deep Olive (`#5C5A3E`) or Deep Charcoal (`#2B2420`) with white text.

### 5.6 Cart & Checkout Components
- **Cart Line Item:** 3:4 thumbnail (`80x107px`), product title in Playfair, variant metadata in Manrope `body-sm`, quantity stepper (`- 1 +`), remove link.
- **Order Summary Card:** Clean container in `#FFF1EA`, line-item breakdown (Subtotal, Shipping, Estimated Tax, Total), checkout CTA.
- **Checkout Step Rail:** Minimal numbered progress rail (`01 INFORMATION → 02 SHIPPING → 03 PAYMENT`) with active terracotta indicator.
- **Order Confirmation Receipt:** Centered archival receipt layout with monospaced reference (`#AG-2026-8891`), timeline tracker, and item matrix.

---

## 6. Visual Details & Micro-Styles

### 6.1 Border Radius & Geometry
- **Global Radius:** Strictly `0px` (Square / Rectilinear).
- **Exceptions:** None. Rounded SaaS pills, circular floating cards, and bubble radiuses are strictly prohibited.

### 6.2 Elevation & Shadows
- **Drop Shadows:** Prohibited in all standard views.
- **Depth Technique:** Planar tonal contrast (resting Sand or Pale Warmth containers over Warm Ivory canvas) and razor-thin `1px` hairlines.
- **Overlay Elevation (Modals / Sticky Bars only):** `0 12px 32px -8px rgba(43, 36, 32, 0.06)`.

### 6.3 Imagery Treatment
- **Aspect Ratios:**
  - Product Portraiture: `3:4` (Enforced)
  - Fabric / Material Macro: `1:1`
  - Hero Cinematic Spans: `16:9` or fluid 65/35 grid split
- **Object Fit:** `object-cover object-center`. Never distort or artificially clip garment silhouettes.

---

## 7. Stitch Screens Inventory & Component Mapping

| Screen ID | Screen Title | Device | Primary Components Used |
| :--- | :--- | :--- | :--- |
| `e564edd9b5a24a5b8fdf1f8d597e9563` | **ANGHA — Homepage (Desktop)** | Desktop | AnnouncementBar, Header, Hero 65/35 Split, 4-Col Category Grid, 4-Col Product Grid, Editorial Banner, Footer |
| `7d146d13446e4f389c6fdf06faa89063` | **ANGHA — Homepage (Mobile)** | Mobile | Mobile Header, Mobile Hero, Single/2-Col Category Tiles, 2-Col Product Grid, Mobile Menu Drawer |
| `065b947be46f4b6aac237244d0b50a6d` | **ANGHA — Shop (Desktop)** | Desktop | Header, Filter Sidebar, Sorting Dropdown, 4-Col Product Catalog Grid, Pagination Rail, Footer |
| `b06380be37ab409d870023dc3a46522c` | **ANGHA — Shop (Mobile)** | Mobile | Mobile Header, Slide-out Filter Drawer, 2-Col Product Grid, Infinite/Load-More CTA |
| `5cb4c37cc1384995960353630a1e2645` | **ANGHA — Product Detail (Desktop)** | Desktop | Header, 2-Col Gallery (Sticky 3:4 Plates), Product Metadata Cluster, Swatches, Size Selector, Add to Bag, Accordion Specs |
| `7db66f0da478451b9e0681896526842b` | **ANGHA — Product Detail (Mobile)** | Mobile | Mobile Header, Swipeable 3:4 Image Carousel, Compact Attribute Selector, Sticky Bottom Add-to-Bag Bar |
| `1c7188f1a17f4d05946aea5f5c743c8e` | **ANGHA — Cart (Desktop)** | Desktop | Header, Cart Table List (3:4 Thumbs), Quantity Stepper, Promo Input, Sticky Order Summary Box |
| `a20f00ed28354fb1a1dabd3560d9c4e6` | **ANGHA — Cart (Mobile)** | Mobile | Mobile Header, Stacked Cart Line Items, Summary Sheet, Sticky Checkout CTA |
| `9e54ce2cdfc143668467b5050b6d9467` | **ANGHA — Empty Bag (Desktop)** | Desktop | Header, Centered Editorial Statement (`YOUR SHOPPING BAG IS CURRENTLY EMPTY`), Curated Recommendations Grid |
| `3fea1ddb867c447280fa032e4254db3f` | **ANGHA — Checkout (Desktop)** | Desktop | Minimal Header, 2-Col Split (Forms on left, Order breakdown on right), Multi-step Accordion, Payment Forms |
| `cbf0ab4c1c9747f18ec76b806b2e87d9` | **ANGHA — Checkout (Mobile)** | Mobile | Minimal Mobile Header, Collapsible Order Summary Bar, Single-Column Multi-step Forms |
| `47c6216e29324a4db9ba49d60806f1a6` | **ANGHA — Order Confirmation (Desktop)** | Desktop | Header, Archival Confirmation Receipt, Tracking Timeline, Order Items Matrix, Print/Email CTAs |
| `0618713177484615899d2b2851ed6479` | **ANGHA — Order Confirmation (Mobile)** | Mobile | Mobile Header, Compact Receipt Card, Next Steps Guidance, Continue Shopping CTA |
