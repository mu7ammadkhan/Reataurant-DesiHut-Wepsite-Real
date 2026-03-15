# Desi Hut Hyderabad Restaurant Website

A full-stack restaurant website for **Desi Hut Hyderabad**, built with **Next.js**, **TypeScript**, **Tailwind CSS**, **MongoDB**, and **Cloudinary**.

This project is being developed feature by feature with a practical approach so that a working demo can be prepared quickly, while still keeping the structure scalable for real-world use.

## Project Goal

The goal of this project is to build a modern restaurant website that helps Desi Hut Hyderabad present its brand, menu, deals, gallery, and contact information in a clean and professional way.

The website will include both:

- A **public customer-facing website**
- A **secure admin panel** for managing restaurant content

## Planned Features

### Public Website
- Home page
- About page
- Menu page
- Deals / offers section
- Gallery page
- Contact page
- WhatsApp and call-to-action buttons
- SEO-friendly pages
- Mobile-friendly responsive design

### Admin Panel
- Admin login
- Dashboard
- Manage site settings
- Manage menu categories
- Manage menu items
- Manage deals
- Manage full menu media
- Manage gallery images
- Manage testimonials

## Tech Stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** Admin-only authentication
- **Media Management:** Cloudinary
- **Animation:** Framer Motion (limited use for better performance)
- **Deployment:** Vercel

## Project Architecture

The project uses a structured folder architecture with separate areas for:

- Public website pages
- Admin dashboard pages
- API routes
- Database models
- Validation logic
- SEO utilities
- Reusable UI and feature components

## Current Progress

### Day 1
Today the initial project setup was completed.

Completed work:
- Next.js project initialized
- Required dependencies installed
- Base project architecture planned
- Final folder structure prepared
- Public and admin route structure organized
- API, models, lib, types, hooks, and data folders planned

At this stage, the project foundation is ready and the next step is to start implementing actual pages, layouts, utilities, database connection, and admin authentication flow.

## Folder Structure

#```bash
desihut-website/
├── public/
│   ├── favicon.ico
│   ├── logo/
│   └── placeholders/
│
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── menu/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   └── contact/page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── login/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── settings/page.tsx
│   │   │   ├── categories/page.tsx
│   │   │   ├── menu/page.tsx
│   │   │   ├── deals/page.tsx
│   │   │   ├── menu-media/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   ├── testimonials/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── settings/route.ts
│   │   │   ├── categories/route.ts
│   │   │   ├── categories/[id]/route.ts
│   │   │   ├── menu/route.ts
│   │   │   ├── menu/[id]/route.ts
│   │   │   ├── deals/route.ts
│   │   │   ├── deals/[id]/route.ts
│   │   │   ├── menu-media/route.ts
│   │   │   ├── menu-media/[id]/route.ts
│   │   │   ├── gallery/route.ts
│   │   │   ├── gallery/[id]/route.ts
│   │   │   ├── testimonials/route.ts
│   │   │   ├── testimonials/[id]/route.ts
│   │   │   └── upload/route.ts
│   │   │
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── public/
│   │   ├── admin/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── mongodb.ts
│   │   ├── auth.ts
│   │   ├── cloudinary.ts
│   │   ├── utils.ts
│   │   ├── whatsapp.ts
│   │   ├── seo/
│   │   └── validations/
│   │
│   ├── models/
│   ├── types/
│   ├── data/
│   ├── hooks/
│   └── middleware.ts
│
├── auth.ts
├── .env.local
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
