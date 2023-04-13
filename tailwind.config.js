/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "placeholder": "ulr('./images/placeholder.jpg')"
      },
      flex: {
        "0": "0 0 auto"
      },
      fontFamily: {
        'sans': ["Helvetica", "Arial", "sans-serif"],
        'raleway': ["Raleway", "sans-serif"]
      },
      colors: {
        'primary': "#111",
        'custom': "#D47AFF",
        'grad1': "#ED7CFF",
        'grad2': "#A56FFF",
        "white1": "rgba(255,255,255, 0.1)",
        "white2": "rgba(255,255,255, 0.2)",
        'section': '#ADADAD',
      },
      transitionTimingFunction: {
        "sexy-scroll": "cubic-bezier(.41,0,.5,1.05)"
      },
      animation: {
        "custom-spin": 'customSpin 10s linear infinite',
      },
      keyframes: {
        customSpin: {
          '0%': { transform: "translate(-50%, -50%) rotate(0deg)" },
          '50%': { scale: "1 1.5" },
          '100%': { transform: "translate(-50%, -50%) rotate(360deg)" },
        }
      }
    },
  },
  plugins: [],
}