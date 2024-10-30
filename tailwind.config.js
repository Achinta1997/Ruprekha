/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'segoe': ['Times New Roman'],
        'title': ['Artifika', 'sans-serif'],
        'nav': ['Cookie', 'sans-serif']
      }
    },

  },
  plugins: [],
}

