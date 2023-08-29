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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '19rem',
      },
    },
    extend: {
      colors: {
        red: '#ff0000',
        blue: '#35a7ff',
        'blue-light': '#99d3f4',
      },
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
