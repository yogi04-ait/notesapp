/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '280px', // Custom breakpoint for 420px
      },
    },
  },
  plugins: [],
}