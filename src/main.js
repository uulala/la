import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js';
import title from 'examples/i18n/title';

import App from './App.vue'
import LaUI from './index.js'
import 'packages/theme-chalk/src/index.scss';

import routes from 'examples/router.config.js'
import demoBlock from 'examples/components/demo-block';
import 'examples/assets/styles/common.scss';
import 'examples/demo-styles/index.scss';

Vue.use(LaUI)
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  console.log('afterEach:', route)
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
 
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'La';
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
