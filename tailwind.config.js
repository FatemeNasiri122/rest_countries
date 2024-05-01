/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-color': '#2B3945',
      'dark-color-2': '#202C37',
      'white-color': '#fff',
      'white-color-2': '#FAFAFA',
      'black': '#111517',
      'gray': '#9F9F9F',
    },
    extend: {
      spacing: {
        '14.5': '3.75rem',
      },
      boxShadow: {
        'nav': '0 2px 8px 0 rgba(99,99,99,.2)',
        'cart': '0 7px 29px 0 rgba(100, 100, 111, .2)',
        'dark-cart': '0 3px 8px rgba(0,0,0,.24)',
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spinning': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}