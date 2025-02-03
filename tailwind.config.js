import { THEME_COLORS, THEME_SHADOWS } from './src/utils/constants/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: THEME_COLORS.neon
      },
      boxShadow: THEME_SHADOWS
    },
  },
  plugins: [],
};