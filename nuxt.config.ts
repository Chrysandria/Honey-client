// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:5000',
      clientOrigin:
        process.env.NUXT_PUBLIC_CLIENT_ORIGIN || 'http://localhost:3000',
    },
  },
})
