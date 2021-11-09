<template>
  <div>
    <!-- <div class="h-100vh bg-main d-flex justify-content-center align-items-center">
      <h1 class="header-1 font-weight-bold">coming soon on 12 November</h1>
    </div> -->

    <div class="menu-wrap">
      <a href="https://punchup.world/project/" target="_blank" class="m-0">
        <img :src="logo" width="130" alt="" class="pu-logo"
      /></a>
      <div>
        <nuxt-link
          v-for="(menu, index) in menu_list"
          :key="index"
          :to="menu.value"
          :class="{ active: menu.value === $route.fullPath }"
          class="menus"
        >
          {{ menu.name }}
        </nuxt-link>
      </div>
    </div>
    <IntroSection />
    <ProblemSection />
    <ScoreSection />
    <ExploreTreeMap id="explore" />
    <TreeMapSection />
    <ProjectSection />
    <ChooseProjectSection id="idea" />
    <EndSection />
    <VideoSection />
    <Conclusion />
    <div
      class="
        footer
        text-white
        d-flex
        justify-content-center
        align-items-sm-center
      "
    >
      <div class="container">
        <div class="d-flex justify-content-between">
          <img :src="logo_white" alt="" width="64" />
          <div class="social">
            <a href="https://instagram.com/punchup.world" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="backward mr-1"
            /></a>
            <a href="https://twitter.com/punchupworld" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="backward mr-1"
            /></a>
            <a href="https://www.facebook.com/punchupworld" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="backward mr-1"
            /></a>
            <a href="https://linkedin.com/company/punchupworld" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="backward mr-1"
            /></a>
          </div>
        </div>
        <div class="text-3 mt-3 d-inline-block">
          <b>Contact us </b> <br />
          E-mail : hi@punchup.world
        </div>
      </div>
    </div>
    <div class="cookie-tab" v-if="cookies">
      <div class="d-flex justify-content-center box">
        <button class="text-1 font-weight-bold mr-sm-3" @click="saveCookies()">
          ยอมรับ
        </button>
        <p class="btn-text-2 m-0">
          Punch Up ให้ความสำคัญต่อข้อมูลส่วนบุคคลของท่าน และใช้คุกกี้ (Cookies)
          เพื่อจุดประสงค์ในการพัฒนาประสบการณ์
          การใช้งานในเว็บไซต์นี้เท่านั้นและจะไม่กระทำการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อประโยชน์อย่างอื่น
          การเข้าใช้งานเว็บไซต์นี้ถือว่าท่านได้อนุญาตให้เราใช้คุกกี้ตาม
          เงื่อนไขที่แจ้งไว้
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      uuid: uuid.v1(),
      cookies: false,
      logo: require("~/assets/images/logo-black.png"),
      logo_white: require("~/assets/images/symbol-mint.png"),
      menu_list: [
        {
          name: "Home",
          value: "/",
        },
        {
          name: "Explore",
          value: "/#explore",
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
      this.cookies = true;
    } else {
      this.cookies = false;
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
        {
          hid: "og:title",
          property: "og:title",
          content: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด",
        },
      ],
    };
  },
  methods: {
    async saveCookies() {
      if (!this.$cookies.get("uuid")) {
        this.$cookies.set("uuid", this.uuid);
        this.$cookies.set("isVoted", false);
        this.cookies = false;

        const messageRef = this.$fire.database.ref("user");
        const aa = this.$fire.database.ref("sequence").child("user_sequence");

        try {
          var a = await aa.once("value");
          var r = a.val();

          await messageRef.child(++r).set({
            isInBkk: "",
            hasHouseReg: "",
            district: "",
            province: "",
            userid: this.$cookies.get("uuid"),
          });

          aa.set(r);
        } catch (e) {
          alert(e);
          return;
        }
        console.log("create user success");

        const messageRef2 = this.$fire.database.ref("plan");
        const q = this.$fire.database.ref("sequence").child("plan_sequence");

        try {
          var a = await q.once("value");
          var c = a.val();

          for (var i = 0; i < 7; i++) {
            await messageRef2.child(++c).set({
              userid: this.$cookies.get("uuid"),
              planid: i + 1,
              star: 0,
            });
          }

          q.set(c);
        } catch (e) {
          alert(e);
          return;
        }
        console.log("create plan success");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
}

.cookie-tab {
  position: fixed;
  bottom: 0;
  background: #000000;
  width: 100%;
  padding: 19px;
  color: #fff;
  z-index: 999;
  .box {
    width: 599px;
    margin: auto;

    @media #{$mq-mini-mobile} {
      width: auto;
      flex-direction: column;
      text-align: center;
    }

    button {
      border: 1px solid #ffffff;
      background: transparent;
      color: #fff;
      padding: 0 20px;
      height: 45px;
      margin: auto 0;

      @media #{$mq-mini-mobile} {
        width: 100px;
        margin: 0 auto 10px;
      }
    }
  }
}

.menu-wrap {
  display: flex;
  align-items: center;
  background: #e8e4d8;
  padding: 20px 20px 0;
  justify-content: space-between;

  @media #{$mq-mini-mobile} {
    padding: 10px 10px 0;
  }

  a {
    color: #000;
    text-decoration: none;
    margin-left: 32px;

    @media #{$mq-mini-mobile} {
      margin-left: 10px;
    }
  }
  a.active {
    font-weight: bold;
  }
}

.menus {
  font-size: 12px;
  font-weight: bold;
}

.pu-logo {
  width: 100px;
}

.footer {
  background: #000000;
  padding: 40px;

  @media #{$mq-mini-mobile} {
    flex-direction: column;
    padding: 20px;
  }
}

.social a {
  color: #fff;
  padding: 10px 0;
  margin-left: 30px;
  font-size: 24px;

  @media #{$mq-mini-mobile} {
    margin-left: 10px;
  }
}
</style>
