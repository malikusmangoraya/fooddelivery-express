/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        accent: '#f59e0b',
        heading: '#1f2937',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
