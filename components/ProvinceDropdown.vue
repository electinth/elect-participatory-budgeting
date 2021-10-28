<template>
  <div>
    <b-form-select
      class="select-dropdown"
      v-model="selected"
      :options="
        options.sort(function (a, b) {
          if (a.text == b.text) return 0;
          if (a.text == 'กรุณาเลือกจังหวัด') return -1;
          if (b.text == 'กรุณาเลือกจังหวัด') return 1;

          if (a.text < b.text) {
            return -1;
          }
          if (a.text > b.text) {
            return 1;
          }
          return 0;
        })
      "
      @change="onChange"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        {
          value: null,
          text: "กรุณาเลือกจังหวัด",
        },
        {
          value: "นครราชสีมา",
          text: "นครราชสีมา",
        },
        {
          value: "เชียงใหม่",
          text: "เชียงใหม่",
        },
        {
          value: "กาญจนบุรี",
          text: "กาญจนบุรี",
        },
        {
          value: "ตาก",
          text: "ตาก",
        },
        {
          value: "อุบลราชธานี",
          text: "อุบลราชธานี",
        },
        {
          value: "สุราษฎร์ธานี",
          text: "สุราษฎร์ธานี",
        },
        {
          value: "ชัยภูมิ",
          text: "ชัยภูมิ",
        },
        {
          value: "แม่ฮ่องสอน",
          text: "แม่ฮ่องสอน",
        },
        {
          value: "เพชรบูรณ์",
          text: "เพชรบูรณ์",
        },
        {
          value: "ลำปาง",
          text: "ลำปาง",
        },
        {
          value: "อุดรธานี",
          text: "อุดรธานี",
        },
        {
          value: "เชียงราย",
          text: "เชียงราย",
        },
        {
          value: "น่าน",
          text: "น่าน",
        },
        {
          value: "เลย",
          text: "เลย",
        },
        {
          value: "ขอนแก่น",
          text: "ขอนแก่น",
        },
        {
          value: "พิษณุโลก",
          text: "พิษณุโลก",
        },
        {
          value: "บุรีรัมย์",
          text: "บุรีรัมย์",
        },
        {
          value: "นครศรีธรรมราช",
          text: "นครศรีธรรมราช",
        },
        {
          value: "สกลนคร",
          text: "สกลนคร",
        },
        {
          value: "นครสวรรค์",
          text: "นครสวรรค์",
        },
        {
          value: "ศรีสะเกษ",
          text: "ศรีสะเกษ",
        },
        {
          value: "กำแพงเพชร",
          text: "กำแพงเพชร",
        },
        {
          value: "ร้อยเอ็ด",
          text: "ร้อยเอ็ด",
        },
        {
          value: "สุรินทร์",
          text: "สุรินทร์",
        },
        {
          value: "อุตรดิตถ์",
          text: "อุตรดิตถ์",
        },
        {
          value: "สงขลา",
          text: "สงขลา",
        },
        {
          value: "สระแก้ว",
          text: "สระแก้ว",
        },
        {
          value: "กาฬสินธุ์",
          text: "กาฬสินธุ์",
        },
        {
          value: "อุทัยธานี",
          text: "อุทัยธานี",
        },
        {
          value: "สุโขทัย",
          text: "สุโขทัย",
        },
        {
          value: "แพร่",
          text: "แพร่",
        },
        {
          value: "ประจวบคีรีขันธ์",
          text: "ประจวบคีรีขันธ์",
        },
        {
          value: "จันทบุรี",
          text: "จันทบุรี",
        },
        {
          value: "พะเยา",
          text: "พะเยา",
        },
        {
          value: "เพชรบุรี",
          text: "เพชรบุรี",
        },
        {
          value: "ลพบุรี",
          text: "ลพบุรี",
        },
        {
          value: "ชุมพร",
          text: "ชุมพร",
        },
        {
          value: "นครพนม",
          text: "นครพนม",
        },
        {
          value: "สุพรรณบุรี",
          text: "สุพรรณบุรี",
        },
        {
          value: "ฉะเชิงเทรา",
          text: "ฉะเชิงเทรา",
        },
        {
          value: "มหาสารคาม",
          text: "มหาสารคาม",
        },
        {
          value: "ราชบุรี",
          text: "ราชบุรี",
        },
        {
          value: "ตรัง",
          text: "ตรัง",
        },
        {
          value: "ปราจีนบุรี",
          text: "ปราจีนบุรี",
        },
        {
          value: "กระบี่",
          text: "กระบี่",
        },
        {
          value: "พิจิตร",
          text: "พิจิตร",
        },
        {
          value: "ยะลา",
          text: "ยะลา",
        },
        {
          value: "ลำพูน",
          text: "ลำพูน",
        },
        {
          value: "นราธิวาส",
          text: "นราธิวาส",
        },
        {
          value: "ชลบุรี",
          text: "ชลบุรี",
        },
        {
          value: "มุกดาหาร",
          text: "มุกดาหาร",
        },
        {
          value: "บึงกาฬ",
          text: "บึงกาฬ",
        },
        {
          value: "พังงา",
          text: "พังงา",
        },
        {
          value: "ยโสธร",
          text: "ยโสธร",
        },
        {
          value: "หนองบัวลำภู",
          text: "หนองบัวลำภู",
        },
        {
          value: "สระบุรี",
          text: "สระบุรี",
        },
        {
          value: "ระยอง",
          text: "ระยอง",
        },
        {
          value: "พัทลุง",
          text: "พัทลุง",
        },
        {
          value: "ระนอง",
          text: "ระนอง",
        },
        {
          value: "อำนาจเจริญ",
          text: "อำนาจเจริญ",
        },
        {
          value: "หนองคาย",
          text: "หนองคาย",
        },
        {
          value: "ตราด",
          text: "ตราด",
        },
        {
          value: "พระนครศรีอยุธยา",
          text: "พระนครศรีอยุธยา",
        },
        {
          value: "สตูล",
          text: "สตูล",
        },
        {
          value: "ชัยนาท",
          text: "ชัยนาท",
        },
        {
          value: "นครปฐม",
          text: "นครปฐม",
        },
        {
          value: "นครนายก",
          text: "นครนายก",
        },
        {
          value: "ปัตตานี",
          text: "ปัตตานี",
        },
        {
          value: "กรุงเทพมหานคร",
          text: "กรุงเทพมหานคร",
        },
        {
          value: "ปทุมธานี",
          text: "ปทุมธานี",
        },
        {
          value: "สมุทรปราการ",
          text: "สมุทรปราการ",
        },
        {
          value: "อ่างทอง",
          text: "อ่างทอง",
        },
        {
          value: "สมุทรสาคร",
          text: "สมุทรสาคร",
        },
        {
          value: "สิงห์บุรี",
          text: "สิงห์บุรี",
        },
        {
          value: "นนทบุรี",
          text: "นนทบุรี",
        },
        {
          value: "ภูเก็ต",
          text: "ภูเก็ต",
        },
        {
          value: "สมุทรสงคราม",
          text: "สมุทรสงคราม",
        },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-dropdown {
  width: 175px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}
</style>