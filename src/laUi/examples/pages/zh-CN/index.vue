<template>
  <div>
    <div class="header">
      <div class="menu-box">
        <div class="menu-item" v-for="item in menu" :key="item.name">
          <template v-if="item.path">
            <router-link
              active-class="active"
              :to="`${lang}/${item.path}`"
              exact
              >{{ item.name }}
            </router-link>
          </template>
        </div>
        <router-link active-class="active" :to="`${lang}/component`" exact>
          组件
        </router-link>
      </div>
    </div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
import navConfig from "examples/nav.config.json";

export default {
  name: "Home",
  data() {
    const lang = localStorage.getItem("la-lang") || "zh-CN";
    const menu = navConfig[lang];
    return {
      lang,
      menu,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
