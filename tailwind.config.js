/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Berkshire Swash', 'sans-serif'],
        'nav': ['Cinzel', 'sans-serif'],
        'body': ['Poppins', 'serif']
      }
    },

  },
  plugins: [],
}

