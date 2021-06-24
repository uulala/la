<template>
  <div class="component-page page-container">
    <div class="side-nav">
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
              class="link"
            >
              {{ comItem.title }}
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <div class="page-component__content">
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
  min-width: 200px;
  max-width: 200px;
  border-right: 1px solid #eee;
  padding-right: 10px;
  margin-right: 10px;
}
.group-item {
  .link {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 0 22px;
    text-align: left;
  }
}
</style>
