/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: {
        section: "url('/src/assets/images/section.png')",
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
