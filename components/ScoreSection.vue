<template>
  <div>
    <div class="h-100vh bg-main">
      <p class="header-3 w-75 m-auto">
        ความจริงแล้วหลาย ๆ ประเด็นปัญหาคาใจอยู่ อยู่ในแผนพัฒนา 20 ปี
        เพื่อให้กรุงเทพมหานครเป็น “มหานครแห่งเอเชีย” โดยแบ่งเป้าหมายย่อยออกเป็น
        7 ด้าน
      </p>
      <p class="text-2">
        แล้วใน 7 ด้านนี้ที่ผ่านมาคุณคิดว่ากรุงเทพฯ ทำได้ดีมากแค่ไหน
        ลองมาให้คะแนนกันหน่อย
      </p>
      <p class="text-3">(คลิกเพื่อเลือกให้คะแนน)</p>

      <div class="d-flex justify-content-center">
        <img :src="book_01" alt="" class="pointer mx-3" width="150" />
        <img :src="book_02" alt="" class="pointer mx-3" width="150" />
        <img :src="book_03" alt="" class="pointer mx-3" width="150" />
        <img :src="book_04" alt="" class="pointer mx-3" width="150" />
      </div>

      <div class="d-flex justify-content-center">
        <img :src="book_05" alt="" class="pointer mx-3" width="150" />
        <img :src="book_06" alt="" class="pointer mx-3" width="150" />
        <img :src="book_07" alt="" class="pointer mx-3" width="150" />
      </div>
    </div>
    <div class="h-100vh bg-main">
      <div class="d-flex justify-content-center h-100 position-relative">
        <img :src="pic_section_02" alt="" class="pointer mx-3" width="550" />
        <h3 class="header-3 w-25 section-text">
          เพื่อพัฒนาสู่มหานคร 7 ด้านนั้น ลองมาดูกันว่ากรุงเทพฯ ใช้งบประมาณ ปี
          2561 - 2565 กับเรื่องเหล่านั้นยังไงบ้าง?
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      book_01: require("~/assets/images/book/book_01.png"),
      book_02: require("~/assets/images/book/book_02.png"),
      book_03: require("~/assets/images/book/book_03.png"),
      book_04: require("~/assets/images/book/book_04.png"),
      book_05: require("~/assets/images/book/book_05.png"),
      book_06: require("~/assets/images/book/book_06.png"),
      book_07: require("~/assets/images/book/book_07.png"),
      pic_section_02: require("~/assets/images/pic_section_02.svg"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
  padding: 65px;
  text-align: center;
}

.section-text {
  width: 50%;
  position: absolute;
  top: 35%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(50%);
  -webkit-transform: translateX(-50%) translateY(50%);
  transform: translateX(-50%) translateY(50%);
}
</style>