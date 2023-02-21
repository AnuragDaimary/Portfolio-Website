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
      },
      transitionTimingFunction: {
        "sexy-scroll": "cubic-bezier(.41,0,.5,1.05)"
      }
    },
  },
  plugins: [],
}