/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1D4ED8',
        'custom-gray': '#374151',
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}