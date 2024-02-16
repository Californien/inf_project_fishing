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
      'vue/components',
      { path: 'vue/components/global', global: true }
    ]
  },

  // Styling
  css: [ '/assets/scss/main.scss' ],

  // App settings
  app: {
    pageTransition: {},
    head: {
      title: '',
    }
  },

  // Modules & Plugins
  modules: [ '@nuxtjs/strapi' ],
  plugins: [],

  // Module settings
  // -> Strapi
  strapi: { url: 'http://localhost:1337' },

  // Custom elements (enabling `ion-icon`)
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'ion-icon'
    }
  }

});