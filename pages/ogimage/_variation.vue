<template>
  <div>
    <div style="height: 630px; overflow: auto" class="d-none">
      <div
        class="ogimage text-center"
        :id="'test-' + i"
        v-for="(item, i) in data"
        key="i"
      >
        <h1 class="header-2" style="padding-top: 81px">
          พวกเราชาว “{{ item }}”
        </h1>
        <h1 class="header-1 font-weight-bold">
          ต้องการให้ใช้งบเพื่อฟื้นฟู<br />สถานที่ท่องเที่ยวสำคัญ
        </h1>

        <div
          class="d-flex position-absolute justify-content-center w-100"
          style="bottom: 0"
        >
          <p class="text-3 font-weight-bold">#GoodSociety2021</p>
          <p class="ml-3 text-3 font-weight-bold">#อยู่เมืองนี้ต้องรู้เยอะ</p>
        </div>
      </div>
    </div>
    <!--<hr />
     <button @click="test2">Download</button>
    <div id="result"></div> -->
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

export default {
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            "https://d365h3igfpfyap.cloudfront.net/" +
            this.$route.params.variation +
            ".png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            "https://d365h3igfpfyap.cloudfront.net/" +
            this.$route.params.variation +
            ".png",
        },
      ],
    };
  },

  data() {
    return {
      data: [
        "พระนคร",
        "ป้อมปราบศัตรูพ่าย",
        "สัมพันธวงศ์",
        "บางรัก",
        "ปทุมวัน",
        "ยานนาวา",
        "ดุสิต",
        "พญาไท",
        "ห้วยขวาง",
        "พระโขนง",
        "บางกะปิ",
        "บางเขน",
        "มีนบุรี",
        "ลาดกระบัง",
        "หนองจอก",
        "ธนบุรี",
        "คลองสาน",
        "บางกอกใหญ่",
        "บางกอกน้อย",
        "ตลิ่งชัน",
        "ภาษีเจริญ",
        "หนองแขม",
        "บางขุนเทียน",
        "ราษฎร์บูรณะ",
        "ดอนเมือง",
        "จตุจักร",
        "ลาดพร้าว",
        "บึงกุ่ม",
        "สาทร",
        "บางคอแหลม",
        "บางซื่อ",
        "ราชเทวี",
        "คลองเตย",
        "ประเวศ",
        "บางพลัด",
        "จอมทอง",
        "ดินแดง",
        "สวนหลวง",
        "วัฒนา",
        "บางแค",
        "หลักสี่",
        "สายไหม",
        "คันนายาว",
        "สะพานสูง",
        "วังทองหลาง",
        "คลองสามวา",
        "บางนา",
        "ทวีวัฒนา",
        "ทุ่งครุ",
        "บางบอน",
      ],
      text: "",
      img: [],
    };
  },
  mounted() {
    window.location.href = "https://electinth.github.io/participatory-budgeting/";
  },
  methods: {
    test() {
      this.data.forEach((element, i) => {
        html2canvas(document.querySelector("#test-" + i)).then((canvas) => {
          var dataURL = canvas.toDataURL("image/png");
          dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

          var img = document.createElement("img");
          img.src = dataURL;
          img.id = "result-" + element;
          document.getElementById("result").appendChild(img);
        });
      });
    },
    test2() {
      var JSZip = require("jszip");
      var zip = new JSZip();
      zip.file("Hello.html", "Hello World\n");
      zip.folder("images");

      document.querySelectorAll("img").forEach((element, i) => {
        var img = zip.folder("images");
        img.file(
          element.id.replace("result-", "") +
            "-ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ.png",
          element.src.replace(/^data:image\/(png|jpg);base64,/, ""),
          {
            base64: true,
          }
        );
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
        //console.log(content);
        saveAs(content, "edm8.zip");
      });
    },
  },
};
</script>

<style scoped>
.ogimage {
  background-image: url("@/assets/images/ogimage/OG-10.png");
  width: 1200px;
  height: 630px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
</style>