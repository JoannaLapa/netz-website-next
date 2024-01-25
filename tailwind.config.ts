/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/[lng]/**/*.{js,jsx,ts,tsx}',
    './app/components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto-condensed)'],
        robotoCondensed: ['var(--font-roboto-condensed)'],
        robotoSlab: ['var(--font-roboto-slab)'],
      },

      fontSize: {
        xxs: '0.5rem', // 8px
        xs: '0.75rem', // 12px
        s: '0.875rem', // 14x
        base: '1rem', // 16px
        md: '1.125rem', // 21px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.25rem', // 36px
        '3xl': '4.5rem', //72px
      },
      colors: {
        'primary-030': '#00EE4D4D',
        'primary-100': '#00EE4D', // green
        'primary-200': '#00A234', //green focus
        'danger-100': '#e3170a', // red
        'neutral-000': '#00000000', //transparent
        'neutral-100': '#FFFFFF', // white
        'neutral-200': '#D9D9D9', // grey for underline
        'neutral-250': '#DDDDDD', // grey for dividers
        'neutral-300': '#444444', // grey font
        'neutral-400': '#161616', // black font
      },
      animation: {
        'change-opacity': 'changeOpacity 3s linear',
      },
    },
  },
  plugins: [],
};
