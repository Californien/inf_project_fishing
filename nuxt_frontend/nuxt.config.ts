import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // DEV-Tools
  devtools: { enabled: true },

  // Typescript
  typescript: { strict: true },

  // Directories
  srcDir: 'src/',
  dir: {
    layouts: 'vue/layouts',
    pages: 'vue/pages'
  },
  components: {
    dirs: [
      'vue/components'
    ]
  },

  // Styling
  css: [ '/assets/scss/main.scss' ],

  // App settings
  app: {
    pageTransition: {},
    head: {
      title: 'Online-Banking',
    }
  },

  // Modules & Plugins
  modules: [ '@nuxtjs/strapi' ],
  plugins: [],

  // Module settings
  // -> Strapi
  strapi: {
    url: process.env.STRAPI_URL || 'https://ominous-space-capybara-p5jpqgxqw6w3r566-1337.app.github.dev'
  },
  // Custom elements (enabling `ion-icon`)
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'ion-icon'
    }
  }

});