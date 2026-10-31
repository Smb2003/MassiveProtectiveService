const createJiti = require('jiti');
const jiti = createJiti(process.cwd());
const { tokens } = jiti('./src/theme/tokens.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matteBlack: tokens.colors.matteBlack,
        deepCarbon: tokens.colors.deepCarbon,
        graphite: tokens.colors.graphite,
        tacticalGray: tokens.colors.tacticalGray,
        slateGold: tokens.colors.slateGold,
        metallicGold: tokens.colors.metallicGold,
        armorWhite: tokens.colors.armorWhite,
        alertRed: tokens.colors.alertRed,
        goldMuted: tokens.colors.goldMuted,
        goldBorder: tokens.colors.goldBorder,
        tacticalBorder: tokens.colors.tacticalBorder,
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        serif: ['var(--font-cormorant)', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        tactical: tokens.shadows.tactical,
        goldGlow: tokens.shadows.goldGlow,
        goldGlowLg: tokens.shadows.goldGlowLg,
      },
      zIndex: tokens.zIndex,
    },
  },
  plugins: [],
};
