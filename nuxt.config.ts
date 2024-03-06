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
  pwa: {
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'Jack Edwards - IT Professional',
      short_name: 'Jack Edwards',
      description: 'Portfolio and collection or IT related resources.',
      theme_color: '#1d1d1d',

      icons: [
        {
          "src": "pwa-64x64.png",
          "sizes": "64x64",
          "type": "image/png"
        },
        {
          "src": "pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "maskable-icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
    }
  },

  app: {
    baseURL: '/',
    head: {
      titleTemplate: 'Jack Edwards',
      charset: 'utf-16',
      viewport: 'width=412, initial-scale=1',
      title: 'Jack Edwards - IT Professional',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'Jack Edwards - IT Professional',
          content: 'Portfolio and collection or IT related resources.',
        },
        {
          name: "theme-color",
          content: '#1d1d1d',
        }
      ],
    },
  },
  srcDir: 'src/',
});
