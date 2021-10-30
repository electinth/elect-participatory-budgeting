<template>
  <div>
    <!-- <div class="h-100vh bg-main d-flex justify-content-center align-items-center">
      <h1 class="header-1 font-weight-bold">coming soon on 12 November</h1>
    </div> -->

    <div class="menu-wrap">
      <a href="https://punchup.world/project/" target="_blank" class="m-0">
        <img :src="logo" width="130" alt=""
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
    <ExploreTreeMap id="explore"/>
    <TreeMapSection />
    <ProjectSection />
    <ChooseProjectSection id="idea" />
    <EndSection />
    <VideoSection />
    <Conclusion />
    <div class="cookie-tab" v-if="cookies">
      <div class="d-flex justify-content-center box">
        <button class="text-1 font-weight-bold mr-3" @click="saveCookies()">
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
      cookies: true,
      logo: require("~/assets/images/logo-black.png"),
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
      ],
    };
  },
  methods: {
    async saveCookies() {
      if (!this.$cookies.get("uuid")) {
        this.$cookies.set("uuid", this.uuid);
        this.cookies = false;

        const messageRef = this.$fire.database.ref("data");
        try {
          await messageRef.child(this.$cookies.get("uuid")).set({
            isInBkk: "",
            hasHouseReg: "",
            hasAnswer: false,
            district: "",
            province: "",
          });
        } catch (e) {
          alert(e);
          return;
        }
        alert("Success.");

        const messageRef2 = this.$fire.database.ref("plan");
        const q = this.$fire.database.ref("sequence").child("plan_sequence");

        try {
          var a = await q.once("value");
          var c = a.val();

          for (var i = 0; i < 7; i++) {
            await messageRef2.child(++c).set({
              userid: this.$cookies.get("uuid"),
              planid: i + 1,
              star: "",
            });
          }

          q.set(c);
        } catch (e) {
          alert(e);
          return;
        }
        alert("Success.");

        const messageRef3 = this.$fire.database.ref("project");
        const w = this.$fire.database.ref("sequence").child("project_sequence");

        try {
          var b = await w.once("value");
          var d = b.val();

          for (var i = 0; i < 10; i++) {
            await messageRef3.child(++d).set({
              userid: this.$cookies.get("uuid"),
              projectid: i + 1,
              isSelected: "",
            });
          }

          w.set(d);
        } catch (e) {
          alert(e);
          return;
        }
        alert("Success.");
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
  background: #e8e4d8;
  padding: 20px 20px 0;
  justify-content: space-between;
  a {
    color: #000;
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
