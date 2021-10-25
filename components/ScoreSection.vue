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
        <img
          v-for="(item, i) in problems.filter((x) => x.id < 5)"
          :key="i"
          :src="item.book_img"
          alt=""
          class="pointer mx-3"
          width="150"
          @click="showResult(item)"
        />
      </div>

      <div class="d-flex justify-content-center mt-3">
        <img
          :src="item.book_img"
          alt=""
          class="pointer mx-3"
          width="150"
          v-for="(item, i) in problems.filter((x) => x.id > 4)"
          :key="i"
          @click="showResult(item)"
        />
      </div>

      <b-modal
        id="modal-1"
        ref="result-modal"
        no-fade
        centered
        hide-footer
        hide-header
        hide-backdrop
        size="xl"
      >
        <div>
          <b-row v-if="results[0].color != null">
            <b-col sm="6"
              ><div
                class="px-3 py-4 result-box ml-auto h-100"
                :style="{
                  background: results[0].color,
                }"
              >
                <b-button class="close-btn" @click="$bvModal.hide('modal-1')">
                  <font-awesome-icon
                    :icon="['fas', 'times']"
                    class="backward mr-1"
                  />
                </b-button>
                <div class="text-center">
                  <p class="text-2 m-0">คุณคิดว่ากรุงเทพฯ เป็น</p>
                  <div class="side-box header-3 font-weight-bold">
                    {{ results[0].side }}
                  </div>
                  <p class="text-2 font-weight-bold">แค่ไหนสำหรับคุณ</p>
                  <p class="text-4 m-0">(กดดาวเพื่อให้คะแนน)</p>
                  <div class="d-flex my-3 justify-content-center">
                    <img
                      :src="star_not_selected"
                      v-for="item in 5"
                      alt=""
                      width="35"
                      class="mx-2"
                      @click="onCheckVoteCondition()"
                    />
                  </div>
                  <div class="bg-white logo-icon">
                    <img :src="results[0].icon" alt="" width="170" />
                  </div>

                  <p class="text-3 mt-3">
                    {{ results[0].desc }}
                  </p>
                </div>
              </div></b-col
            >
            <b-col sm="6">
              <div
                class="result-box px-3 py-4 h-100 justify-content-start"
                :style="{
                  background: results[0].color,
                }"
              >
                <div
                  class="bg-white p-2 my-2"
                  v-for="(data, a) in results[0].dimension"
                  :key="a"
                >
                  <div class="d-flex">
                    <div class="problem-title">
                      <p class="text-4 font-weight-bold m-0">{{ data.name }}</p>
                    </div>
                    <div class="line"></div>
                    <div class="m-auto">
                      <p class="text-4 pl-2 m-0">
                        {{ data.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-modal>

      <b-modal
        id="modal-2"
        ref="asking-modal"
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
import firebase from "firebase";

export default {
  name: "App",
  components: { DistrictDropdown },
  data() {
    return {
      pic_section_02: require("~/assets/images/pic_section_02.svg"),
      star_not_selected: require("~/assets/images/icon_star_all.svg"),
      star_selected: require("~/assets/images/icon_star_person.svg"),
      isShow: false,
      problems: [
        {
          id: "1",
          side: "มหานครปลอดภัย",
          color: "#538DFF",
          icon: require("~/assets/images/book/icon_card.1.svg"),
          book_img: require("~/assets/images/book/book_01.png"),
          desc: "เป็นเมืองมหานครที่ปลอดมลพิษ ปลอดอาชญากรรม และยาเสพติด ปลอดอุบัติเหตุ ปลอดภัยพิบัติ สิ่งก่อสร้างปลอดภัย ปลอดโรคคนเมือง และอาหารปลอดภัย",
          dimension: [
            {
              name: "ปลอดมลพิษ",
              desc: "มีระบบการจัดการน้ำเสียและระบายน้ำ ระบบจัดการขยะ ระบบการควบคุมฝุ่นละออง ควบคุมระดับเสียงในเขตเมืองที่มีประสิทธิภาพ",
            },
            {
              name: "ปลอดอาชญากรรมและยาเสพติด",
              desc: "สามารถควบคุมอัตราการเกิดคดีอาชญากรรม และยาเสพติด",
            },
            {
              name: "ปลอดอุบัติเหตุ",
              desc: "มีการบังคับใช้กฏหมายจราจร อย่างเคร่งครัด",
            },
            {
              name: "ปลอดภัยพิบัติ",
              desc: "ปลอดภัยจากภัยพิบัติทางธรรมชาติ ได้แก่ น้ำท่วมและการกัดเซาะชายฝั่ง",
            },
            {
              name: "สิ่งก่อสร้างปลอดภัย",
              desc: "มีความปลอดภัยต่อการใช้งาน อาคารสาธารณะ อุบัติภัยจากสิ่งปลูกสร้าง",
            },
            {
              name: "ปลอดโรคคนเมือง อาหารปลอดภัย",
              desc: "ปลอดโรค ที่เกิดจากการดำเนินวิถีชีวิตแบบคนเมือง เช่น ความเร่งรีบ",
            },
          ],
        },
        {
          id: "2",
          side: "\nมหานครสีเขียวสะดวกสบาย",
          color: "#6ADC7B",
          icon: require("~/assets/images/book/icon_card.2.svg"),
          book_img: require("~/assets/images/book/book_02.png"),
          desc: "เป็นมหานคร ชาวกรุงเทพฯใกล้ชิดกับธรรมชาติ มีพื้นที่สีเขียวเหมาะกับขนาดพื้นที่และประชากร และมีระบบคมนาคมขนส่งหลากหลาย สะดวก พร้อมมีทัศนียภาที่สวยงาม เป็นระเบียบ",
          dimension: [
            {
              name: "ภูมิทัศน์สวยงาม",
              desc: "ต้องจัดระเบียบเมือง เร่งลงทุนพัฒนาระบบท่อร้อยสาย ระบบสาธารณูปโภคใต้ดิน",
            },
            {
              name: "พื้นที่สวนสาธารณะ พื้นที่สีเขียวกระจายทั่วพื้นที่",
              desc: "มีพื้นที่สีเขียวกระจายครอบคลุมไปทั่วพื้นที่กรุงเทพมหานคร",
            },
            {
              name: "ระบบขนส่งมวลชนทั่วถึง สะดวก ประหยัดการจราจรคล่องตัว และมีทางเลือก",
              desc: "มีระบบขนส่งมวลชน และระบบการคมนาคม ทางเลือกต่าง ๆ อย่างทั่วถึง",
            },
            {
              name: "การใช้พลังงานที่มีประสิทธิภาพและพลังงานทางเลือก",
              desc: "กรุงเทพมหานครเป็นเมืองที่ประหยัดพลังงาน ใช้พลังงานสะอาดเป็นมิตรกับสิ่งแวดล้อม",
            },
          ],
        },
        {
          id: "3",
          side: "\nมหานครสำหรับทุกคน",
          color: "#FF583E",
          icon: require("~/assets/images/book/icon_card.3.svg"),
          book_img: require("~/assets/images/book/book_03.png"),
          desc: "เป็นมหานครที่โดดเด่นในเชิงวัฒนธรรมที่หลากหลาย ชาวกรุงเทพฯ ทุกคน ทุกชนชั้น ทุกอาชีพ ทุกเพศ ทุกวัย และทุกสถานภาพ อยู่ร่วมกันอย่างเสมอภาคและสมานฉันท์ เกื้อกูลซึ่งกันและกัน พร้อมทั้งสามารถดำรงรักษาไว้ ซึ่งอัตลักษณ์ ประเพณีวัฒนธรรมของตนเอง",
          dimension: [
            {
              name: "การจัดสิ่งอำนวยความสะดวก สวัสดิการและการสงเคราะห์ และการดูแลสุขภาพให้กับผู้สูงอายุคนพิการ และผู้ด้อยโอกาส",
              desc: "ปรับปรุงระบบสาธารณูปโภคพื้นฐาน สามารถเข้าถึงได้ อย่างเท่าเทียมกับประชาชนทั่วไป",
            },
            {
              name: "เมืองแห่งโอกาสทางเศรษฐกิจ",
              desc: "มีระบบการจัดการอาชีพและการแสวงหารายได้ ที่สามารถ เพิ่มโอกาส",
            },
            {
              name: "การศึกษาสำหรับทุกคน",
              desc: "สามารถจัดการศึกษาให้กับเด็กเยาวชน ในพื้นที่กรุงเทพฯ อย่างทั่วถึง",
            },
            {
              name: "สังคมพหุวัฒนธรรม",
              desc: "ส่งเสริมให้ประชาชนและเยาวชนกรุงเทพฯ เรียนรู้วัฒนธรรมเมืองกรุงเทพฯ",
            },
          ],
        },
        {
          id: "4",
          side: "\nมหานครกระชับ",
          color: "#FF9FDF",
          icon: require("~/assets/images/book/icon_card.4.svg"),
          book_img: require("~/assets/images/book/book_04.png"),
          desc: "การพัฒนาพื้นที่ของกรุงเทพฯ ให้มีศูนย์กลางการให้บริการ และพัฒนาเมืองในลักษณะเมืองเครือข่าย เพื่อให้กรุงเทพมหานครมีการเติบโตแบบกระชับ",
          dimension: [
            {
              name: "กรุงเทพมหานครเติบโตอย่างเป็นระเบียบตามผังเมืองรวม",
              desc: "การปรับปรุงการขนส่งภายในเมืองและการกำหนด ขนาดเมือง (size) ความหนาแน่นในเมืองให้ เกิดเป็นสัดส่วนที่เหมาะสม",
            },
            {
              name: "กรุงเทพมหานครปรับตัวรองรับการเปลี่ยนแปลง มีความทันสมัย ประชาชนมีคุณภาพชีวิตที่ดี มีความสุขเป็นเมืองน่าอยู่อย่างยั่งยืน",
              desc: "มีศักยภาพในการปรับตัวรองรับการเปลี่ยนแปลง และพัฒนาได้อย่างเหมาะสม",
            },
          ],
        },
        {
          id: "5",
          side: "\nมหานครประชาธิปไตย",
          color: "#FF8310",
          icon: require("~/assets/images/book/icon_card.5.svg"),
          book_img: require("~/assets/images/book/book_05.png"),
          desc: "มีระบบการบริหารงานที่มีประสิทธิภาพมีการเมืองที่สะอาด ปลอดคอร์รัปชั่น อีกทั้งทุกภาคส่วนไม่ว่าจะเป็นภาครัฐ ภาคธุรกิจ และภาคประชาชน มีบทบาทในการขับเคลื่อน วิสัยทัศน์กรุงเทพฯ อย่างเข้มแข็ง",
          dimension: [
            {
              name: "มหานครกรุงเทพแบบบูรณาการ",
              desc: "มีองค์การบริหารจัดการระบบสาธารณูปโภคมหานคร",
            },
            {
              name: "เมืองธรรมาภิบาล",
              desc: "มีสภาประชาชนกรุงเทพฯ และใช้ระบบ งบประมาณแบบมีส่วนร่วม",
            },
            {
              name: "การกระจายอำนาจสู่ประชาชน",
              desc: "มุ่งลดบทบาทของส่วนกลางและให้ประชาชนได้มีส่วน ในการบริหารงานชุมชนท้องถิ่นตามเจตนารมณ์มากขึ้น",
            },
            {
              name: "การเมืองสีขาว",
              desc: "ประชาชนมีความเชื่อมั่นในความซื่อสัตย์สุจริตข้าราชการ และผู้ดำรงตำแหน่งทางการเมืองของ กทม.",
            },
            {
              name: "พลเมืองกรุงเทพฯ ขับเคลื่อนวิสัยทัศน์",
              desc: "ฉันทามติของชาวกทม.จะร่วมกันติดตาม ตรวจสอบให้ กรุงเทพมหานครและหน่วยงานภาครัฐอื่น ๆ นำวิสัยทัศน์ไปปฏิบัติให้เกิดผลสำเร็จ",
            },
          ],
        },
        {
          id: "6",
          side: "\nมหานครแห่งเศรษฐกิจและเรียนรู้",
          color: "#C3DA14",
          icon: require("~/assets/images/book/icon_card.6.svg"),
          book_img: require("~/assets/images/book/book_06.png"),
          desc: "กรุงเทพฯ จะเป็นศูนย์กลางการค้าการลงทุนการท่องเที่ยว และวัฒนธรรมของเอเชียรวมถึงการเป็นศูนย์กลางการ เรียนรู้วิทยาการด้านต่าง ๆ ของภูมิภาค",
          dimension: [
            {
              name: "ศูนย์กลางด้านการเกษตร อุตสาหกรรม และบริการสีเขียว",
              desc: "เป็นตัวกลางในการซื้อขายแลกเปลี่ยนสินค้าเกษตร สินค้าอุตสาหกรรมเกษตร",
            },
            {
              name: "เมืองแห่งโอกาสทางธุรกิจและการลงทุน",
              desc: "ก้าวขึ้นสู่อันดับ 1 ใน 20 ของตลาดทุนโลกเพื่อรองรับ ธุรกิจด้านตลาดเงินและตลาดทุน",
            },
            {
              name: "เมืองแห่งนักท่องเที่ยวระดับโลก",
              desc: "เป็นแหล่งท่องเที่ยวที่สามารถดึงดูดนักท่องเที่ยว จากทั่วโลกมาสู่เมืองกรุงเทพฯ",
            },
            {
              name: "เมืองแห่งการจัดการประชุม นิทรรศการ\nและการจัดงานนานาชาติ",
              desc: "เป็นหนึ่งในสามของเมืองในภูมิภาคอาเซียนที่เป็น เมืองนวัตกรรม - วัฒนธรรม",
            },
          ],
        },
        {
          id: "7",
          side: "\nการบริหารจัดการเมืองมหานคร",
          color: "#D170FF",
          icon: require("~/assets/images/book/icon_card.7.svg"),
          book_img: require("~/assets/images/book/book_07.png"),
          desc: "กรุงเทพมหานครมีกฏหมาย ที่รับรองความเป็นอิสระและ ให้อำนาจในการบริหารจัดการตลอดจนรวมถึงการบริการ สาธารณะตามที่ประชาชนคาดหวัง",
          dimension: [
            {
              name: "กฎหมาย",
              desc: "มีกฏหมายที่รับรองความเป็นอิสระและให้อำนาจ ในการบริหารจัดการ",
            },
            {
              name: "การบริหารแผนและประเมินผล",
              desc: "ประเมินแผนพัฒนากรุงเทพมหานคร ระยะ 20 ปี ให้มีมีมาตรฐาน",
            },
            {
              name: "การบริหารทรัพยากรบุคคล",
              desc: "เป็นที่รวมของคนดี และคนเก่ง สามารถปฏิบัติงานได้",
            },
            {
              name: "การคลังและงบประมาณ",
              desc: "มีการบริหารจัดการด้านการเงินการคลังและการ งบประมาณ ที่มีความเป็นเลิศ",
            },
            {
              name: "เทคโนโลยีสารสนเทศ",
              desc: "มีระบบสารสนเทศเพื่อให้บริการที่ทันสมัย และถูกต้องแก่ประชาชน",
            },
          ],
        },
      ],
      results: [
        {
          side: "",
          color: "",
          icon: null,
          book_img: null,
          desc: "",
          dimension: [],
        },
      ],
    };
  },
  created() {},
  methods: {
    showResult(data) {
      this.results[0].color = data.color;
      this.results[0].side = data.side;
      this.results[0].icon = data.icon;
      this.results[0].dimension = data.dimension;
      this.results[0].book_img = data.book_img;
      this.results[0].desc = data.desc;
      this.$refs["result-modal"].show();
    },
    async onCheckVoteCondition() {
      //this.$refs['asking-modal'].show()
      //this.getScoreResult();
      // const messageRef = this.$fire.database.ref(this.$cookies.get("uuid"));
      // try {
      //   await messageRef.set({
      //     isInBkk: true,
      //     district: "เขตพระนคร",
      //     province: "",
      //     hasHouseRegistratiob: true,
      //     vote: [
      //       {
      //         id: 1,
      //         point: 3,
      //       },
      //       {
      //         id: 2,
      //         point: 2,
      //       },
      //       {
      //         id: 3,
      //         point: 1,
      //       },
      //       {
      //         id: 4,
      //         point: 4,
      //       },
      //       {
      //         id: 5,
      //         point: 5,
      //       },
      //       {
      //         id: 6,
      //         point: 0,
      //       },
      //       {
      //         id: 7,
      //         point: 3,
      //       },
      //     ],
      //     choice: [
      //       {
      //         id: 1,
      //         value: true,
      //       },
      //       {
      //         id: 2,
      //         value: true,
      //       },
      //       {
      //         id: 3,
      //         value: true,
      //       },
      //       {
      //         id: 4,
      //         value: false,
      //       },
      //       {
      //         id: 5,
      //         value: false,
      //       },
      //       {
      //         id: 6,
      //         value: false,
      //       },
      //       {
      //         id: 7,
      //         value: false,
      //       },
      //       {
      //         id: 8,
      //         value: false,
      //       },
      //       {
      //         id: 9,
      //         value: false,
      //       },
      //       {
      //         id: 10,
      //         value: false,
      //       },
      //     ],
      //   });

      //   this.getScoreResult();
      // } catch (e) {
      //   alert(e);
      //   return;
      // }
      // alert("Success.");
    },
    async getScoreResult() {
      const ref = this.$fire.database.ref(this.$cookies.get("uuid"));

      try {
        const snapshot = await ref.once("value");
        console.log(snapshot.val());
      } catch (e) {
        alert(e);
      }
    },
  },
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
    background: none;
    border: none;
    padding: 0;
    top: 25px;
    left: 25px;

    .fa-times {
      font-size: 20px;
      color: #000;
    }
  }
}

.line {
  width: 1px;
  background: #000;
  margin: 0 5px;
}

.problem-title {
  flex: 0 0 25%;
  margin: auto;
}

.asking-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border-radius: 10px;
  color: #fff;
}

.logo-icon {
  border-radius: 50%;
  width: 170px;
  margin: auto;
}

.side-box {
  background: #ffffff;
  border: 0.75px solid #000000;
  width: max-content;
  padding: 10px;
  margin: 5px auto;
}
</style>