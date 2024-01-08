/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.html", 
    'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), 
    require('flowbite-typography')
  ],
}

