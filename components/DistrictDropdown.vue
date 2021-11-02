<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      @change="onChange"
      :disabled="disabled"
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
        { value: null, text: "กรุณาเลือกเขต" },
        { value: "เขตคลองสาน", text: "เขตคลองสาน" },
        { value: "เขตคลองสามวา", text: "เขตคลองสามวา" },
        { value: "เขตคลองเตย", text: "เขตคลองเตย" },
        { value: "เขตคันนายาว", text: "เขตคันนายาว" },
        { value: "เขตจตุจักร", text: "เขตจตุจักร" },
        { value: "เขตจอมทอง", text: "เขตจอมทอง" },
        { value: "เขตดอนเมือง", text: "เขตดอนเมือง" },
        { value: "เขตดินแดง", text: "เขตดินแดง" },
        { value: "เขตดุสิต", text: "เขตดุสิต" },
        { value: "เขตตลิ่งชัน", text: "เขตตลิ่งชัน" },
        { value: "เขตทวีวัฒนา", text: "เขตทวีวัฒนา" },
        { value: "เขตทุ่งครุ", text: "เขตทุ่งครุ" },
        { value: "เขตธนบุรี", text: "เขตธนบุรี" },
        { value: "เขตบางกอกน้อย", text: "เขตบางกอกน้อย" },
        { value: "เขตบางกอกใหญ่", text: "เขตบางกอกใหญ่" },
        { value: "เขตบางกะปิ", text: "เขตบางกะปิ" },
        { value: "เขตบางขุนเทียน", text: "เขตบางขุนเทียน" },
        { value: "เขตบางคอแหลม", text: "เขตบางคอแหลม" },
        { value: "เขตบางซื่อ", text: "เขตบางซื่อ" },
        { value: "เขตบางนา", text: "เขตบางนา" },
        { value: "เขตบางบอน", text: "เขตบางบอน" },
        { value: "เขตบางพลัด", text: "เขตบางพลัด" },
        { value: "เขตบางรัก", text: "เขตบางรัก" },
        { value: "เขตบางเขน", text: "เขตบางเขน" },
        { value: "เขตบางแค", text: "เขตบางแค" },
        { value: "เขตบึงกุ่ม", text: "เขตบึงกุ่ม" },
        { value: "เขตปทุมวัน", text: "เขตปทุมวัน" },
        { value: "เขตประเวศ", text: "เขตประเวศ" },
        { value: "เขตป้อมปราบศัตรูพ่าย", text: "เขตป้อมปราบศัตรูพ่าย" },
        { value: "เขตพญาไท", text: "เขตพญาไท" },
        { value: "เขตพระนคร", text: "เขตพระนคร" },
        { value: "เขตพระโขนง", text: "เขตพระโขนง" },
        { value: "เขตภาษีเจริญ", text: "เขตภาษีเจริญ" },
        { value: "เขตมีนบุรี", text: "เขตมีนบุรี" },
        { value: "เขตยานนาวา", text: "เขตยานนาวา" },
        { value: "เขตราชเทวี", text: "เขตราชเทวี" },
        { value: "เขตราษฎร์บูรณะ", text: "เขตราษฎร์บูรณะ" },
        { value: "เขตลาดกระบัง", text: "เขตลาดกระบัง" },
        { value: "เขตลาดพร้าว", text: "เขตลาดพร้าว" },
        { value: "เขตวังทองหลาง", text: "เขตวังทองหลาง" },
        { value: "เขตวัฒนา", text: "เขตวัฒนา" },
        { value: "เขตสวนหลวง", text: "เขตสวนหลวง" },
        { value: "เขตสะพานสูง", text: "เขตสะพานสูง" },
        { value: "เขตสัมพันธวงศ์", text: "เขตสัมพันธวงศ์" },
        { value: "เขตสาทร", text: "เขตสาทร" },
        { value: "เขตสายไหม", text: "เขตสายไหม" },
        { value: "เขตหนองจอก", text: "เขตหนองจอก" },
        { value: "เขตหนองแขม", text: "เขตหนองแขม" },
        { value: "เขตหลักสี่", text: "เขตหลักสี่" },
        { value: "เขตห้วยขวาง", text: "เขตห้วยขวาง" },
      ],
    };
  },
  props: {
    disabled: Boolean,
  },
  mounted() {},
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