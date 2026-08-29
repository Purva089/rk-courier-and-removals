# RK Courier Services Platform (Frontend)

A production-ready frontend application built for a modern logistics company.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Shared**: Zod schemas for end-to-end type safety

## Prerequisites

- Node.js (v20+)
- npm or pnpm

## Local Development Setup

### 1. Install Dependencies
From the root directory, install the dependencies for all workspaces:
```bash
npm install
```
*(Note: If you run into workspace resolution issues with npm, you may need to use `npx pnpm install` instead).*

### 2. Running the Application

**Frontend Next.js Web App**
```bash
cd apps/web
npm run dev
```
The Next.js website will run on http://localhost:3000.

*Note: The application has been converted to a frontend-only project. All API calls (such as those for the admin dashboard, quotes, and testimonials) have been mocked in `apps/web/src/lib/api.ts` so the UI remains fully functional without a backend server.*

## Project Structure

```
meridian-logistics/
├── apps/
│   └── web/                 # Next.js 14 Frontend
│       ├── src/
│       │   ├── app/         # Public pages & Admin panel routes
│       │   ├── components/  # Reusable UI components & layouts
│       │   └── lib/         # Mock API wrapper & Auth context
├── packages/
│   └── shared-types/        # Zod schemas used in the Web app
└── package.json             # Root workspace config
```

## Available Features

- **Public Website:** Home, About, Services, Careers, Quote Request, Contact, Tracking
- **Interactive Tracking Timeline:** Real-time visual updates for shipments (Mock Data)
- **Admin Panel:** Dummy auth flow to manage mock quotes, contact messages, jobs, testimonials, and shipments.
- **Form Validations:** Client-side type safety using Zod and React Hook Form.
