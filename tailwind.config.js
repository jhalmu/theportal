/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/templates/**/*.{html,js}",
    "./src/**/forms.py",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    /** https://flowbite.com/docs/components/typography/ */
    require("tw-elements/dist/plugin.cjs"),
    /** https://tw-elements.com/docs/standard/getting-started/quick-start/ */

  ],
}

