<template>
  <div>
    <div class="p-5 text-center" v-if="isShowChooseProject">
      <p class="header-3">เลือกโครงการที่อยากพัฒนาเลือกได้ 3 โครงการ</p>
      <b-row class="justify-content-center">
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
        <b-col cols="6">
          <div
            class="choice mb-3 mx-auto"
            :class="{ islimit: isLimit && !item.isSelected }"
            v-for="(item, index) in project"
            :key="index"
            :style="{
              '--color-hover': item.colorHover,
              backgroundColor: item.isSelected
                ? item.colorHover
                : item.colorOriginal,
            }"
            @click="setSelected(item.id, item.isSelected)"
          >
            <p class="header-3 m-0">{{ item.name }}</p>
            <p class="text-4 m-0">{{ item.desc }}</p>
          </div>

          <button
            class="sent-comment text-3"
            :disabled="selected_project.length == 0"
          >
            ส่งความคิดเห็น
          </button>
        </b-col>
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
      </b-row>
    </div>

    <div class="h-100vh bg-main p-5 loading-div" v-if="isShowLoading">
      <div class="d-flex justify-content-center h-100 position-relative">
        <div class="w-50"><lottie :options="defaultOptions"></lottie></div>
      </div>
      <div class="section-text text-center">
        <h3 class="header-2 font-weight-bold">เรากำลังส่งข้อมูลของคุณ...</h3>
        <p class="text-1 w-50 mx-auto">
          ข้อมูลนี้จะรวบรวมยื่นต่อ ผู้ว่าราชการจังหวัดกรุงเทพมหานคร
          และหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
      </div>
    </div>

    <div class="h-100vh p-5 text-center">
      <p class="header-3 m-0">ไอเดียโดนใจชาวกรุงเทพฯ ผู้ใช้แพลตฟอร์มนี้</p>
      <p class="text-2">(เลือกดูผลโหวตโครงการจากผู้เล่นทั้งหมด)</p>

      <div class="d-flex justify-content-center">
        <div class="d-flex mx-1">
          <span class="text-3 mr-2 my-auto">ประเภทประชากร</span>
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-dropdown"
          ></b-form-select>
        </div>
        <div class="d-flex mx-1">
          <span class="text-3 mr-2 my-auto">พื้นที่</span><DistrictDropdown />
        </div>
      </div>

      <div v-for="(item, index) in project" :key="index" class="chart-box">
        <div class="d-flex text px-3">
          <p class="text-1 m-0">{{ item.name }}</p>
          <p class="text-1 m-0">
            ({{
              project_count[index].count != 0
                ? 100 / project_count[index].count + "%"
                : "0%"
            }})
          </p>
        </div>
        <div
          :style="{
            width:
              project_count[index].count != 0
                ? 100 / project_count[index].count + '%'
                : '0%',
            backgroundColor: item.colorHover,
          }"
        ></div>
      </div>

      <div
        class="d-flex justify-content-center mx-auto text-left mt-3"
        style="width: 735px"
      >
        <p class="m-0 text-3 w-auto">เทียบกับสัดส่วนงบประมาณกรุงเทพฯ ปี 2564</p>
        <div class="chart w-100 d-flex">
          <div class="bg-blue chart" style="width: 57.81%"></div>
          <div class="bg-green chart" style="width: 13.45%"></div>
          <div class="bg-red chart" style="width: 19.02%"></div>
          <div class="bg-pink chart" style="width: 0.28%"></div>
          <div class="bg-orange chart" style="width: 0.18%"></div>
          <div class="bg-green-2 chart" style="width: 9.26%"></div>
          <div class="bg-purple chart" style="width: 0%"></div>
        </div>
      </div>

      <button class="sent-comment text-3 mt-5">เสนอไอเดียเพิ่มเติม</button>
    </div>
  </div>
</template>

<script>
const googleSheetUrlProject =
  "https://cheesy.punchup.world/api/project/617ba453e90567588618dcfb/sheet/project/row";
const googleSheetUrlComment =
  "https://cheesy.punchup.world/api/project/617ba453e90567588618dcfb/sheet/comment/row";
import Axios from "axios";
import * as animationData from "~/assets/lottie/send_project_loading.json";
import Lottie from "vue-lottie/src/lottie.vue";

export default {
  components: { Lottie },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
      tabIndex: 0,
      selected: 1,
      illus_section_05: require("~/assets/images/illus_section_05.svg"),
      project: [
        {
          id: 1,
          name: "ปรับปรุงระบบจัดการขยะ",
          desc: "(มหานครปลอดภัย)",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 2,
          name: "พัฒนาทางเท้า ทางข้าม",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 3,
          name: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          desc: "(มหานครปลอดภัย)",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 4,
          name: "จัดการการจราจรติดขัด",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 5,
          name: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          desc: "(มหานครปลอดภัย)",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 6,
          name: "เพิ่มพื้นที่สีเขียว",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 7,
          name: "พัฒนาระบบการศึกษา",
          desc: "(มหานครสำหรับทุกคน)",
          colorHover: "#C3DA14",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 8,
          name: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          desc: "(มหานครประชาธิปไตย)",
          colorHover: "#D170FF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 9,
          name: "จัดระเบียบผังเมืองให้เหมาะสม",
          desc: "(มหานครกระชับ)",
          colorHover: "#FF583E",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 10,
          name: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          desc: "(มหานครแห่งเศรษฐกิจและเรียนรู้)",
          colorHover: "#C3DA14",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
      ],
      project_count: [
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 },
        { id: 5, count: 0 },
        { id: 6, count: 0 },
        { id: 7, count: 0 },
        { id: 8, count: 0 },
        { id: 9, count: 0 },
        { id: 10, count: 0 },
      ],
      selected_project: [],
      isLimit: false,
      isShowChooseProject: true,
      isShowLoading: false,
      options: [
        {
          value: 1,
          text: "คนกรุงเทพฯ / มีทะเบียนบ้าน",
        },
        {
          value: 2,
          text: "คนกรุงเทพฯ / ไม่มีทะเบียนบ้าน",
        },
        {
          value: 3,
          text: "คนต่างจังหวัด",
        },
      ],
    };
  },
  mounted() {
    this.getData();
    //this.test();
    // await this.sendData();
    // await this.sendComment();
  },
  computed: {
    setWidth(count) {
      var result = 0;
      if (count != 0) result = 100 / count;
      return result;
    },
  },
  methods: {
    async test(){
       const messageRef3 = this.$fire.database.ref("project");
        const w = this.$fire.database.ref("sequence").child("project_sequence");

        try {
          var b = await w.once("value");
          var d = b.val();

          for (var i = 0; i < 10; i++) {
            await messageRef3.child(++d).set({
              userid: this.$cookies.get("uuid"),
              projectid: i + 1,
            });
          }

          w.set(d);
        } catch (e) {
          alert(e);
          return;
        }
        alert("Success.");
    },
    setSelected(id, val) {
      this.onCheckIsDuplicate(id);

      if (this.selected_project.length <= 3) {
        var filter = this.project.filter((x) => x.id == id);
        if (!val) filter[0].isSelected = true;
        else filter[0].isSelected = false;
      } else {
      }

      if (this.selected_project.length >= 3) this.isLimit = true;
      else this.isLimit = false;
    },
    onCheckIsDuplicate(id) {
      if (this.selected_project.length > 0) {
        var index = this.selected_project.indexOf(id);
        if (index !== -1) {
          this.selected_project.splice(index, 1);
        } else this.selected_project.push(id);
      } else {
        this.selected_project.push(id);
      }
    },
    async getData() {
      const ref = this.$fire.database.ref("project");

      try {
        const snapshots = await ref.once("value");

        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.isSelected) {
            var filter = this.project_count.filter(
              (x) => x.id == value.projectid
            );
            filter[0].count += 1;
          }
        }
      } catch (e) {
        alert(e);
      }

      //console.log(JSON.stringify(this.project_count));
    },
    async sendData() {
      await this.$axios
        .$post(googleSheetUrlProject, [
          {
            userid: "Poppap",
            projectid: "Poppap",
            isselected: "Poppap",
            name: "Poppap",
            dimension: "Poppap",
            district: "Poppap",
            province: "Poppap",
            hashousereg: "Poppap",
            isinbkk: "Poppap",
          },
        ])
        .then((response) => {
          console.log("send");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async sendComment() {
      await this.$axios
        .$post(googleSheetUrlComment, [
          {
            userid: "Poppap",
            projectid: "Poppap",
            isselected: "Poppap",
            name: "Poppap",
            dimension: "Poppap",
            district: "Poppap",
            province: "Poppap",
            hashousereg: "Poppap",
            isinbkk: "Poppap",
          },
        ])
        .then((response) => {
          console.log("send");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.choice {
  background-color: #e5e5e5;
  border-radius: 10px;
  width: 100%;
  padding: 7px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: 0.2s;
}

.choice:hover {
  border: 3px solid var(--color-hover);
}

.sent-comment {
  background: none;
  padding: 10px;
  border: 0.75px solid #000000;
  border-radius: 5px;
}

.islimit {
  opacity: 0.5;
  pointer-events: none;
}

.section-text {
  position: absolute;
  top: 52%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  p {
    margin-top: 50%;
  }
}

.loading-div {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 999;
}

.chart {
  height: 41.87px;
}

.chart-box {
  height: 41.87px;
  text-align: left;
  width: 735px;
  margin: 10px auto;
  background: #ececec;
  position: relative;

  .text {
    position: absolute;
    top: 5px;
    z-index: 1;
    justify-content: space-between;
    width: 100%;
  }

  div {
    position: absolute;
    //padding: 0 20px;
    height: 41.87px;
    transition: 0.3s;
  }
}

.select-dropdown {
  width: 200px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}
</style>