<template>
  <div class="component-page">
    <div class="side-nav">
      <div></div>
      <div class="menu-item" v-for="menuItem in menu" :key="menuItem.name">
        <template v-if="menuItem.groups">
          <div
            v-for="groupItem in menuItem.groups"
            :key="groupItem.path"
            class="group-item"
          >
            <router-link
              v-for="comItem in groupItem.list"
              :key="comItem.path"
              active-class="active"
              :to="`/${lang}/component${comItem.path}`"
              exact
              >
              {{ comItem.title }}
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <div class="installation">
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
import navConfig from "examples/nav.config.json";

export default {
  name: "LaComponent",
  data() {
    const lang = localStorage.getItem("la-lang") || "zh-CN";
    const menu = navConfig[lang];
    return {
      lang,
      menu,
    };
  },
};
</script>

<style lang="scss" scoped>
.component-page {
  display: flex;
}
.side-nav {
  width: 30%;
  max-width: 300px;
}
.group-item {
}
</style>
