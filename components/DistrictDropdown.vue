<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="
        options.sort(function (a, b) {
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
      class="select-dropdown"
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
          text: "กรุณาเลือกเขต",
        },
        {
          value: "เขตพระนคร",
          text: "เขตพระนคร",
        },
        {
          value: "เขตป้อมปราบศัตรูพ่าย",
          text: "เขตป้อมปราบศัตรูพ่าย",
        },
        {
          value: "เขตสัมพันธวงศ์",
          text: "เขตสัมพันธวงศ์",
        },
        {
          value: "เขตบางรัก",
          text: "เขตบางรัก",
        },
        {
          value: "เขตปทุมวัน",
          text: "เขตปทุมวัน",
        },
        {
          value: "เขตยานนาวา",
          text: "เขตยานนาวา",
        },
        {
          value: "เขตดุสิต",
          text: "เขตดุสิต",
        },
        {
          value: "เขตพญาไท",
          text: "เขตพญาไท",
        },
        {
          value: "เขตห้วยขวาง",
          text: "เขตห้วยขวาง",
        },
        {
          value: "เขตพระโขนง",
          text: "เขตพระโขนง",
        },
        {
          value: "เขตบางกะปิ",
          text: "เขตบางกะปิ",
        },
        {
          value: "เขตบางเขน",
          text: "เขตบางเขน",
        },
        {
          value: "เขตมีนบุรี",
          text: "เขตมีนบุรี",
        },
        {
          value: "เขตลาดกระบัง",
          text: "เขตลาดกระบัง",
        },
        {
          value: "เขตหนองจอก",
          text: "เขตหนองจอก",
        },
        {
          value: "เขตธนบุรี",
          text: "เขตธนบุรี",
        },
        {
          value: "เขตคลองสาน",
          text: "เขตคลองสาน",
        },
        {
          value: "เขตบางกอกใหญ่",
          text: "เขตบางกอกใหญ่",
        },
        {
          value: "เขตบางกอกน้อย",
          text: "เขตบางกอกน้อย",
        },
        {
          value: "เขตตลิ่งชัน",
          text: "เขตตลิ่งชัน",
        },
        {
          value: "เขตภาษีเจริญ",
          text: "เขตภาษีเจริญ",
        },
        {
          value: "เขตหนองแขม",
          text: "เขตหนองแขม",
        },
        {
          value: "เขตบางขุนเทียน",
          text: "เขตบางขุนเทียน",
        },
        {
          value: "เขตราษฎร์บูรณะ",
          text: "เขตราษฎร์บูรณะ",
        },
        {
          value: "เขตดอนเมือง",
          text: "เขตดอนเมือง",
        },
        {
          value: "เขตจตุจักร",
          text: "เขตจตุจักร",
        },
        {
          value: "เขตลาดพร้าว",
          text: "เขตลาดพร้าว",
        },
        {
          value: "เขตบึงกุ่ม",
          text: "เขตบึงกุ่ม",
        },
        {
          value: "เขตสาทร",
          text: "เขตสาทร",
        },
        {
          value: "เขตบางคอแหลม",
          text: "เขตบางคอแหลม",
        },
        {
          value: "เขตบางซื่อ",
          text: "เขตบางซื่อ",
        },
        {
          value: "เขตราชเทวี",
          text: "เขตราชเทวี",
        },
        {
          value: "เขตคลองเตย",
          text: "เขตคลองเตย",
        },
        {
          value: "เขตประเวศ",
          text: "เขตประเวศ",
        },
        {
          value: "เขตบางพลัด",
          text: "เขตบางพลัด",
        },
        {
          value: "เขตจอมทอง",
          text: "เขตจอมทอง",
        },
        {
          value: "เขตดินแดง",
          text: "เขตดินแดง",
        },
        {
          value: "เขตสวนหลวง",
          text: "เขตสวนหลวง",
        },
        {
          value: "เขตวัฒนา",
          text: "เขตวัฒนา",
        },
        {
          value: "เขตบางแค",
          text: "เขตบางแค",
        },
        {
          value: "เขตหลักสี่",
          text: "เขตหลักสี่",
        },
        {
          value: "เขตสายไหม",
          text: "เขตสายไหม",
        },
        {
          value: "เขตคันนายาว",
          text: "เขตคันนายาว",
        },
        {
          value: "เขตสะพานสูง",
          text: "เขตสะพานสูง",
        },
        {
          value: "เขตวังทองหลาง",
          text: "เขตวังทองหลาง",
        },
        {
          value: "เขตคลองสามวา",
          text: "เขตคลองสามวา",
        },
        {
          value: "เขตบางนา",
          text: "เขตบางนา",
        },
        {
          value: "เขตทวีวัฒนา",
          text: "เขตทวีวัฒนา",
        },
        {
          value: "เขตทุ่งครุ",
          text: "เขตทุ่งครุ",
        },
        {
          value: "เขตบางบอน",
          text: "เขตบางบอน",
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