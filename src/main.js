// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';








import https from "./utils/axios.js"; //引入封装的axios  
Vue.prototype.https = https; //引入到原型上。

import * as filters from './utils/filters' // 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

import utils from './utils/utils'; // 引入全局注册的方法
Vue.prototype.utils = utils; //引入到原型上。


Vue.use(ElementUI);

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})