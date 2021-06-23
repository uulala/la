import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js';
import title from 'examples/i18n/title';

import App from './App.vue'
import LaUI from '@/laUi/index.js'
import routes from 'examples/router.config.js'
import demoBlock from 'examples/components/demo-block';

Vue.use(LaUI)
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach:', to)
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  const data = title[to.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(to.name)) {
      document.title = data[val];
      // return;
    }
  }
  document.title = 'La';
  next()
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
