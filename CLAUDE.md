# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + TypeScript + Vite landing page for thelaunch.space with these key architectural patterns:

### Tech Stack
- **React 18** with TypeScript for the frontend
- **Vite** for build tooling with optimized chunk splitting
- **Tailwind CSS** with custom design system and animations
- **Framer Motion** (motion/react) for animations
- **Radix UI** for accessible UI primitives
- **shadcn/ui** component patterns

### Component Structure
- `src/components/ui/` - Reusable UI components (buttons, cards, etc.)
- `src/components/sections/` - Page sections (hero, pricing, etc.)
- Components use lazy loading for performance optimization

### Key Patterns
- **Single Background**: Uses one `BeamsBackground` component fixed across entire page
- **Lazy Loading**: Non-critical sections are lazy-loaded with Suspense
- **Performance Optimized**: Throttled scroll handlers, cached DOM queries, chunked bundle splits
- **Mobile-First**: Responsive design with mobile sticky CTA
- **Path Aliases**: Uses `@/` alias pointing to `src/` (configured in vite.config.ts and tsconfig.json)

### Styling System
- Custom Tailwind config with design tokens via CSS variables
- Dark mode support with class-based toggling
- Custom animations: fade-in-up, scale-in, accordion animations
- Safe area utilities for mobile devices (pb-safe, pt-safe, etc.)
- Glass morphism effects with backdrop-blur

### State Management
- Uses React's built-in state management (useState, useEffect)
- Performance-focused scroll event handling with throttling
- Cached window dimensions for scroll calculations

### Build Configuration
- Vite with manual chunk splitting for optimal loading
- Terser minification with console removal in production
- ES2020 target for modern browser support
- Separate chunks for: react-core, animations, ui-components, utils, icons-forms, heavy libraries

The codebase follows a performance-first approach with lazy loading, optimized bundling, and efficient event handling patterns.

## Brand Guidelines & Design System

### Color Palette
**Primary Colors:**
- Background: `#0a0a0a` (neutral-950) - Main dark background
- Foreground: White with varying opacity levels
- Glass effects: `bg-white/5`, `bg-white/10`, `bg-white/20` with backdrop-blur

**Brand Colors:**
- Primary blue: `blue-400`, `blue-500`, `blue-600`
- Purple accent: `purple-500`, `purple-600`
- Secondary colors: `indigo-500`, `sky-500`
- Success: `green-400`, `green-500`
- Warning/accent: Various blue to purple gradients

**CSS Variables (shadcn/ui system):**
- Light mode: High contrast with dark foregrounds on light backgrounds
- Dark mode: Light foregrounds on dark backgrounds with muted secondary colors
- Border colors: Subtle with low opacity (`border-white/10`, `border-white/20`)

### Typography
**Font Stack:** Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
- Primary font: Inter for all text content
- Font rendering: Optimized with antialiasing (`-webkit-font-smoothing: antialiased`)
- Responsive sizing with Tailwind utilities (text-sm, text-base, text-lg, etc.)

### Gradient Usage
**When to use gradients:**
- Accent text: `bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent`
- Multi-color highlights: `from-green-400 via-blue-500 to-purple-500`
- Card backgrounds: Subtle `from-white/5 via-transparent to-transparent`
- Popular badges: `from-blue-500 to-purple-500`

### Button Styles
**SparklesButton (Primary CTA):**
- Primary: `bg-white text-neutral-950` with hover sparkles effect
- Secondary: `bg-transparent border border-white/20 text-white`
- Interactive effects: Scale animations, sparkles on hover, gradient underlines
- Sparkle colors: `#6366f1` (indigo) for primary, white for secondary

**Standard Button (shadcn/ui):**
- Default: Uses CSS variable system for consistent theming
- Variants: default, destructive, outline, secondary, ghost, link
- Sizes: sm (h-8), default (h-9), lg (h-10), icon (h-9 w-9)

**Pricing Cards:**
- Popular cards: `border-blue-500/30 bg-white/10`
- Regular cards: `border-white/10 bg-white/5`
- CTA buttons: Gradient for popular, glass for regular

### Glass Morphism System
**Consistent glass effect pattern:**
- Base: `backdrop-blur-xl bg-white/5 border border-white/10`
- Enhanced: `bg-white/10` for highlighted elements
- Subtle glow: `bg-gradient-to-br from-white/5 via-transparent to-transparent`
- Mobile CTA: `backdrop-blur-xl bg-white/10 border-t border-white/20`

### When to Use Each Color
- **Blue gradients**: Primary branding, hero text, key headings
- **Green accents**: Success states, positive metrics, completed features
- **Purple mixing**: Tech/AI themes, premium features
- **White opacity levels**: UI hierarchy (5% base, 10% hover, 20% active)
- **Border opacity**: Consistent 10% for cards, 20% for interactive elements