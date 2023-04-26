/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA4958",
        secondary: "#094E99",
        ptext: '#949CA9',
        bmain: "#F2F5F8",
        lead:'#979797'
      },
    },
  },
  plugins: [],
};
