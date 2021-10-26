<template>
  <div>
    <div class="bg-main text-center">
      <p class="header-3 padding-main">
        การใช้งบประมาณของกรุงเทพมหานครทั้ง 7 ด้าน <br />
        ในปี 2561-2565
      </p>
      <p class="text-3 sub">(สามารถเลือกดูรายด้านได้)</p>
      <TreeMap />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: white;
}
.padding-main {
  padding: 50px 10px 0px 10px;
  margin: 0;
}
.sub {
  color: #737373;
}
</style>
