export default defineNuxtConfig({
  compatibilityDate: '2026-05-08',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: '社團法人臺北市三創協會',
      meta: [
        {
          name: 'description',
          content: '社團法人臺北市三創協會快速原型網站'
        }
      ]
    }
  }
})
