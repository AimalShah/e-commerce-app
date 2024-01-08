/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'heading' : ['Playfair Display', 'serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
      colors : {
        'light-blue' : '#E0EDF4',
        'whitesh' : '#FAFEFF',
      },
      screens : {
        'xs':'380px'
      }
    },
  },
  plugins: [],
}