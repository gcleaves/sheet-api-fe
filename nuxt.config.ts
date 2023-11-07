// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{
      path: '~/components'
  }],
  devServer: {
    port: 3333
  },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    //apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.API_BASE,
      webBase: process.env.WEB_BASE,
    }
  },
  routeRules: {
    '/login': { redirect: 'http://localhost:3000/login' },
    '/app': { redirect: '/app/sheets' },
    '/logout': { proxy: 'http://localhost:3000/logout' },
    '/login/check': { proxy: 'http://localhost:3000/login/check' },
    '/httpbin/**': { proxy: 'http://httpbin.org/**'},
    '/api/**': { proxy: 'http://localhost:3000/api/**' },
  }
})

