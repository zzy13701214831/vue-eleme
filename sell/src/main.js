// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
Vue.use(VueRouter);

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.use(VueResource);

const routes = [
  { path: '/goods', component: goods, name: 'goods' },
  { path: '/ratings', component: ratings, name: 'ratings' },
  { path: '/seller', component: seller, name: 'seller' }
];

Vue.config.productionTip = false;

/* eslint-disable no-new */
// 接着创建路由实例
const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes,
  linkActiveClass: 'active'
});
// 最后创建vue实例并挂载
const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

router.push('/goods');
