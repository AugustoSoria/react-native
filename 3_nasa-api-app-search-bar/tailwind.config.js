/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0c1854',
        'dark-accent': '#273c93',
        'dark-semi-accent': '#182a81',
        'light-bg': '#4469ff',
        'light-accent': '#3654d1',
        'light-semi-accent': '#3b5be1',
      },
    },
  },
  plugins: [],
}

