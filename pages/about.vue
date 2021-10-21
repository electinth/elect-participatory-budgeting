<template>
  <div>
    <elect-navbar title="articipatory-budgeting 101" dark="true">
      <div class="menu-wrap">
        <nuxt-link
          v-for="(menu, index) in menu_list"
          :key="index"
          :to="menu.value"
          :class="{ active: menu.value === $route.fullPath }"
          class="menus"
        >
          {{ menu.name }}
        </nuxt-link>
      </div></elect-navbar
    >
    <div class="p-5">
      <h1 class="header-1 mb-5 text-center font-weight-bold">
        เกี่ยวกับโครงการ
      </h1>
      <div class="pre-box">
        <h1 class="header-2 mb-5 font-weight-bold">เกี่ยวกับโปรเจกต์นี้</h1>
        <pre class="body-text">
ทุกวันนี้...เมืองที่อาศัยและใช้ชีวิตอยู่ หลายสิ่งหลายอย่างไม่ได้เป็นไปดั่งใจและวาดฝันไว้ ปัญหาหลายอย่างเกิดขึ้นในหลายพื้นที่  เช่น ปัญหาขยะ น้ำเน่าเสีย ทางขึ้น-ลงสำหรับผู้พิการ ผู้สูงอายุ แถมลักษณะปัญหาของแต่ละพื้นที่ยังแตกต่างกันอีก    คงจะดีประชาชนในฐานะผู้เสียภาษีทั้งทางตรงและทางอ้อม สามารถมีส่วนในการร่วมออกแบบการใช้งบประมาณเพื่อพัฒนาเมืองของเราเองให้ดีขึ้นและเป็นไปอย่างได้ดั่งที่ต้องการได้

โดยในหลายประเทศเริ่มเปิดโอกาสให้ประชาชนมีส่วนร่วมกับงบประมาณได้ สิ่งเหล่านี้เรียกว่า งบประมาณแบบมีส่วนร่วม (Participatory Budgeting) เป็นเครื่องมือในการมีส่วนร่วมที่ให้ประชาชนในชุมชนสามารถตัดสินเกี่ยวกับการใช้งบประมาณ

ดังนั้น โปรเจกต์นี้ เป็นโปรเจกต์ทดลองสร้าง“งบประมาณแบบมีส่วนร่วม” ให้กับจังหวัด/เมืองต่างๆในประเทศไทย โดยเริ่มจากเมืองหลวงอย่างกรุงเทพมหานครเป็นต้นแบบแล้วพัฒนาไปสู่เมืองอื่นๆ และชวนทุกคนมาร่วมในการพัฒนาสังคมให้ดีขึ้น เริ่มต้นจากการเป็นส่วนหนึ่งในการออกแบบงบประมาณ ผ่านการตรวจสอบและมีส่วนร่วมในการแสดงความคิดเห็นเสนอโครงการกับงบประมาณในการพัฒนาเมือง 

โดยทางทีมตั้งใจพัฒนาแพลตฟอร์ม อย่างน้อยเป็น Civic tech เพื่อเปิดเผยข้อมูลให้ประชาชน ได้เข้ามารู้จักและเป็นส่วนหนึ่งของการวางแผนและออกแบบงบประมาณของกรุงเทพมหานคร 
โดยรู้จักว่า ตอนนี้กรุงเทพมหานครวางแผนในการแก้ปัญหาที่เกิดขึ้นอย่างไร? ใช้งบประมาณเท่าไหร่? ในรูปแบบที่เข้าใจง่ายขึ้น และในฐานะประชาชนร่วมแสดงความคิดเห็นและออกแบบงบประมาณอย่างสร้างสรรค์กับงบประมาณว่าควรนำไปใช้กับเรื่องใด? 
ซึ่งทางทีมตั้งใจว่าจะนำการร่วมโหวตและความคิดเห็นนี้รวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป 

และเราเชื่อว่าอย่างน้อย...จุดเริ่มต้นนี้จะเป็นสิ่งผลักดันให้เกิดงบประมาณแบบมีส่วนร่วมอย่างแท้จริงในประเทศไทยได้!</pre
        >

        <h1 class="header-2 mt-5 font-weight-bold">
          ที่มาของข้อมูล & ข้อจำกัด
        </h1>
        <ul class="body-text">
          <li>กรุงเทพมหานคร</li>
          <li>ราชกิจจานุกเบกษา</li>
        </ul>

        <h1 class="header-2 mt-5 font-weight-bold">
          นโยบายการนำข้อมูลไปใช้ต่อ
        </h1>
        <p class="body-text">
          ELECT มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน <br /><br />
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ contact [at] elect.in.th
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อาสาสมัครร่วมพัฒนา</h1>
        <div class="body-text">
          <p class="font-weight-bold">เขียนโปรแกรม</p>
          <p>พิมพ์ปฏิภาณ อังคเรืองรัตนา, Palm</p>

          <p class="font-weight-bold">ออกแบบ</p>
          <p>นัฐพล ไก่แก้ว</p>

          <p class="font-weight-bold">สืบค้นและรวบรวมข้อมูล</p>
          <p>ศุภิสรา อิศรานุกูล , พี่อู๋</p>

          <p class="font-weight-bold">บรรณาธิการ</p>
          <p>ธนิสรา เรืองเดช</p>

          <p class="font-weight-bold">ประสานงานและจัดการอื่นๆ</p>
          <p>
            Punch Up<br />
            โปรเจกต์ Cabinet Resolution ได้รับการสนับสนุนทุนในการดำเนินงานจาก
            National Endowment for Democracy (NED)
            ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
            ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
          </p>
        </div>

        <h1 class="header-2 mt-5 font-weight-bold">Partners</h1>
        <ul class="body-text">
          <li>GSE</li>
          <li>Glow Story</li>
          <li>ACT Thailand</li>
          <li>Hand social enterprise</li>
          <li>siamlab</li>
        </ul>

        <h1 class="header-2 mt-5 font-weight-bold">ร่วมพัฒนาโครงการ</h1>
        <p class="body-text">
          ตรวจสอบ ติดตาม และร่วมพัฒนาโปรเจ็กต์ได้ทาง Github
          โค้ดบนเว็บไซต์ทั้งหมดถูกเปิดเผยแบบสาธารณะเพื่อความโปร่งใสในการดำเนินการและพัฒนา
          และร่วมเป็นส่วนหนึ่งในการพัฒนา Civic Tech ในประเทศไทย<br /><br />
          หากคุณต้องการแบ่งปันทักษะด้านพัฒนาระบบ ออกแบบ รวบรวมข้อมูล
          หรือแบ่งปันข้อมูล รวมทั้งความช่วยเหลือด้านอื่น ๆ สามารถติดต่อได้ที่
          contact [at] elect.in.th
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อ้างอิง</h1>
        <ul class="body-text">
          <li>กรุงเทพมหานคร</li>
          <li>ราชกิจจานุกเบกษา</li>
        </ul>
      </div>
    </div>
    <elect-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          name: "Home",
          value: "/",
        },
        {
          name: "Explore",
          value: "/#tree-map",
        },
        {
          name: "Idea",
          value: "/#idea",
        },
        {
          name: "About",
          value: "/about",
        },
      ],
      drawer: false,
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    // });
  },
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "./og_image.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "./og_image.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pre-box {
  max-width: 900px;
  margin: auto;

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.menu-wrap {
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 32px;
  }
  a.active {
    font-weight: bold;
  }
}

.menus {
  font-size: 12px;
  font-weight: bold;
}
</style>