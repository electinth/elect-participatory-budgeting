<template>
  <div>
    <div class="bg-main text-center">
      <p class="header-3 m-0">
        รู้หรือไม่<br />กรุงเทพมหานครวางแผนพัฒนาระยะ 20 ปี <br />
        (พ.ศ. 2556-2575) ขึ้นมา เพื่อจะก้าวไปสู่การเป็น
      </p>
      <div class="header-2 font-weight-bold">“มหานครแห่งเอเชีย”</div>
      <img :src="illus_open_01" alt="" class="mt-3" width="696" />
      <p class="header-3 mt-3">แล้วปี 2565 เรากำลังเดินมาถึงครึ่งทางแล้ว</p>
      <img :src="year_chart" alt="" class="my-3" width="550" />
      <p class="header-3 mt-5">
        แต่ทุกวันนี้...กรุงเทพมหานครก็ยังดูไม่เหมือนเมืองในฝันที่เราวาดไว้ใช่ไหม?<br />
        แล้วอะไรล่ะที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้
      </p>
      <p class="text-3">(คลิกเพื่อเลือกปัญหา)</p>

      <div class="d-flex justify-content-center mt-5">
        <div v-for="(item, i) in problems.filter((x) => x.id < 5)" :key="i">
          <div
            @click="showProblemResult(item)"
            class="problem-pic"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/problem/problem_' + item.id + '.png') +
                ')',
              '--varName': item.color,
            }"
          ></div>
          <p class="text-2 m-auto font-weight-bold problem-name">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <div v-for="(item, i) in problems.filter((x) => x.id > 4)" :key="i">
          <div
            @click="showProblemResult(item)"
            class="problem-pic"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/problem/problem_' + item.id + '.png') +
                ')',
              '--varName': item.color,
            }"
          ></div>
          <p class="text-2 m-auto font-weight-bold problem-name">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="h-100vh result d-flex justify-content-center align-items-center"
    >
      <div
        class="result-box text-center"
        :style="{
          background: color,
        }"
      >
        <h1 class="header-3 font-weight-bold my-3">{{ title }}</h1>
        <img :src="pic" alt="" class="mb-3" width="150" />
        <p class="text-2 m-0 font-weight-bold">
          ยังเป็นปัญหาที่ยังค้างคาใจคุณอยู่
        </p>
        <p class="text-4 m-0">
          กรุงเทพมหานครวางแผนแก้ไขประเด็นนี้เช่นกัน เพื่อกรุงเทพมหานครเป็น
        </p>
        <p class="text-2 m-0 font-weight-bold">มหานครปลอดภัย</p>
        <div class="header-3 header-box my-3">ในมิติ “ปลอดมลพิษ”</div>

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
      illus_open_01: require("~/assets/images/illus_open_01.png"),
      color: "#FFF",
      title: "น้ำเน่าเสีย ขยะ ฝุ่นละออง",
      pic: require("~/assets/images/problem/problem_1.png"),
      problems: [
        {
          id: 1,
          name: "น้ำเน่าเสีย ขยะ ฝุ่นละออง",
          img: require("~/assets/images/problem/problem_1.png"),
          color: "#538DFF",
        },
        {
          id: 2,
          name: "พื้นที่สีเขียว และสวนสาธารณะ",
          img: require("~/assets/images/problem/problem_2.png"),
          color: "#6ADC7B",
        },
        {
          id: 3,
          name: "การทุจริต คอร์รัปชั่น",
          img: require("~/assets/images/problem/problem_3.png"),
          color: "#FF8310",
        },
        {
          id: 4,
          name: "สาธารณูปโภคพื้นฐาน ให้ผู้พิการ",
          img: require("~/assets/images/problem/problem_4.png"),
          color: "#FF583E",
        },
        {
          id: 5,
          name: "ระบบสารสนเทศ ในการให้บริการ ประชาชน",
          img: require("~/assets/images/problem/problem_5.png"),
          color: "#D170FF",
        },
        {
          id: 6,
          name: "แหล่งท่องเที่ยว เสื่อมโทรม",
          img: require("~/assets/images/problem/problem_6.png"),
          color: "#C3DA14",
        },
        {
          id: 7,
          name: "การจัดระบียบ ความหนาแน่น ของเมือง",
          img: require("~/assets/images/problem/problem_7.png"),
          color: "#FF9FDF",
        },
      ],
    };
  },
  methods: {
    showProblemResult(data) {
      this.color = data.color;
      this.title = data.name;
      this.pic = data.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
  padding: 121px;
}

.result {
  background: #e8e4d8;
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
  //background: #ffffff;
  padding: 26px 44px;
}

.chevron-down {
  font-size: 18px;
}

.header-box {
  background: #fff;
  border: 1px solid #000000;
  font-weight: bold;
}

.institute-box {
  background: #f4f4f4;
  border: 1px solid #000000;
  padding: 10px 50px;
}

.problem-name {
  width: 180px;
}

.problem-pic {
  width: 150px;
  height: 150px;
  margin: 10px auto;
  position: relative;
  background-size: contain;
  cursor: pointer;
}

.problem-pic:hover:before {
  height: 100%;
}

.problem-pic:before {
  content: "";
  border-radius: 50%;
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  opacity: 0.7;
  mix-blend-mode: multiply;
  background: linear-gradient(
    0deg,
    var(--varName) 0%,
    rgba(83, 141, 255, 0) 100%
  );
}
</style>