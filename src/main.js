// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import https from "./utils/axios.js"; //引入封装的axios  
import utils from './utils/utils'; // 引入全局注册的方法
import * as filters from './utils/filters' // 注册全局过滤器
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.https = https; //引入到原型上。
Vue.prototype.utils = utils; //引入到原型上。

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

Vue.use(ElementUI);


Vue.component('tabBarList', resolve => require(['./common_assemblys/tabBarList.vue'], resolve)); // 状态列表（比如待处理、进行中、已完成等）
Vue.component('tabBar', resolve => require(['./common_assemblys/tabBar.vue'], resolve)); // 标签页按钮
Vue.component('breadcrumb', resolve => require(['./common_assemblys/breadcrumb.vue'], resolve)); // 面包屑
Vue.component('listSelect', resolve => require(['./common_assemblys/listSelect.vue'], resolve)); // 列表查询搜索框
Vue.component('secondaryBtn', resolve => require(['./common_assemblys/secondaryBtn.vue'], resolve)); // 次级辅色按钮集合


Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})