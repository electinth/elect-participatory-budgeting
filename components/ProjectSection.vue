<template>
  <div>
    <div class="bg-main h-100vh">
<p class="header-3 text-center w-50 mx-auto mb-5">ตัวอย่างโครงการที่เกิดขึ้นจริงปี 2564 ในแต่ละด้าน พอจะมีโครงการไหนที่เคยได้เห็นหรือได้ยินกันบ้างไหม?</p>


      <b-tabs v-model="tabIndex">
        <b-tab active title-link-class="tab-1">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 0">มหานครปลอดภัย</p>
            <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 1</p>
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
            <p class="m-0 text-3" v-if="tabIndex == 5">มหานครแห่งเศรษฐกิจและเรียนรู้</p>
             <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 6</p>
        </b-tab>

        <b-tab title-link-class="tab-7">
          <template #title>
            <p class="m-0 text-3" v-if="tabIndex == 6">การบริหารจัดการเมืองมหานคร</p>
                <p class="m-0 text-3" v-else>+</p>
          </template>
          <p class="p-3">Tab contents 7</p>
        </b-tab>
      </b-tabs>
    </div>
    <!-- <div class="bg-main h-100vh"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
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
</style>

<style lang="scss" scoped>
.bg-main {
  padding: 96px 139px;
  text-align: center;
}
</style>