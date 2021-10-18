<template>
  <div>
    <div class="bg-main text-center">
      <p class="text-1">
        รู้หรือไม่...กรุงเทพมหานครวางแผนพัฒนาระยะ 20 ปี <br />
        (พ.ศ. 2556-2575) ขึ้นมา เพื่อจะก้าวไปสู่การเป็น
      </p>
      <div class="header-2 border-black-box">“มหานครแห่งเอเชีย”</div>
      <p class="text-1">แล้วปี 2565 เรากำลังเดินมาถึงครึ่งทางแล้ว</p>
      <img :src="year_chart" alt="" class="my-5" />
      <p class="header-3">
        แต่ทุกวันนี้...กรุงเทพมหานครก็ยังดูไม่เหมือนเมืองในฝันที่เราวาดไว้ใช่ไหม?<br />
        แล้วอะไรล่ะที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้
      </p>
      <p class="text-3">(คลิกเพื่อเลือกปัญหา)</p>

      <div class="d-flex justify-content-center">
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            น้ำเน่าเสีย ขยะ ฝุ่นละออง
          </p>
        </div>
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            พื้นที่สีเขียว และสวนสาธารณะ
          </p>
        </div>
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            การทุจริต คอร์รัปชั่น
          </p>
        </div>
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            สาธารณูปโภคพื้นฐาน ให้ผู้พิการ
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            ระบบสารสนเทศ ในการให้บริการ ประชาชน
          </p>
        </div>
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            แหล่งท่องเที่ยว เสื่อมโทรม
          </p>
        </div>
        <div>
          <img :src="sample" alt="" class="mb-3 pointer" />
          <p class="text-2 w-75 m-auto font-weight-bold">
            การจัดระบียบ ความหนาแน่น ของเมือง
          </p>
        </div>
      </div>
    </div>
    <div
      class="h-100vh result d-flex justify-content-center align-items-center"
    >
      <div class="result-box text-center">
        <h1 class="header-3 font-weight-bold">น้ำเน่าเสีย ขยะ ฝุ่นละออง</h1>
        <p class="text-2 m-0">ยังเป็นปัญหาที่ยังค้างคาใจคุณอยู่</p>
        <p class="text-4 m-0">
          กรุงเทพมหานครวางแผนแก้ไขประเด็นนี้เช่นกัน เพื่อกรุงเทพมหานครเป็น
        </p>
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevron-down"
        />
        <div class="header-3 header-box mb-2">มหานครปลอดภัย</div>
        <p class="text-2 m-0 font-weight-bold">ในมิติ “ปลอดมลพิษ”</p>
        <img :src="sample" alt="" class="mb-3" />
        <div class="text-2 institute-box">
          หน่วยงาน <b> “ต้องรับผิดชอบ ในการแก้ปัญหานี้”</b> คือ
          <ul class="text-left">
            <li>สำนักการระบายน้ำ</li>
            <li>สำนักสิ่งแวดล้อม</li>
            <li>สำนักงานเขต</li>
          </ul>
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
      year_chart: require("~/assets/images/year_chart.png"),
      sample: require("~/assets/images/sample.png"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
  padding: 121px;
}

.result {
  background: linear-gradient(0deg, #538dff 0%, rgba(232, 228, 216, 1) 100%);
  mix-blend-mode: normal;
}

.black-box {
  background: rgba(0, 0, 0, 0.86);
  color: #fff;
  padding: 42px 86px;
  width: 650px;
  border-radius: 10px;
  margin: 0 auto;
}

.border-black-box {
  border: 1px solid #000000;
  width: 396px;
  font-weight: bold;
  margin: 20px auto;
}

.result-box {
  width: 383px;
  background: #ffffff;
  padding: 26px 44px;
}

.chevron-down {
  font-size: 18px;
}

.header-box {
  background: #538dff;
  border: 1px solid #000000;
  color: #ffffff;
}

.institute-box {
  background: #f4f4f4;
  border: 1px solid #000000;
  padding: 10px 50px;
}
</style>