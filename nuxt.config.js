const BASE_URL = "https://electinth.github.io/participatory-budgeting/";
const array = [];
for (var i = 0; i < 51; i++) {
  for (var j = 0; j < 51; j++) {
    array.push("/ogimage/" + i + "-" + j);
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "อยู่เมืองนี้ ต้องรู้เยอะ",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด"
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:title",
        property: "og:title",
        content: "อยู่เมืองนี้ ต้องรู้เยอะ"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "อยู้เมืองนี้ ต้องรู้เยอะ"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },

      {
        hid: "twitter:url",
        property: "twitter:url",
        content: BASE_URL
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://punchup.world/wp-content/uploads/2019/07/symbol-mint.png"
      },
      { rel: "stylesheet", href: "https://assets.elect.in.th/typography.css" }
    ]
  },

  // generate: {
  //   dir: 'dist/booksonshelf',
  // },
  router: {
    base: "/participatory-budgeting/"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    "v-autocomplete/dist/v-autocomplete.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "./plugins/vue-dragscroll.js", mode: "client" },
    { src: "~/plugins/vue-awesome-swiper", mode: "client" },
    { src: "~/plugins/elect", mode: "client" },
    { src: "~/plugins/vue-material-checkbox.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "@nuxtjs/moment",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI",
          authDomain: "participatory-budgeting-a5f34.firebaseapp.com",
          databaseURL:
            "https://participatory-budgeting-a5f34-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "participatory-budgeting-a5f34",
          storageBucket: "participatory-budgeting-a5f34.appspot.com",
          messagingSenderId: "412280397430",
          appId: "1:412280397430:web:d2fd56e866108d5c3c0957"
        },
        services: {
          database: true
        }
      }
    ]
  ],

  moment: {
    locales: ["th"]
  },

  fontawesome: {
    icons: {
      solid: [
        "faStar",
        "faChevronDown",
        "faArrowDown",
        "faArrowRight",
        "faTimes"
      ]
    }
  },

  //loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "cookie-universal-nuxt",
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: ["~/assets/styles/variables.scss"]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

  // generate: {
  //   routes: array
  // }
};
