/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'matcha': '#8BA888',
        'cilantro': 'var(--cilantro)',
        'peach': '#FE640B',
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'], // Add Josefin Sans font
      },
    },
  },
  plugins: [],
}
