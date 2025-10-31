/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",
    "./templates/**/*.{liquid,json}",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./layout/**/*.liquid",
    "./assets/**/*.{js,css}"
  ],
  theme: { extend: {} },
  plugins: [],
}

