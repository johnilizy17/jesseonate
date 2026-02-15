# Real Estate Portfolio Website

A modern, responsive real estate agent portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, clean design with responsive layout
- Home page with hero section and feature highlights
- Services page for buyers and sellers
- Interactive checklist for home buyers
- Comprehensive buyer's guide
- FAQ section with expandable questions
- Mobile-friendly navigation
- Contact information in footer

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
OLAonate-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── services/         # Services page
│   │   ├── checklist/        # Buyer checklist
│   │   ├── buyerguide/       # Buyer guide
│   │   ├── faq/              # FAQ page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navigation.tsx    # Header navigation
│       └── Footer.tsx        # Footer component
├── public/                   # Static assets
└── package.json
```

## Customization

- Update contact information in `src/components/Footer.tsx`
- Modify colors in `tailwind.config.ts`
- Add your own content to each page
- Replace placeholder text with your actual information

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
