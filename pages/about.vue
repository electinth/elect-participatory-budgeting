<template>
  <div>
    <div class="menu-wrap">
      <a href="https://punchup.world/project/" target="_blank" class="m-0">
        <img :src="logo" width="130" alt=""
      /></a>
      <div>
        <nuxt-link
          v-for="(menu, index) in menu_list"
          :key="index"
          :to="menu.value"
          :class="{ active: menu.value === $route.fullPath }"
          class="menus"
        >
          {{ menu.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="p-5">
      <h1 class="header-1 mb-5 text-center font-weight-bold">
        เกี่ยวกับโครงการ
      </h1>
      <div class="pre-box">
        <h1 class="header-2 mb-5 font-weight-bold">เกี่ยวกับโปรเจกต์นี้</h1>
        <pre class="body-text">
ทุกวันนี้...เมืองที่อาศัยและใช้ชีวิตอยู่ หลายสิ่งหลายอย่างไม่ได้เป็นไปดั่งใจและวาดฝันไว้ ปัญหาหลายอย่างเกิดขึ้นในหลายพื้นที่  เช่น ปัญหาขยะ น้ำเน่าเสีย ทางขึ้น-ลงสำหรับผู้พิการ ผู้สูงอายุ แถมลักษณะปัญหาของแต่ละพื้นที่ยังแตกต่างกันอีก คงจะดีประชาชนในฐานะผู้เสียภาษีทั้งทางตรงและทางอ้อม สามารถมีส่วนในการร่วมออกแบบการใช้งบประมาณเพื่อพัฒนาเมืองของเราเองให้ดีขึ้นและเป็นไปอย่างได้ดั่งที่ต้องการได้

ในหลายประเทศเริ่มเปิดโอกาสให้ประชาชนมีส่วนร่วมกับงบประมาณได้ในรูปแบบที่เรียกว่า “งบประมาณแบบมีส่วนร่วม” (Bangkok Budgeting) ซึ่งเป็นเครื่องมือในการมีส่วนร่วมที่ให้ประชาชนในชุมชนสามารถตัดสินเกี่ยวกับการใช้งบประมาณ

ทีม Punch Up , องค์กรต่อต้านคอร์รัปชัน (ประเทศ) , Glow Story , Hand Social Enterprise , Good Society Thailand และ Social Integrity Architecture and Mechanism Design Lab  จึงตั้งใจพัฒนาแพลตฟอร์มนี้ในรูปแบบเทคโนโลยีภาคประชาชน (Civic Tech) เพื่อเปิดเผยข้อมูลให้ทุกคนในฐานะผู้เสียภาษี ได้เข้าถึง เข้าใจ และเป็นส่วนหนึ่งของการออกแบบงบประมาณของกรุงเทพมหานคร  โดยเริ่มจากคำถามที่อาจจะคาใจหลายๆ คนว่า ตอนนี้กรุงเทพมหานครวางแผนในการแก้ปัญหาที่เกิดขึ้นอย่างไร? ใช้งบประมาณเท่าไหร่? และในฐานะประชาชน เราจะมีส่วนร่วมแสดงความคิดเห็นได้อย่างไรบ้าง? โดยเราตั้งใจว่าจะนำการร่วมโหวตและความคิดเห็นนี้รวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป 

โปรเจกต์นี้นับเป็นโปรเจกต์ทดลองสร้างแพลตฟอร์ม “งบประมาณแบบมีส่วนร่วม” ให้กับจังหวัด/เมืองต่างๆ ในประเทศไทย โดยเริ่มจากเมืองหลวงอย่างกรุงเทพมหานครเป็นต้นแบบ แล้วพัฒนาไปสู่เมืองอื่นๆ พร้อมอยากชวนทุกคนมามีส่วนร่วมในการพัฒนาสังคมให้ดีขึ้น เริ่มต้นจากการเป็นส่วนหนึ่งในการออกแบบงบประมาณ ผ่านการตรวจสอบและมีส่วนร่วมในการแสดงความคิดเห็นเสนอโครงการกับงบประมาณในการพัฒนาเมือง 

เราเชื่อว่าอย่างน้อย...จุดเริ่มต้นนี้จะเป็นสิ่งผลักดันให้เกิดงบประมาณแบบมีส่วนร่วมอย่างแท้จริงในประเทศไทยได้!
</pre
        >

        <h1 class="header-2 mt-5 font-weight-bold">
          ที่มาของข้อมูล & ข้อจำกัด
        </h1>
        <p class="body-text">
          ทางทีมผู้พัฒนา
          ได้ใช้ข้อมูลจากเว็บไซต์ทางการของกรุงเทพมหานครตามลิงก์ต่างๆ ด้านล่าง
          อย่างไรก็ตาม
          เนื่องจากโครงสร้างของข้อมูลไม่ได้จัดทำในรูปแบบเดียวกันอย่างเป็นระบบ
          ไม่อัพเดท และไม่ครบถ้วน บางข้อมูลอยู่ในรูปแบบ pdf
          ทำให้ต้องทำการเรียบเรียงและตรวจสอบจากข้อมูลหลายแห่ง อาจส่งผลข้อมูลได้
          นอกจากนี้งบประมาณที่แสดงในเว็บไซต์ ไม่ใช่งบที่ทำการเบิกจ่ายใช้จริงๆ
          เพราะข้อมูลไม่ครบถ้วน และสอบถามไปยังหน่วยงานแล้ว
          ได้รับคำตอบว่าเป็นเรื่องเฉพาะภายในของเจ้าหน้าที่เท่านั้น
          ซึ่งได้แจ้งเตือนในเว็บ
          หากทางกรุงเทพมหานครมีการเปิดเผยข้อมูลจะนำมาอัพเดทให้ได้
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อ้างอิงข้อมูลจาก</h1>
        <div class="body-text">
          <a
            target="_blank"
            class="d-block"
            href="http://dp2.bangkok.go.th/mobile/mymenu.php"
            >http://dp2.bangkok.go.th/mobile/mymenu.php</a
          >
          <a target="_blank" class="d-block" href="https://main.bangkok.go.th/"
            >https://main.bangkok.go.th/</a
          >
          <a
            target="_blank"
            class="d-block"
            href="http://www.ratchakitcha.soc.go.th/RKJ/announce/search_result.jsp?openPageTime=1631042151747"
            >http://www.ratchakitcha.soc.go.th/RKJ/announce/search_result.jsp?openPageTime=1631042151747</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.citizenlab.co/blog/civic-engagement/participatory-budgeting/one-tool-multiple-possibilities-three-examples-of-participatory-budgets/
"
            >https://www.citizenlab.co/blog/civic-engagement/participatory-budgeting/one-tool-multiple-possibilities-three-examples-of-participatory-budgets/</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/govanhill-glasgow
"
            >https://www.local.gov.uk/case-studies/govanhill-glasgow
          </a>
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/tower-hamlets-you-decide"
            >https://www.local.gov.uk/case-studies/tower-hamlets-you-decide</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/case-study-porto-alegre-brazil
"
            >https://www.local.gov.uk/case-studies/case-study-porto-alegre-brazil
          </a>
          <a
            target="_blank"
            class="d-block"
            href="http://one.bangkok.go.th/info/bmainfo/plan_Work/
"
            >ศูนย์สารสนเทศของกรุงเทพมหานคร
          </a>
        </div>

        <h1 class="header-2 mt-5 font-weight-bold">
          นโยบายการนำข้อมูลไปใช้ต่อ
        </h1>
        <p class="body-text">
          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
          <br /><br />
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อาสาสมัครร่วมพัฒนา</h1>
        <div class="body-text">
          <p class="font-weight-bold">เขียนโปรแกรม</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/mwlite/in/pimpatipan-angkharuengrattana-560898209"
            >พิมพ์ปฏิภาณ อังคเรืองรัตนา</a
          >,
          <a target="_blank" href="https://github.com/palminister"
            >ธนภัทร จำนงรัตน์</a
          >

          <p class="font-weight-bold mt-3">ออกแบบ</p>
          <p>นัฐพล ไก่แก้ว</p>

          <p class="font-weight-bold">สืบค้นและรวบรวมข้อมูล</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
            >ศุภิสรา อิศรานุกูล</a
          >,
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adisak-saiprasert-23a06910a/?fbclid=IwAR0V0TGb8Kp0ktfUsy26pove7hx4nE_-6Z9KiFdCLjWwM0vBooj8BX5MtLg"
            >อดิศักดิ์ สายประเสริฐ</a
          >

          <p class="font-weight-bold mt-3">บรรณาธิการ</p>
          <a target="_blank" href="https://www.linkedin.com/in/thanisara-r/"
            >ธนิสรา เรืองเดช</a
          >

          <p class="font-weight-bold mt-3">ประสานงานและจัดการอื่นๆ</p>
          <p>
            <a target="_blank" href="https://punchup.world/">Punch Up</a><br />
            โปรเจกต์ Cabinet Resolution ได้รับการสนับสนุนทุนในการดำเนินงานจาก
            <a target="_blank" href="https://www.linkedin.com/in/thanisara-r/"
              >National Endowment for Democracy (NED)</a
            >
            และ Good Society ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ
            พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup
            เพื่อดำเนินโครงการ
          </p>

          <p class="font-weight-bold mt-3">ขอขอบคุณผู้ให้ข้อมูล</p>
          <p>ผศ.ดร.ทวิดา กมลเวชช ที่ปรึกษาการพัฒนาการจัดทำแผนกรุงเทพมหานคร</p>
        </div>

        <h1 class="header-2 mt-5 font-weight-bold">Partners</h1>
        <ul class="body-text">
          <li>Good Society Thailand</li>
          <li>Glow Story</li>
          <li>องค์กรต่อต้านคอร์รัปชัน (ประเทศไทย)</li>
          <li>Hand social enterprise</li>
          <li>Social Integrity Architecture and Mechanism Design Lab</li>
        </ul>
        <div class="d-flex logo-list">
          <img :src="logo_good_society" width="120" alt="" />
          <img :src="logo_glow" width="120" alt="" />
          <img :src="logo_act" width="" alt="" />
          <img :src="logo_hand" width="120" alt="" />
          <img :src="logo_siam_lab" width="120" alt="" />
        </div>

        <br /><br /><br />
        <br /><br /><br />

        <div class="mt-5 text-center">
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/125ybYpPOFaluJEvZtbCqqA-qSVilklT9BftNodBLkPI/edit#gid=1296185986"
            class="header-2 download-btn font-weight-bold"
            ><img :src="download_icon" width="30" alt=""> ดาวน์โหลดข้อมูล</a
          >
        </div>

        <div class="d-flex justify-content-center mt-5 align-items-center">
          <p class="btn-text-1 text mb-0 mr-2">Share</p>
          <img
            :src="icon_fb"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="facebook"
            :data-url="`https://electinth.github.io/participatory-budgeting/`"
          />
          <img
            :src="icon_line"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="line"
            :data-url="`https://electinth.github.io/participatory-budgeting/`"
          />
          <img
            :src="icon_twitter"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="twitter"
            :data-url="`https://electinth.github.io/participatory-budgeting/`"
          />
        </div>
      </div>
    </div>
    <div
      class="footer text-white d-flex justify-content-center align-items-sm-center"
    >
      <div class="text-sm-right px-2">
        <img :src="logo_white" alt="" />
      </div>
      <div class="text-3 mb-0 ml-sm-3 mt-3 mt-sm-0 w-sm-50 d-inline-block">
        หากมีข้อสงสัยหรือคำแนะนำเพิ่มเติมใด ๆ เกี่ยวกับงานนี้
        ทักมาหาพวกเราได้ที่ m.me/punchupworld
      </div>
    </div>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";

export default {
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      menu_list: [
        {
          name: "Home",
          value: "/",
        },
        {
          name: "Explore",
          value: "/#explore",
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
      icon_fb: require("~/assets/images/facebook.png"),
      icon_line: require("~/assets/images/line.png"),
      icon_twitter: require("~/assets/images/twitter.png"),
      logo: require("~/assets/images/logo-white.png"),
      logo_siam_lab: require("~/assets/images/logo_siam_lab.png"),
      logo_good_society: require("~/assets/images/logo_good_society.png"),
      logo_glow: require("~/assets/images/logo_glow.png"),
      logo_act: require("~/assets/images/logo_act.png"),
      logo_hand: require("~/assets/images/logo_hand.png"),
      logo_white: require("~/assets/images/logo-white.png"),
            download_icon: require("~/assets/images/download-icon.png"),
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
      cookies: true,
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
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
  background: #000;
  padding: 10px 20px;
  justify-content: space-between;
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

a {
  color: #000;
  text-decoration: underline;
}

.download-btn {
  width: 360px;
  background: #ffffff;
  border: 2px solid #000000;
  padding: 10px;
  margin: auto;
  text-decoration: none;
}

.footer {
  background: #000000;
  padding: 80px;

  @media #{$mq-mini-mobile} {
    padding: 40px;
    flex-direction: column;
  }
}

.logo-list {
  @media #{$mq-mini-mobile} {
    img {
      max-width: 40px;
      margin: 0 2px;
    }
  }
}
</style>