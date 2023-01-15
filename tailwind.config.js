/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      primary: {
        gray: '#1D1D1D',
      },

      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
      },
    },

    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.white'),
          h1: theme('colors.white'),
        },
      },
    }),
  },
  plugins: [],
};
