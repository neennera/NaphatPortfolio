/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        beight : '#EDEDED',
        beightDark : '#DEDEDE',
        dark : '#393939',
        primary : '#E17452',
        primaryDark : '#CE6847',
      },
      fontFamily: {
        'sora' : ["Sora", "sans-serif"],
      }
    },
  },
  plugins: [],
};
