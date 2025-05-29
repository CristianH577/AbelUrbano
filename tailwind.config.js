/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
    },
  },
  themes: {},
  darkMode: "class",
  important: true,
  plugins: [],
};
