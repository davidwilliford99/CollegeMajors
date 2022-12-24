/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        "card-dark": "#171717",
        "dark": "#252525",
        "dark-bg": "#1e1e1e",
        "white": "#EEEEEE",

        "cerulean": {
          50: "#d0e8f5",
          100: "#9cd3ed",
          200: "#58bee5",
          300: "#44a5c8",
          400: "#3a8ca9",
          500: "#30738c",
          600: "#265c6f",
          700: "#1d4554",
          800: "#14303a",
          900: "#0c1d23"
        }
    }
    }
  },
  plugins: [],
}
