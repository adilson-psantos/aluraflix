/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2A7AE4',
        'front-end': '#6BD1FF',
        'back-end': '#00C86F',
        'mobile': '#FFBA05',
      },
    },
  },
  plugins: [],
};