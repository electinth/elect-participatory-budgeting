<template>
  <div>
    <div class="bg-main">
      <p class="w-50 text-center m-auto header-2">
        เรามาฟังคำตอบจาก ผศ.ดร.ทวิดา กมลเวชช
        ที่ปรึกษาการพัฒนาการจัดทำแผนกรุงเทพมหานคร
      </p>

      <p class="text-center m-auto header-3">
        ว่าตอนนี้กรุงเทพมหานครกำลังดำเนินการอะไรอยู่?
      </p>

      <p class="text-center m-auto text-3">(กดเล่นคลิปเพื่อฟังคำตอบ)</p>

      <div class="videos mt-5">
        <div class="d-flex justify-content-center align-items-center mb-3">
          <video width="320" height="240" controls :poster="video_pic_1">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-25 p-5">
            <p class="header-3">กรุงเทพมหานครมองเรื่องการมีส่วนร่วม</p>
            <span class="w-50 text-1">
              การจะสร้างกลไกการมีส่วนร่วมให้มากที่สุด
              ต้องเป็นกลไกที่ทำให้เกิดความรับผิดชอบ โดยถ้ามีกำหนดให้ใช้จ่ายเงิน
              รัฐจะเป็นคนใช้จ่ายเงินลงความต้องการของพื้นใดพื้นที่นึง
              และพื้นที่นั้นต้องเสียสละเวลามาให้ข้อมูล
              ช่วยให้ความเห็นกำกับติดตาม เป็นเชิงสองฝ่ายทำงานร่วมกัน
              และการกำหนดกลไกงบประมาณแบบมีส่วนร่วม
              ช่วยหนุนให้แต่ละฝ่ายมีความสม่ำเสมอในการร่วมมือ และต่องบฯ
              ทำให้กลไกมีสลักสำคัญขึ้นจึงนำไปอยู่ในแผน
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center mb-3">
          <video width="320" height="240" controls :poster="video_pic_2">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-25 p-5">
            <p class="header-3">
              จุดเริ่มต้นงบประมาณ แบบมีส่วนร่วมในแผน พัฒนากรุงเทพมหานคร?
            </p>
            <span class="w-50 text-1">
              ปกติกรุงเทพฯ โดยเฉพาะสำนักงานเขตอาศัยความคิดเห็นจากประชาชนทำงาน
              ต่อไปในช่วงปี 2566 -2570
              จะเป็นช่วงเน้นสร้างกลไกเครือข่ายภาคประชาสังคมในการเปิดพื้นที่รับฟังความคิดเห็น
              ระบบงบประมาณแบบมีส่วนร่วม คือ
              สำนักเขตจะทำหน้าที่จัดทำแผนพัฒนาเขตที่มาจากการมีส่วนร่วมของตัวชุมชนนำเทคโนโลยีมาช่วย
              และเน้นการเปิดเผยข้อมูลไปพร้อมกัน
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <video width="320" height="240" controls :poster="video_pic_3">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_3.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-25 p-5">
            <p class="header-3">
              ประเทศไทย หากจะไปสู่ งบประมาณแบบมีส่วนร่วมได้ ควรเริ่มจากตรงไหน?
            </p>
            <span class="w-50 text-1">
              ต้องมีระบบ monitoring and Evaluation
              ในการใช้งบประมาณเพื่อใช้ในการตัดสินใจเชิงยุทธศาสตร์ ไม่ใช่แบบราย
              item วัตถุประสงค์ในการทำระบบนี้คือ
              สามารถช่วยในการปรับตัวและความก้าวหน้าเกิดขึ้น
              ข้อผิดพลาดช่วยกันแก้ไข
              และได้เรียนรู้ในด้านที่จะพัฒนาผ่านกลไกแบบมีส่วนร่วมว่าสถาปนาขึ้นได้
            </span>
          </div>
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
      illus_section_end: require("~/assets/images/illus_section_end.png"),
      video_pic_1: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-01.png"),
      video_pic_2: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-04.png"),
      video_pic_3: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-10.png")
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #000;
  padding: 59px;
  color: #fff;
}
</style>