/**
 * Massive Protective Services (MPS) - Unified Design Tokens
 * Single source of truth for brand colors, typography, elevations, and tactical accents.
 * 
 * FDACS License 81400200 | Chapter 493, Florida Statutes
 */

export const tokens = {
  colors: {
    // Primary Brand Palette
    matteBlack: '#0A0A0A',
    deepCarbon: '#121212',
    graphite: '#1F1F1F',
    tacticalGray: '#3A3D40',
    slateGold: '#C5A880',
    metallicGold: '#D4AF37',
    armorWhite: '#F5F5F7',
    alertRed: '#8B1E1E',

    // Supporting Tactical Accents & Overlays
    goldMuted: 'rgba(197, 168, 128, 0.15)',
    goldBorder: 'rgba(212, 175, 55, 0.25)',
    goldBorderHover: 'rgba(212, 175, 55, 0.55)',
    tacticalBorder: 'rgba(255, 255, 255, 0.08)',
    tacticalBorderHover: 'rgba(255, 255, 255, 0.18)',
    surfaceGlass: 'rgba(18, 18, 18, 0.75)',
    surfaceGlassHover: 'rgba(31, 31, 31, 0.85)',
    alertRedMuted: 'rgba(139, 30, 30, 0.2)',
  },

  typography: {
    fontSans: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'var(--font-geist-mono), monospace',
  },

  gradients: {
    gold: 'linear-gradient(135deg, #C5A880 0%, #D4AF37 50%, #A68A56 100%)',
    goldSubtle: 'linear-gradient(135deg, rgba(197, 168, 128, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
    carbon: 'linear-gradient(180deg, #121212 0%, #0A0A0A 100%)',
    graphite: 'linear-gradient(180deg, #1F1F1F 0%, #121212 100%)',
    radialGlow: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
  },

  shadows: {
    tactical: '0 4px 24px -2px rgba(0, 0, 0, 0.8)',
    tacticalLg: '0 12px 48px -4px rgba(0, 0, 0, 0.95)',
    goldGlow: '0 0 20px rgba(212, 175, 55, 0.25)',
    goldGlowLg: '0 0 40px rgba(212, 175, 55, 0.45)',
    insetSubtle: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
  },

  transitions: {
    tactical: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    prestige: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },

  zIndex: {
    base: 0,
    elevated: 10,
    sticky: 20,
    header: 40,
    backdrop: 50,
    modal: 60,
    popover: 70,
    toast: 80,
    priorityDispatch: 90,
  },
} as const;

export type DesignTokens = typeof tokens;
export default tokens;
