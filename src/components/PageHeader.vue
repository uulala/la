<template>
  <div class="page-header">
    <div class="menu-box">
      <router-link
        active-class="active"
        :to="`${lang}`"
        exact
        class="link"
      >
        主页
      </router-link>

      <div class="right-menu">
        <router-link
          active-class="active"
          :to="`${lang}/component`"
          exact
          class="link"
        >
          组件
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
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
.page-header {
  position: fixed;
  width: 100%;
  top: 20px;
  height: 40px;
}
.menu-box {
  display: flex;
  justify-content: space-between;
  .right-menu {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
    .link {
      color: #888;
    }
  }
  .link {
    text-decoration: none;
    color: #409eff;
    display: block;
    padding: 0 22px;
    // font-weight: 650;
  }
}
</style>
