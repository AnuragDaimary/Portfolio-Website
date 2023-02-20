/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        "0": "0 0 auto"
      },
      fontFamily: {
        'sans': ["Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        'primary': "#252525"
      }
    },
  },
  plugins: [],
}