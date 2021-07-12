<template>
  <div class="page-component__scroll">
    <div class="page-container page-component">
      <div class="page-component__nav">
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
      </div>
      <div class="page-component__content">
        <router-view class="content"></router-view>
      </div>
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

<style lang="scss" >
.group-item {
  .link {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 0 22px;
    text-align: left;
  }
  .active {
    color: #409eff;
  }
}

.page-component__scroll {
  height: calc(100% - 80px);
  margin-top: 80px;

  > .el-scrollbar__wrap {
    overflow-x: auto;
  }
}

.page-component {
  box-sizing: border-box;
  height: 100%;

  &.page-container {
    padding: 0;
  }

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;

    > .la-scrollbar__wrap {
      height: 100%;
      overflow-x: auto;
    }

    &.is-extended {
      padding-top: 0;
    }
  }

  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;

    & > ul {
      padding-bottom: 50px;
    }
  }

  .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding-top: 50px;

    > {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
}

@media (max-width: 768px) {
  .page-component {
    .page-component__nav {
      width: 100%;
      position: static;
      margin-top: 0;
    }
    .side-nav {
      padding-top: 0;
      padding-left: 50px;
    }
    .page-component__content {
      padding-left: 10px;
      padding-right: 10px;
    }
    .content {
      padding-top: 0;
    }
    .content > table {
      overflow: auto;
      display: block;
    }
  }
}
</style>
