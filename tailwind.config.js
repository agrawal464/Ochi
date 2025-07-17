/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // include paths to your source files
    "./public/index.html"              // or wherever your HTML is
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
