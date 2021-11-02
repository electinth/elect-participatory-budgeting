<template>
  <div>
    <div class="p-sm-5 p-3 text-center" v-if="isShowChooseProject">
      <p class="header-3">เลือกโครงการที่อยากพัฒนาเลือกได้ 3 โครงการ</p>
      <b-row class="justify-content-center">
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
        <b-col cols="8" sm="6">
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
            <p class="text-4 m-0">({{ item.desc }})</p>
          </div>

          <button
            class="sent-comment text-3"
            :disabled="selected_project.length == 0"
            @click="sendData"
          >
            ส่งความคิดเห็น
          </button>
        </b-col>
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
      </b-row>
    </div>

    <div
      class="h-100vh bg-main p-5 loading-div"
      :class="{ 'd-none': !isShowLoading }"
      :test="isShowLoading"
    >
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

    <div class="h-100vh p-3 p-sm-5 text-center h-auto-mobile">
      <p class="header-3 m-0">ไอเดียโดนใจชาวกรุงเทพฯ ผู้ใช้แพลตฟอร์มนี้</p>
      <p class="text-2">(เลือกดูผลโหวตโครงการจากผู้เล่นทั้งหมด)</p>

      <div class="d-flex justify-content-center">
        <div class="d-flex mx-1 flex-column flex-sm-row text-left">
          <span class="text-3 mr-2 my-auto">ประเภทประชากร</span>
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-dropdown"
            @change="onChangePeopleType"
          ></b-form-select>
        </div>
        <div class="d-flex mx-1 flex-column flex-sm-row text-left">
          <span class="text-3 mr-2 my-auto">พื้นที่</span
          ><DistrictDropdown
            @change="onChangeDistrictFilter"
            :disabled="selected == 3"
            type="2"
          />
        </div>
      </div>

      <div v-for="(item, index) in project" :key="index" class="chart-box">
        <div class="d-flex text px-3">
          <p class="text-1 m-0">{{ item.name }}</p>
          <p class="text-1 m-0">
            ({{
              project_count[index].count != 0
                ? parseInt(100 / project_count[index].count) + "%"
                : "0%"
            }})
          </p>
        </div>
        <div
          :style="{
            width:
              project_count[index].count != 0
                ? parseInt(100 / project_count[index].count) + '%'
                : '0%',
            backgroundColor: item.colorHover,
          }"
        ></div>
      </div>

      <div
        class="
          d-flex
          justify-content-center
          flex-column flex-lg-row
          mx-auto
          text-left
          mt-3
          budget-box
        "
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

      <button
        class="sent-comment text-3 mt-5"
        @click="$bvModal.show('modal-comment')"
      > <div class="d-flex"><img :src="icon_idea" width="20" class="mr-2" alt="">
        เสนอไอเดียเพิ่มเติม</div>
      </button>
    </div>

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
        <p class="text-4 mb-1">
          คุณใช้ชีวิตอยู่ในกรุงเทพมหานครหรือไม่? (เรียน/ทำงาน/พักอาศัย)
        </p>
        <div class="text-center">
          <button class="isinbkk-btn btn-text-1" @click="onClickBkk(true)">
            ใช่
          </button>
          <button class="isinbkk-btn btn-text-1" @click="onClickBkk(false)">
            ไม่ใช่
          </button>
        </div>
        <p class="text-4 mb-0 mt-2" v-if="isShowDistrict">คุณอยู่เขตไหน?</p>
        <DistrictDropdown
          @change="onChangeDistrict"
          v-if="isShowDistrict"
          type="1"
        />
        <p class="text-4 mb-0 mt-2" v-if="isShowProvince">คุณอยู่จังหวัดไหน?</p>
        <ProvinceDropdown @change="onChangeProvince" v-if="isShowProvince" />
        <p class="text-4 mb-0 mt-2" v-if="isShowDistrict">มีทะเบียนบ้านไหม?</p>
        <div class="text-center" v-if="isShowDistrict">
          <button
            class="has-house-reg-btn btn-text-1"
            @click="onClickHouseReg(true)"
          >
            มี
          </button>
          <button
            class="has-house-reg-btn btn-text-1"
            @click="onClickHouseReg(false)"
          >
            ไม่มี
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-comment"
      ref="comment-modal"
      title="Second Modal"
      no-fade
      centered
      hide-footer
      hide-header
    >
      <p class="header-3 text-white text-center">
        ขอเสนอโครงการเพิ่มเติมเพื่อออกแบบงบประมาณพัฒนาเมือง
      </p>
      <div class="comment-box p-4 text-center">
        <p class="text-1 text-left">มีอะไรเพิ่มเติมอยากเสนอกรุงเทพฯไหม?</p>
        <div>
          <textarea
            name=""
            class="form-control text-4"
            v-model="comment"
            placeholder="เช่น เสนอให้มีโครงการสอนภาษาญี่ปุ่น..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button class="sent-comment text-3 mt-3 bg-white" @click="sendComment">
          ส่ง
        </button>
      </div>
    </b-modal>

    <b-modal
      id="modal-cookie"
      ref="cookie-modal"
      title="Second Modal"
      centered
      hide-footer
      hide-header
      hide-backdrop
      no-close-on-backdrop
    >
      <div class="asking-box p-4 text-center" style="min-height: auto">
        <img :src="icon_info" alt="" width="100" />
        <p class="text-1 text-center mt-3">
          กรุณากดยอมรับคุกกี้ก่อนโหวตโครงการ
        </p>
      </div>
    </b-modal>
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
      district: null,
      comment: "",
      illus_section_05: require("~/assets/images/illus_section_05.svg"),
      icon_info: require("~/assets/images/icon_info.svg"),
      icon_idea: require("~/assets/images/icon_idea.svg"),
      project: [
        {
          id: 1,
          name: "ปรับปรุงระบบจัดการขยะ",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 2,
          name: "พัฒนาทางเท้า ทางข้าม",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 3,
          name: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 4,
          name: "จัดการการจราจรติดขัด",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 5,
          name: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 6,
          name: "เพิ่มพื้นที่สีเขียว",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 7,
          name: "พัฒนาระบบการศึกษา",
          desc: "มหานครสำหรับทุกคน",
          colorHover: "#C3DA14",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 8,
          name: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          desc: "มหานครประชาธิปไตย",
          colorHover: "#D170FF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 9,
          name: "จัดระเบียบผังเมืองให้เหมาะสม",
          desc: "มหานครกระชับ",
          colorHover: "#FF583E",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 10,
          name: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          desc: "มหานครแห่งเศรษฐกิจและเรียนรู้",
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
      isShowDistrict: false,
      isShowProvince: false,
      isAcceptCookie: false,
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

    if (!this.$cookies.get("isVoted")) {
      this.isShowChooseProject = true;
    } else {
      this.isShowChooseProject = false;
    }
  },
  computed: {
    setWidth(count) {
      var result = 0;
      if (count != 0) result = 100 / count;
      return result;
    },
  },
  methods: {
    setSelected(id, val) {
      if (this.$cookies.get("uuid") === undefined) {
        this.$refs["cookie-modal"].show();
        setTimeout(() => {
          this.$refs["cookie-modal"].hide();
        }, 2000);
      } else {
        if (
          this.$cookies.get("hasAnswer") !== undefined &&
          this.$cookies.get("hasAnswer")
        ) {
          this.onCheckIsDuplicate(id);
          if (this.selected_project.length <= 3) {
            var filter = this.project.filter((x) => x.id == id);
            if (!val) filter[0].isSelected = true;
            else filter[0].isSelected = false;
          } else {
          }

          if (this.selected_project.length >= 3) this.isLimit = true;
          else this.isLimit = false;
        } else this.$refs["asking-modal"].show();
      }
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
      this.isShowLoading = false;

      this.project_count.forEach((element, i) => {
        element.count = 0;
      });

      const ref = this.$fire.database.ref("user");
      var array = [];

      try {
        const snapshots = await ref.once("value");

        for (const [key, value] of Object.entries(snapshots.val())) {
          if (this.selected == 1) {
            if (
              value.isInBkk &&
              value.hasHouseReg &&
              value.district == this.district
            ) {
              array.push(value.userid);
            } else if (
              value.isInBkk &&
              value.hasHouseReg &&
              this.district == null
            ) {
              array.push(value.userid);
            }
          } else if (this.selected == 2) {
            if (value.isInBkk && !value.hasHouseReg) {
              array.push(value.userid);
            }
          } else {
            if (!value.isInBkk) array.push(value.userid);
          }
        }
      } catch (e) {
        alert(e);
      }

      const refProject = this.$fire.database.ref("project");

      try {
        const snapshots = await refProject.once("value");

        for (const [key, value] of Object.entries(snapshots.val())) {
          for (const arr of array) {
            if (arr == value.userid) {
              if (value.projectid == 1) {
                this.project_count[0].count += 1;
              } else if (value.projectid == 2) {
                this.project_count[1].count += 1;
              } else if (value.projectid == 3) {
                this.project_count[2].count += 1;
              } else if (value.projectid == 4) {
                this.project_count[3].count += 1;
              } else if (value.projectid == 5) {
                this.project_count[4].count += 1;
              } else if (value.projectid == 6) {
                this.project_count[5].count += 1;
              } else if (value.projectid == 7) {
                this.project_count[6].count += 1;
              } else if (value.projectid == 8) {
                this.project_count[7].count += 1;
              } else if (value.projectid == 9) {
                this.project_count[8].count += 1;
              } else {
                this.project_count[9].count += 1;
              }
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async sendData() {
      this.isShowLoading = true;
      this.isShowChooseProject = false;

      var array = [];
      var arrayForExcel = [];
      var arrayFb = [];

      const messageRef = this.$fire.database.ref("user");

      for (var i = 0; i < this.selected_project.length; i++) {
        var result = this.project.filter(
          (x) => x.id == this.selected_project[i]
        );

        array.push({
          projectid: this.selected_project[i],
          userid: this.$cookies.get("uuid"),
        });

        arrayForExcel.push({
          userid: this.$cookies.get("uuid"),
          projectid: this.selected_project[i],
          name: this.project.filter((x) => x.id == this.selected_project[i])[0]
            .name,
          dimension: this.project.filter(
            (x) => x.id == this.selected_project[i]
          )[0].desc,
          district: "",
          province: "",
          hashousereg: "",
          isinbkk: "",
        });
      }

      try {
        var data = await messageRef.once("value");
        var r = data.val();

        for (const [key, value] of Object.entries(r)) {
          if (value.userid == this.$cookies.get("uuid")) {
            arrayFb.push(value);
            break;
          }
        }
      } catch (e) {
        alert(e);
        return;
      }

      for (var i = 0; i < arrayForExcel.length; i++) {
        arrayForExcel[i].district =
          arrayFb[0].district == "" ? "-" : arrayFb[0].district;
        arrayForExcel[i].province =
          arrayFb[0].province == "" ? "-" : arrayFb[0].province;
        arrayForExcel[i].hashousereg = arrayFb[0].hasHouseReg ? "มี" : "ไม่มี";
        arrayForExcel[i].isinbkk = arrayFb[0].isInBkk ? "อยู่" : "ไม่อยู่";
      }

      const sequence = this.$fire.database
        .ref("sequence")
        .child("project_sequence");
      const messageRefProject = this.$fire.database.ref("project");

      try {
        var a = await sequence.once("value");
        var count = a.val();

        for (var i = 0; i < array.length; i++) {
          await messageRefProject.child(++count).set(array[i]);
        }

        sequence.set(count);
      } catch (e) {
        alert(e);
        return;
      }

      await this.$axios
        .$post(googleSheetUrlProject, arrayForExcel)
        .then((response) => {
          console.log("send");
        })
        .catch((error) => {
          console.log(error);
        });

      this.$cookies.set("isVoted", true);

      setTimeout(() => {
        this.getData();
      }, 3000);
    },
    async sendComment() {
      const messageRef = this.$fire.database.ref("user");

      var arrayFb = [];

      try {
        var data = await messageRef.once("value");
        var r = data.val();

        for (const [key, value] of Object.entries(r)) {
          if (value.userid == this.$cookies.get("uuid")) {
            arrayFb.push(value);
            break;
          }
        }
      } catch (e) {
        alert(e);
        return;
      }

      await this.$axios
        .$post(googleSheetUrlComment, [
          {
            userid: arrayFb[0].userid,
            comment: this.comment,
            district: arrayFb[0].district == "" ? "-" : arrayFb[0].district,
            province: arrayFb[0].province == "" ? "-" : arrayFb[0].province,
            hashousereg: arrayFb[0].hasHouseReg != "" ? "มี" : "-",
            isinbkk: arrayFb[0].isInBkk != "" ? "อยู่" : "ไม่อยู่",
          },
        ])
        .then((response) => {
          console.log("send");
        })
        .catch((error) => {
          console.log(error);
        });

      this.$refs["comment-modal"].hide();
    },
    async onChangeDistrict(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("district").set("เขต" + val[0].th_name);
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    onChangeDistrictFilter(val) {
      this.district = null;
      if (val != null) this.district = "เขต" + val[0].th_name;
      this.getData();
    },
    onChangePeopleType(val) {
      this.selected = val;
      this.getData();
    },
    async onChangeProvince(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("province").set(val);
          }
        }

        this.onCheckHasCompleteAnswer();
      } catch (e) {
        alert(e);
      }
    },
    async onClickBkk(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("isInBkk").set(val);
          }
        }
      } catch (e) {
        alert(e);
      }

      if (val) {
        this.isShowDistrict = true;
        this.isShowProvince = false;
      } else {
        this.isShowDistrict = false;
        this.isShowProvince = true;
      }
    },
    async onClickHouseReg(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("hasHouseReg").set(val);
          }
        }
      } catch (e) {
        alert(e);
      }

      this.onCheckHasCompleteAnswer();
    },
    async onCheckHasCompleteAnswer(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            const snapshotsUser = await refUser.once("value");
            if (
              snapshotsUser.val().isInBkk &&
              snapshotsUser.val().district != "" &&
              snapshotsUser.val().hasHouseReg != ""
            ) {
              this.$cookies.set("hasAnswer", true);
            } else {
              if (
                !snapshotsUser.val().isInBkk &&
                snapshotsUser.val().province != ""
              ) {
                this.$cookies.set("hasAnswer", true);
              }
            }
            this.$refs["asking-modal"].hide();
          }
        }
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.h-auto-mobile {
  @media #{$mq-mini-mobile} {
    height: auto;
  }
}

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

  @media #{$mq-mobile} {
    width: 100%;
  }

  .text {
    position: absolute;
    top: 5px;
    z-index: 1;
    justify-content: space-between;
    width: 100%;

    p:first-child {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 50%;
      overflow: hidden;
    }
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
  @media #{$mq-mini-mobile} {
    width: 120px;
  }
}

.asking-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border-radius: 10px;
  color: #fff;
  min-height: 340px;
}

.comment-box {
  background: #dedede;
  border: 1px solid #000000;
  border-radius: 10px;
  min-height: 340px;
}

.has-house-reg-btn,
.isinbkk-btn {
  background: #ffffff;
  border: 1px solid #ffffff;
  padding: 5px;
  width: 50px;
}

.budget-box {
  width: 735px;
  @media #{$mq-mobile} {
    width: 100%;
  }
}
</style>