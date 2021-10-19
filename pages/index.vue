<template>
  <div>
    <IntroSection />
    <ProblemSection />
    <ScoreSection />
    <TreeMapSection />
    <!-- <Conclusion />
    <EndCredit /> -->
    <div class="cookie-tab">
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
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    // });
  },
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            "https://d365h3igfpfyap.cloudfront.net/og-image/og_image.jpg",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            "https://d365h3igfpfyap.cloudfront.net/og-image/og_image.jpg",
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
</style>