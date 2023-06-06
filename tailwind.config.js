/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#EA4958",
        secondary: "#094E99",
        'secondary-dark': '#013977',
        'secondary-light': '#F7FBFF',
        'primary-text': '#6E7787',
        ptext: '#949CA9',
        bsecondary: "#F2F5F8",
        bmain: "#F4F4F4",
        lead: '#979797'
      },
    },
  },
  plugins: [],
};
