/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#EF5E0C',
        discription:"#A56B60",
        darkCard:"rgb(17 17 17)",
        foodDetails:"#f3e2d5",
        DarkFoodDetails:"rgb(48 50 54)"
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}

