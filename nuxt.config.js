export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HMI Komfaktek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Himpunan Mahasiswa Islam Komisariat Fakultas Teknik Cabang Ciputat',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'terbinanya insan akademis, pencipta, pengabdi yang bernafaskan Islam, dan bertangung jawab atas terwujudnya masyarakat adil makmur yang diridhoi Allah SWT',
      },
      { name: 'format-detection', content: 'telephone=083892870720' },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'HMI KOMFAKTEK | Melangkah Maju',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
      {
        rel: 'shortcut icon',
        hid: 'shortcut-icon',
        type: 'image/png',
        href: '/logo.png',
      },
      {
        rel: 'apple-touch-icon',
        hid: 'apple-touch-icon',
        type: 'image/png',
        href: '/logo.png',
      },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
