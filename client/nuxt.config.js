export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'recipemanager',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    'portal-vue/nuxt',
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true,
  },
  apollo: {
    tokenName: 'recipemanager',
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
    watchLoading: '@/apollo/loadingHandler.js',
    errorHandler: '@/apollo/errorHandler.js',
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL,
      },
    },
  },
  axios: {
    baseURL: '/',
    redirectError: {
      401: '/login',
      404: '/notfound',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
