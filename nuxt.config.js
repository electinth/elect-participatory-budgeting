const BASE_URL = "https://electinth.github.io/participatory-budgeting/";
const array = [];
const arrayDistrict = [
  "พระนคร",
  "ป้อมปราบศัตรูพ่าย",
  "สัมพันธวงศ์",
  "บางรัก",
  "ปทุมวัน",
  "ยานนาวา",
  "ดุสิต",
  "พญาไท",
  "ห้วยขวาง",
  "พระโขนง",
  "บางกะปิ",
  "บางเขน",
  "มีนบุรี",
  "ลาดกระบัง",
  "หนองจอก",
  "ธนบุรี",
  "คลองสาน",
  "บางกอกใหญ่",
  "บางกอกน้อย",
  "ตลิ่งชัน",
  "ภาษีเจริญ",
  "หนองแขม",
  "บางขุนเทียน",
  "ราษฎร์บูรณะ",
  "ดอนเมือง",
  "จตุจักร",
  "ลาดพร้าว",
  "บึงกุ่ม",
  "สาทร",
  "บางคอแหลม",
  "บางซื่อ",
  "ราชเทวี",
  "คลองเตย",
  "ประเวศ",
  "บางพลัด",
  "จอมทอง",
  "ดินแดง",
  "สวนหลวง",
  "วัฒนา",
  "บางแค",
  "หลักสี่",
  "สายไหม",
  "คันนายาว",
  "สะพานสูง",
  "วังทองหลาง",
  "คลองสามวา",
  "บางนา",
  "ทวีวัฒนา",
  "ทุ่งครุ",
  "บางบอน",
]

const arrayProblem = ["ในการจัดการขยะมากขึ้น", "พัฒนาทางเท้าทางข้ามมากขึ้น", "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม", "จัดการการจราจรติดขัด", "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง", "เพิ่มพื้นที่สีเขียวให้มากขึ้น", "พัฒนาระบบการศึกษามากขึ้น", "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ", "จัดระเบียบผังเมืองให้เหมาะสม", "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ"]

for (var i = 0; i < arrayDistrict.length; i++) {
  for (var j = 0; j < arrayProblem.length; j++) {
    array.push("/ogimage/" + arrayDistrict[i] + "-" + arrayProblem[j]);
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
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
        hid: "og:type",
        property: "og:type",
        content: "website"
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
    { src: "~/plugins/vue-material-checkbox.js", mode: "client" },
    { src: '~/plugins/jszip', mode: 'client' },
    { src: '~/plugins/html2canvas', mode: 'client' },
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
  build: {},

  generate: {
    routes: ['/ogimage/khlongtoey-6']
  }
};
