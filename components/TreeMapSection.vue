<template>
  <div>
    <div class="h-100vh p-5">
      <div class="black-box">
        <div class="text-center">
          <img :src="icon_info" alt="" width="50" />
          <p
            class="header-3 text-white font-weight-bold w-50 mx-auto mt-3 mb-5"
          >
            ขอย้ำว่า! งบประมาณที่ลองเล่นก่อนหน้านี้ยังไม่ใช่
            “งบประมาณเบิกจ่ายใช้จริงๆ”
          </p>

          <b-row>
            <b-col>1</b-col>
            <b-col
              ><div class="white-box">
                <p class="text-1 m-0">
                  ถึงแม้ว่ากรุงเทพมหานครได้จัดทำและมีระบบติดตามและประเมินผลการใช้จ่ายงบประมาณก็จริง
                </p>
              </div>
              <div class="white-box mt-3">
                <p class="text-1 m-0">
                  แต่ส่วนที่ประชาชนสามารถเข้าถึงได้ ยังไม่มีข้อมูลงบฯ
                  ที่ใช้จริงในแต่ละโครงการอย่างครบถ้วน
                </p>
              </div>
              <div class="white-box mt-3">
                <p class="text-1 m-0">
                  ได้แต่หวังว่า กรุงเทพมหานครจะเปิดเผยและอัพเดท
                  ข้อมูลอย่างครบถ้วนในเร็ววัน เราจะได้เอาข้อมูล
                  มาแสดงให้ทุกคนดูกันได้
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
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
      icon_info: require("~/assets/images/icon_info.svg"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.black-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border: 1px solid #000000;
  border-radius: 10px;
  height: 100%;
  padding: 30px;
}

.white-box {
  background: white;
  padding: 20px;
  text-align: left;
}
</style>