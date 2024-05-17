/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html.twig",
    "./config/install/*.yml",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

