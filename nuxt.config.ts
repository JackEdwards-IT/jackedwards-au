// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { pwa } from './src/configs/pwa';

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  css: ['~/assets/css/main.css'],

  // https://tailwindcss.nuxtjs.org/getting-started/options#configpath
  tailwindcss: {
    // Path to TailwindCSS config, because TailwindCSS config file
    // is in `src` folder, different from Nuxt config file.
    configPath: '~/tailwind.config',
  },

  // https://vite-pwa-org.netlify.app/guide/#vite-plugin-pwa
  pwa,

  app: {
    baseURL: '/',
    head: {
      titleTemplate: 'Jack Edwards',
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
  srcDir: 'src/',
});
