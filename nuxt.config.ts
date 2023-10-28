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
})

