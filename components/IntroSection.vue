<template>
  <div>
    <div class="min-h-screen">
      <div class="position-absolute w-100 logo-box p-2 p-sm-4">
        <a href="https://punchup.world/project/" target="_blank"> </a>
      </div>
      <div class="h-100vh bg-main">
        <div class="h-100vh d-flex justify-content-center">
          <img :src="intro_pic" class="pu-logo" width="" />
        </div>
      </div>
      <div class="h-100vh bg-main d-flex justify-content-center flex-column">
        <div class="black-box text-center">
          <p class="text-1 m-0">
            ทุกวันนี้...เมืองที่เราใช้ชีวิต
            ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม? <br /><br />

            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม
            ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง
            เพื่อสร้างเมืองในแบบที่เราต้องการได้ <br /><br />

            ถ้างั้น...ขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่าง กรุงเทพมหานคร
            กันก่อนเลย
          </p>
          <p class="text-4 mt-5">
            โปรเจกต์นี้เป็นเพียงจุดเริ่มต้นที่ตั้งใจให้ทุกคน
            ได้ทดลองมีส่วนร่วมกับงบประมาณ<br />
            เพื่อจะผลักดันสังคมให้ดีขึ้นได้ (Good Society)<br />
            โดยเริ่มจากกรุงเทพมหานครเพื่อเป็นต้นแบบส่งต่อไปยังจังหวัดอื่นๆ
          </p>
        </div>
        <div class="d-flex justify-content-center mt-5 align-items-center">
          <p class="btn-text-1 text mb-0 mr-2">Share</p>
          <img :src="icon_fb" class="mx-1" width="" />
          <img :src="icon_line" class="mx-1" width="" />
          <img :src="icon_twitter" class="mx-1" width="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";

export default {
  name: "App",
  components: {},
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      currStep: null,
      isShow: true,
      intro_pic: require("~/assets/images/intro_pic.png"),
      icon_fb: require("~/assets/images/facebook.png"),
      icon_line: require("~/assets/images/line.png"),
      icon_twitter: require("~/assets/images/twitter.png"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
}

.black-box {
  background: rgba(0, 0, 0, 0.86);
  color: #fff;
  padding: 42px 86px;
  width: 650px;
  border-radius: 10px;
  margin: 0 auto;
}
</style>