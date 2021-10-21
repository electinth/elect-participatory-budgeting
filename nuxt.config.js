const BASE_URL = 'https://electinth.github.io/participatory-budgeting/'
const array = [];
for (var i = 0; i < 51; i++) {
  for (var j = 0; j < 51; j++) {
    array.push("/ogimage/" + i + "-" + j);
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'มหานครของเรา?',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'ส่องงบ ส่งไอเดีย ร่วมออกแบบ การใช้งบประมาณในเมืองของเรา' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'มหานครของเรา?'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ส่องงบ ส่งไอเดีย ร่วมออกแบบ การใช้งบประมาณในเมืองของเรา'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'มหานครของเรา?'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'ส่องงบ ส่งไอเดีย ร่วมออกแบบ การใช้งบประมาณในเมืองของเรา'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },

      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: BASE_URL
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://elect.in.th/wp-content/uploads/2018/10/favicon.ico' },
      { rel: "stylesheet", href: "https://assets.elect.in.th/typography.css" },
    ]
  },

  // generate: {
  //   dir: 'dist/booksonshelf',
  // },
  router: {
    base: '/participatory-budgeting/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'v-autocomplete/dist/v-autocomplete.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/vue-dragscroll.js', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: "~/plugins/elect", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI',
          authDomain: 'participatory-budgeting-a5f34.firebaseapp.com',
          projectId: 'participatory-budgeting-a5f34',
          storageBucket: 'participatory-budgeting-a5f34.appspot.com',
          messagingSenderId: '412280397430',
          appId: '1:412280397430:web:d2fd56e866108d5c3c0957'
        },
        services: {
          storage: true
        }
      }
    ]
  ],

  fontawesome: {
    icons: {
      solid: ['faStar', 'faChevronDown', 'faArrowDown', 'faArrowRight']
    }
  },

  //loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // generate: {
  //   routes: array
  // }
}
