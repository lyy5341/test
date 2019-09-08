// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import { constantRouterMap } from './router'
Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

Vue.directive('focus', {
  inserted: function (el,binding) { // inserted 表示被绑定元素插入父节点时调用
    el.focus();
    el.value = binding.value
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
