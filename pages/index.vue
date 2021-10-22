<template>
  <div>
    <elect-navbar title="articipatory-budgeting 101" dark="true">
      <div class="menu-wrap">
        <nuxt-link
          v-for="(menu, index) in menu_list"
          :key="index"
          :to="menu.value"
          :class="{ active: menu.value === $route.fullPath }"
          class="menus"
        >
          {{ menu.name }}
        </nuxt-link>
      </div></elect-navbar
    >
    <IntroSection />
    <ProblemSection />
    <ScoreSection />
    <TreeMapSection />
    <ProjectSection />
    <ChooseProjectSection />
    <EndSection />
    <VideoSection />
    <Conclusion />
    <div class="cookie-tab" v-if="cookies">
      <div class="d-flex justify-content-center box">
        <button class="text-1 font-weight-bold mr-3">ยอมรับ</button>
        <p class="btn-text-2 m-0">
          ELECT ให้ความสำคัญต่อข้อมูลส่วนบุคคลของท่าน และใช้คุกกี้ (Cookies)
          เพื่อจุดประสงค์ในการพัฒนาประสบการณ์
          การใช้งานในเว็บไซต์นี้เท่านั้นและจะไม่กระทำการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อประโยชน์อย่างอื่น
          การเข้าใช้งานเว็บไซต์นี้ถือว่าท่านได้อนุญาตให้เราใช้คุกกี้ตาม
          เงื่อนไขที่แจ้งไว้
        </p>
      </div>
    </div>
    <elect-footer />
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      menu_list: [
        {
          name: "Home",
          value: "/",
        },
        {
          name: "Explore",
          value: "/#tree-map",
        },
        {
          name: "Idea",
          value: "/#idea",
        },
        {
          name: "About",
          value: "/about",
        },
      ],
      drawer: false,
    };
  },
  mounted() {
    if (this.$cookies.get("uuid") === undefined) {
      this.cookies = false;
    } else {
      this.cookies = true;
    }
  },
  head() {
    return {
      uuid: uuid.v1(),
      cookies: true,
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cookie-tab {
  position: fixed;
  bottom: 0;
  background: #000000;
  width: 100%;
  padding: 19px;
  color: #fff;

  .box {
    width: 599px;
    margin: auto;

    button {
      border: 1px solid #ffffff;
      background: transparent;
      color: #fff;
      padding: 0 20px;
    }
  }
}

.menu-wrap {
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 32px;
  }
  a.active {
    font-weight: bold;
  }
}

.menus {
  font-size: 12px;
  font-weight: bold;
}
</style>