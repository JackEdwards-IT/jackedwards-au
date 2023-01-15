// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Jack Edwards - IT Professional',
      meta: [
        {
          name: 'description',
          content: 'Portfolio and collection or IT related resources.',
        },
      ],
    },
  },
});
