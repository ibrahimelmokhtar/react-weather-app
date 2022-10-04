/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
  ],
}
