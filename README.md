# Realtor360 - Real Estate CRM & Dashboard Frontend

A pixel-accurate React + TypeScript implementation of the Realtor360 Figma design, featuring the Home Analytics Dashboard and the All Contacts CRM interface.

## Tech Stack
- **Framework**: Vite + React 18 + TypeScript (strict mode, zero `any`)
- **Styling**: Tailwind CSS with comprehensive design tokens configured in `tailwind.config.ts` and documented in `src/styles/tokens.md`
- **Component Primitives**: Radix UI primitives (`@radix-ui/react-checkbox`, `@radix-ui/react-dialog`), restyled to match the design
- **Charts**: Recharts custom donut chart with SVG callout arrows and stacked bar chart with custom axes and legend
- **Icons**: Lucide icons & custom inline SVGs for the Realtor360 brand mark and stat cards
- **Routing**: React Router v6
- **Typography**: Inter via `@fontsource/inter` (weights 400, 500, 600, 700)
- **Data**: Mock data in `/src/data`, local state management

---

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Run the local Vite dev server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Production Build & Type Checking
To validate TypeScript types and build the optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## Features

### 1. Navigation
- Sticky header with gold brand logo icon and **REALTOR360** wordmark.
- Active navigation tab styled with a gold pill (`#D4AF37`) and white text.
- Full route support for `/` (Home) and `/contacts` (All Contacts), plus styled placeholder pages for other nav items (`/developments`, `/buildings`, `/units`, `/leads`, `/companies`, `/deals`, `/activities`, `/attorney-firms`, `/reports`).

### 2. Home Dashboard (`/`)
- **Stat Cards (Row 1)**: 4 cards with circular icon containers, primary gold icons, large values, and rounded trend pills (positive green `#DAFFF7` with up-right arrow, negative red `#FEF0F2` with down-right arrow).
- **Deals by Lead Source (Row 2 Left)**: Custom Recharts donut chart with thick ring and 4 gold/cream shades, external labels, and curved callout arrows with custom SVG path markers.
- **Deals by Stages by Development (Row 2 Right)**: Stacked vertical bar chart with rotated labels (-45°), record count axis, stage axis, square-cornered bars, and bottom-left legend.
- **Additional Analytics (Row 3)**: Matching chart designs for "Deals by Sales People by Development" and "Deals in Pipeline by Development".

### 3. All Contacts CRM (`/contacts`)
- **Filters Sidebar**: 440px wide sidebar with search by contact name, live status multi-select filter, role multi-select filter, and assigned agent filter.
- **Action Bar**: Gold `+ Create Contact` button and quick table search input.
- **Contacts Table**: White rounded floating header card with columns (Contact Name, Company, Role, Phone No., Deal Stage, Status).
- **Status Badges**: Distinct tinted backgrounds and borders for `Active`, `In Progress`, `Cold`, `Converted`, and `Not Interested`.
- **Create Contact Dialog**: Accessible Radix Dialog for creating new contacts with full field validation and live addition to local state.
