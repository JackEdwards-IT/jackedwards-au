/**
 * Taken from example:
 * https://github.com/antfu/vitesse-nuxt3/blob/main/config/pwa.ts
 */

import type { ModuleOptions } from "@vite-pwa/nuxt";

// Vite has a limitation of not being able to bundle unused
// static assets in the application during build.
const pwaAssetsScope = process.dev ? "" : "/public/_nuxt";

export const pwa: ModuleOptions = {
  registerType: "autoUpdate",
  injectRegister: "inline",
  includeAssets: [],
  manifest: {
    name: "Jack Edwards - IT Professional",
    short_name: "Jack Edwards",
    theme_color: "#1d1d1d",
    background_color: "#1d1d1d",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: `${pwaAssetsScope}/icons/pwa-192x192.maskable.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${pwaAssetsScope}/icons/pwa-512x512.maskable.png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${pwaAssetsScope}/icons/pwa-512x512.maskable.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
  workbox: {
    modifyURLPrefix: {
      "icons/": `${pwaAssetsScope}/icons/`,
    },
    clientsClaim: true,
    skipWaiting: true,
    navigateFallback: null,
    globPatterns: ["**/*.{js,css,html,txt,png,ico,svg,ttf}"],
    globIgnores: ["**/node_modules/**/*"],
    cleanupOutdatedCaches: true,
    inlineWorkboxRuntime: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/use.typekit.net\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "use.typekit-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  registerWebManifestInRouteRules: true, // recommended for nuxt framework: https://vite-pwa-org.netlify.app/frameworks/nuxt.html#registering-web-manifest
  writePlugin: false,
  client: {
    installPrompt: true,
    registerPlugin: true,
  },
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === "true",
    type: "module",
  },
};
