/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EA7C69",
        "secondary": '#FF7CA3',
        't-grey': '#ABBBC2',
        'i-grey': '#393C49', 
        "dark-100": '#252836',
        'dark-200': '#1f1d2b',
      }
    },
  },
  plugins: [],
}