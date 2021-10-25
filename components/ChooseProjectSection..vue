<template>
  <div>
    <div class="p-5 text-center">
      <p class="header-3">เลือกโครงการที่อยากพัฒนาเลือกได้ 3 โครงการ</p>
      <b-row class="justify-content-center">
        <b-col cols="2"
          ><img :src="illus_section_05" alt="" class="h-100vh"
        /></b-col>
        <b-col cols="6">
          <div class="choice mb-3 mx-auto" v-for="(item,index) in project" :key="index">
            <p class="header-3 m-0">{{item.name}}</p>
            <p class="text-4 m-0">{{item.desc}}</p>
          </div>

          <button class="sent-comment text-3">ส่งความคิดเห็น</button>
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
      project: [
        {
          name: "ปรับปรุงระบบจัดการขยะ",
          desc: "(มหานครปลอดภัย)",
        },
          {
          name: "พัฒนาทางเท้า ทางข้าม",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
        },
          {
          name: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          desc: "(มหานครปลอดภัย)",
        },
          {
          name: "จัดการการจราจรติดขัด",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
        },
          {
          name: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          desc: "(มหานครปลอดภัย)",
        },
          {
          name: "เพิ่มพื้นที่สีเขียว",
          desc: "(มหานครสีเขียวสะดวกสบาย)",
        },
          {
          name: "พัฒนาระบบการศึกษา",
          desc: "(มหานครสำหรับทุกคน)",
        },
          {
          name: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          desc: "(มหานครประชาธิปไตย)",
        },
          {
          name: "จัดระเบียบผังเมืองให้เหมาะสม",
          desc: "(มหานครกระชับ)",
        },
          {
          name: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          desc: "(มหานครแห่งเศรษฐกิจและเรียนรู้)",
        },
      ],
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

.sent-comment {
  background: none;
  padding: 10px;
  border: 0.75px solid #000000;
border-radius: 5px;
}
</style>