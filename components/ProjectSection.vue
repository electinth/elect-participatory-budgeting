<template>
  <div>
    <div class="bg-main h-100vh">
      <p class="header-3 text-center w-50 mx-auto mb-5">
        ตัวอย่างโครงการที่เกิดขึ้นจริงปี 2564 ในแต่ละด้าน
        พอจะมีโครงการไหนที่เคยได้เห็นหรือได้ยินกันบ้างไหม?
      </p>

      <b-tabs v-model="tabIndex" style="width:1000px" class="mx-auto">
        <b-tab active title-link-class="tab-1">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 0">มหานครปลอดภัย</p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions">
              <div v-for="item in 5" class="text-left">
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> : xxxxxxxxxxxxxxxx
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> : xxxxxxxxxxxxxxxx
                </p>
                <p class="text-4 m-0"><b>สถานะ</b> : xxxxxxxxxxxxxxxx</p>
                <p class="text-1 font-weight-bold">โครงการxxxxxxxxxxxxxx</p>
                <img :src="sample_pic" width="75%" alt="" />
                <p class="text-4 m-0"><b>ผลลัพธ์</b> : xxxxxxxxxxxxxxxx</p>
                <p class="text-4 m-0">
                  <b>งบประมาณที่ได้รับ : </b> : xxxxxxxxxxxxxxxx
                </p>
                <p class="text-4 m-0">
                  <b>งบประมาณที่ได้ใช้ไป : </b> : xxxxxxxxxxxxxxxx
                </p>
                <p class="text-4 m-0">
                  <b>หน่วยงานที่รับผิดชอบ</b> : xxxxxxxxxxxxxxxx
                </p>
                <p class="text-4 m-0"><b>ลิงค์</b> : xxxxxxxxxxxxxxxx</p>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-2">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 1">
              มหานครสีเขียวสะดวกสบาย
            </p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>

        <b-tab title-link-class="tab-3">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 2">มหานครสำหรับทุกคน</p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 3</p>
        </b-tab>

        <b-tab title-link-class="tab-4">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 3">มหานครกระชับ</p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 4</p>
        </b-tab>

        <b-tab title-link-class="tab-5">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 4">มหานครประชาธิปไตย</p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 5</p>
        </b-tab>

        <b-tab title-link-class="tab-6">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 5">
              มหานครแห่งเศรษฐกิจและเรียนรู้
            </p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 6</p>
        </b-tab>

        <b-tab title-link-class="tab-7">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 6">
              การบริหารจัดการเมืองมหานคร
            </p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 7</p>
        </b-tab>
      </b-tabs>
    </div>
    <div class="bg-main">
      <div class="d-flex justify-content-center h-100 position-relative">
        <img :src="section_5_pic" alt="" class="pointer mx-3" width="575" />
        <div class="section-text">
          <h3 class="header-3">
            ในปีถัดไป 2565 กรุงเทพมหานคร จะมุ่งพัฒนาและขับเคลื่อน “มหานครทั้ง 7
            ด้าน” ให้เกิดขึ้นต่อไป
          </h3>
          <br />
          <h3 class="text-1">
            ถ้าบางส่วนของงบฯ ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้อย่างตรงจุดได้
            (Participatory Budgeting)
          </h3>
          <br />
          <h3 class="text-1">คุณคิดว่าควรนำไปพัฒนากับเรื่องอะไรบ้าง?</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      sample_pic: require("~/assets/images/section_project_bkk/issue_1/pic_issue_1.0.png"),
      section_5_pic: require("~/assets/images/section_5_pic.png"),
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style>
.tab-1 {
  background-color: #538dff !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-2 {
  background-color: #6adc7b !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-3 {
  background-color: #ff583e !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-4 {
  background-color: #ff9fdf !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-5 {
  background-color: #ff8310 !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-6 {
  background-color: #c3da14 !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-7 {
  background-color: #d170ff !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-content {
  border: 1px solid #000000;
  border-radius: 0px 10px 0px 0px;
}
</style>

<style lang="scss" scoped>
.bg-main {
  padding: 96px 139px;
  text-align: center;
}

.section-text {
  position: absolute;
  left: 35%;
  width: 365px;
  left: 51%;
  -moz-transform: translateX(-50%) translateY(50%);
  -webkit-transform: translateX(-50%) translateY(50%);
  transform: translateX(-50%) translateY(50%);
}
</style>