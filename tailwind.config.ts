/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./app/[lng]/**/*.{js,jsx,ts,tsx}', './app/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
				robotoCondensed: ['Roboto Condensed', 'sans-serif'],
				robotoSlab: [ 'Roboto Slab', 'serif'],
			},

			fontSize: {
				xxs: '0.5rem', // 8px
				xs: '0.75rem', // 12px
				s: '0.875rem', // 14x
				base: '1rem', // 16px
				md: '1.125rem', // 18px
				lg: '1.5rem', // 24px
				xl: '2rem', // 32px
				'2xl': '2.25rem', // 36px
			},

			colors: {
				primary: {
					'100': '#00EE4D', // green
				  },
				  danger: {
					'100': '#e3170a', // red
				  },
				  neutral: {
					'100': '#FFFFFF', // white
					'200': '#D9D9D9', // grey for underline
					'300': '#444444', // grey font
					'400': '#0a100d', // black font
				  },
			},
		},
	},
	plugins: [],
};
