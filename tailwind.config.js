/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "hero":"url('https://i-lunaweb.vercel.app/assets/herobg-4e6f5bf8.png')"
      }
    },
  },
  darkMode:"class",
  plugins: [],
};
