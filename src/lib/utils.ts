import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Throttled scroll handler for better performance
export function createThrottledScrollHandler(callback: (scrollY: number) => void) {
  let ticking = false;
  let lastScrollY = 0;

  return () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(lastScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Cache DOM queries for better performance
let cachedInnerHeight: number | null = null;
let cachedScrollY: number | null = null;

export function getCachedInnerHeight(): number {
  if (cachedInnerHeight === null) {
    cachedInnerHeight = window.innerHeight;
  }
  return cachedInnerHeight;
}

export function getCachedScrollY(): number {
  if (cachedScrollY === null) {
    cachedScrollY = window.scrollY;
  }
  return cachedScrollY;
}

// Update cache on resize
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    cachedInnerHeight = null;
  });
}

function getHeaderHeightPx(): number {
  const header = document.querySelector('header') as HTMLElement | null;
  return header?.offsetHeight ?? 0;
}

function scrollToElementWithOffset(target: HTMLElement, extraOffset = 0) {
  const headerHeight = getHeaderHeightPx();
  const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;
  window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
}

export function scrollToBooking() {
  const bookingSection = document.querySelector('[data-section="booking"]') as HTMLElement | null;
  if (bookingSection) {
    scrollToElementWithOffset(bookingSection, 0);
  }
}

// Simple scroll to element with header offset
export function scrollToSection(elementId: string) {
  // Try by id first
  let element = document.getElementById(elementId) as HTMLElement | null;
  // Fallback to querySelector if needed
  if (!element) element = document.querySelector(`#${elementId}`) as HTMLElement | null;
  if (element) {
    scrollToElementWithOffset(element, 0);
  }
}

// Navigation utility for client-side routing
export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
