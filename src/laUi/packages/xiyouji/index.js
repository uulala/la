import Xiyouji from './src/main';

/* istanbul ignore next */
Xiyouji.install = function(Vue) {
  Vue.component(Xiyouji.name, Xiyouji);
};

export default Xiyouji;
