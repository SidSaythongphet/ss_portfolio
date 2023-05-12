/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'oxygen': ['Oxygen', 'sans-serif'],
      },
      colors: {
        'primary': '#010d23',
        'secondary': '#03223f',
        'accent': '#09738a',
        'text1': '#e19f41',
        'text2': '#fccb6f',
      },
    },
  },
  plugins: [],
}
