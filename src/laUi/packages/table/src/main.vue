<template>
  <div class="la-table" @mouseleave="handleMouseleave">
    <div ref="headerWrapper" class="la-table-header-wrapper" v-if="showHeader">
      <table-header></table-header>
    </div>
    <div ref="bodyWrapper" class="la-table-header-wrapper">
      <table-body :tableData="tableData" :option="option"></table-body>
    </div>
    <div ref="footerWrapper" class="la-table-header-wrapper" v-if="showFooter">
      <table-footer></table-footer>
    </div>
  </div>
</template>

<script>
import TableHeader from './table-header'
import TableBody from './table-body'
import TableFooter from './table-footer'

export default {
  name: 'LaTable',
  components: {
    TableHeader,
    TableBody,
    TableFooter
  },
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    option: {
      type: Object,
      default() {
        return {
          columns: {}
        }
      }
    },
    rowKey: [String, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: Function,
    cellClassName: [String, Function],
    cellStyle: Function,
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data() { },
  methods: {
    handleMouseleave() {
      this.hoverRow = null;
      this.hoverState = null
    }
  },
};
</script>
