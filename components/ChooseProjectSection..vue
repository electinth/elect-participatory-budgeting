<template>
  <div>
    <div class="p-5 text-center">
      <p class="header-3">เลือกโครงการที่อยากพัฒนาเลือกได้ 3 โครงการ</p>
      <b-row class="justify-content-center">
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
        <b-col cols="6">
          <div class="choice mb-3 mx-auto" v-for="item in 10">
            <p class="header-3 m-0">ปรับปรุงระบบจัดการขยะ</p>
            <p class="text-4 m-0">(มหานครปลอดภัย)</p>
          </div>

          <button>ส่งความคิดเห็น</button>
        </b-col>
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      illus_section_05: require("~/assets/images/illus_section_05.svg"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.choice {
  background: #e5e5e5;
  border-radius: 10px;
  width: 100%;
  padding: 7px;
}
</style>