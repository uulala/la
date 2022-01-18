<template>
  <div>
    <div class="header">
      <div class="title">La</div>
      <div class="sub-title">基于 Vue2.0 的桌面端组件库</div>
    </div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    const lang = localStorage.getItem("la-lang") || "zh-CN";
    return {
      lang,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-box {
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  .link {
    text-decoration: none;
    color: #888;
    display: block;
    padding: 0 22px;
  }
}
.title {
  font-weight: 650;
  font-size: 18px;
  margin: 10px;
}
.sub-title {
  margin: 10px;
}
</style>
