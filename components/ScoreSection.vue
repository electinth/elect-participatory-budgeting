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
        <img :src="book_01" alt="" class="pointer mx-3" width="150" v-b-modal.modal-1/>
        <img :src="book_02" alt="" class="pointer mx-3" width="150" />
        <img :src="book_03" alt="" class="pointer mx-3" width="150" />
        <img :src="book_04" alt="" class="pointer mx-3" width="150" />
      </div>

      <div class="d-flex justify-content-center mt-3">
        <img :src="book_05" alt="" class="pointer mx-3" width="150" />
        <img :src="book_06" alt="" class="pointer mx-3" width="150" />
        <img :src="book_07" alt="" class="pointer mx-3" width="150" />
      </div>

      <b-modal
        id="modal-1"
        no-fade
        centered
        hide-footer
        hide-header
        hide-backdrop
        size="xl"
      >
        <div>
          <b-row>
            <b-col sm="6"
              ><div class="bg-white p-3 result-box ml-auto h-100">
                <b-button
                  size="sm"
                  variant="outline-danger"
                  class="close-btn"
                  @click="$bvModal.hide('modal-1')"
                >
                  x
                </b-button>
                <div class="text-center">
                  <p class="text-2">คุณคิดว่ากรุงเทพฯ เป็น</p>
                  <div>มหานครปลอดภัย</div>
                  <p class="text-2">แค่ไหนสำหรับคุณ</p>
                  <p class="text-4">(กดดาวเพื่อให้คะแนน)</p>
                  <img :src="icon_book_01" alt="" width="170" />
                  <p class="text-3">
                    เป็นเมืองมหานครที่ปลอดมลพิษปลอดอาชญากรรม และยาเสพติด
                    ปลอดอุบัติเหตุ ปลอดภัยพิบัติ สิ่งก่อสร้างปลอดภัย
                    ปลอดโรคคนเมือง และอาหารปลอดภัย
                  </p>
                </div>
              </div></b-col
            >
            <b-col sm="6"
              ><div class="bg-white p-3 result-box" v-for="item in 6">
                <div class="d-flex">
                  <div class="problem-title">
                    <p class="text-4 font-weight-bold m-0">ปลอดมลพิษ</p>
                  </div>
                  <div class="line"></div>
                  <div>
                    <p class="text-4 pl-2 m-0">
                      มีระบบการจัดการน้ำเสียและ ระบายน้ำระบบจัดการขยะ ระบบ
                      การควบคุมฝุ่นละออง ควบคุม
                      ระดับเสียงในเขตเมืองที่มีประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </div></b-col
            >
          </b-row>
        </div>
      </b-modal>

      <b-modal
        id="modal-2"
        title="Second Modal"
        no-fade
        centered
        hide-footer
        hide-header
        hide-backdrop
      >
        <div class="asking-box p-3 text-center">
          <p class="text-1 font-weight-bold">ขอสอบถามสั้นๆเกี่ยวกับคุณ</p>
          <p class="text-4">
            คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
            ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
          </p>
          <p class="text-4">
            คุณใช้ชีวิตอยู่ในกรุงเทพมหานครหรือไม่? (เรียน/ทำงาน/พักอาศัย)
          </p>
          <div class="text-center">
            <button>ใช่</button>
            <button>ไม่ใช่</button>
          </div>
          <p class="text-4">คุณอยู่เขตไหน?</p>
          <DistrictDropdown />
          <p class="text-4">มีทะเบียนบ้านไหม?</p>
          <div class="text-center">
            <button>มี</button>
            <button>ไม่มี</button>
          </div>
        </div>
      </b-modal>
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
import DistrictDropdown from "./DistrictDropdown.vue";
export default {
  name: "App",
  components: { DistrictDropdown },
  data() {
    return {
      book_01: require("~/assets/images/book/book_01.png"),
      book_02: require("~/assets/images/book/book_02.png"),
      book_03: require("~/assets/images/book/book_03.png"),
      book_04: require("~/assets/images/book/book_04.png"),
      book_05: require("~/assets/images/book/book_05.png"),
      book_06: require("~/assets/images/book/book_06.png"),
      book_07: require("~/assets/images/book/book_07.png"),
      icon_book_01: require("~/assets/images/book/icon_card.1.svg"),
      icon_book_02: require("~/assets/images/book/icon_card.2.svg"),
      icon_book_03: require("~/assets/images/book/icon_card.3.svg"),
      icon_book_04: require("~/assets/images/book/icon_card.4.svg"),
      icon_book_05: require("~/assets/images/book/icon_card.5.svg"),
      icon_book_06: require("~/assets/images/book/icon_card.6.svg"),
      icon_book_07: require("~/assets/images/book/icon_card.7.svg"),
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

.result-box {
  position: relative;
  width: 383px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .close-btn {
    position: absolute;
    top: 25px;
    left: 25px;
  }
}

.line {
  width: 1px;
  background: #000;
  margin: 0 5px;
}

.problem-title {
  width: 200px;
}

.asking-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border-radius: 10px;
  color: #fff;
}
</style>