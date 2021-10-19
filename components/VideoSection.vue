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
        <div class="d-flex justify-content-center align-items-center">
          <img :src="video_pic_1" alt="" class="w-25 h-25" />
          <div class="w-25 p-5">
            <p class="header-3">
              จุดเริ่มต้นงบประมาณ แบบมีส่วนร่วมในแผน พัฒนากรุงเทพมหานคร?
            </p>
            <span class="w-25">
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <img :src="video_pic_2" alt="" class="w-25 h-25" />
          <div class="w-25 p-5">
            <p class="header-3">ตอนนี้กรุงเทพมหานคร กำลังดำเนินการอะไรอยู่?</p>
            <span class="w-25">
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <img :src="video_pic_3" alt="" class="w-25 h-25" />
          <div class="w-25 p-5">
            <p class="header-3">
              ประเทศไทย หากจะไปสู่ งบประมาณแบบมีส่วนร่วมได้ ควรเริ่มจากตรงไหน?
            </p>
            <span class="w-25">
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxx
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
      video_pic_3: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-10.png"),
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