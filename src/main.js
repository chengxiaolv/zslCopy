// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import https from "./utils/axios.js"; //引入封装的axios  
Vue.prototype.https = https; //引入到原型上。

import utils from './utils/utils'; // 引入全局注册的方法
Vue.prototype.utils = utils; //引入到原型上。

import * as filters from './utils/filters' // 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

// 引入图片预览功能。
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.component('tabBarList', resolve => require(['./common_assemblys/tabBarList.vue'], resolve)); // 状态列表（比如待处理、进行中、已完成等）
Vue.component('tabBar', resolve => require(['./common_assemblys/tabBar.vue'], resolve)); // 标签页按钮
Vue.component('breadcrumb', resolve => require(['./common_assemblys/breadcrumb.vue'], resolve)); // 面包屑
Vue.component('listSelect', resolve => require(['./common_assemblys/listSelect.vue'], resolve)); // 列表查询搜索框
Vue.component('secondaryBtn', resolve => require(['./common_assemblys/secondaryBtn.vue'], resolve)); // 次级辅色按钮集合
Vue.component('auxiliaryBtn', resolve => require(['./common_assemblys/auxiliaryBtn.vue'], resolve)); // 辅色按钮集合
Vue.component('mainBtn', resolve => require(['./common_assemblys/mainBtn.vue'], resolve)); // 主色按键
Vue.component('deletePopup', resolve => require(['./common_assemblys/deletePopup.vue'], resolve)); // 删除弹窗
Vue.component('myUpload', resolve => require(['./common_assemblys/myUpload.vue'], resolve)); // 上传文件组件
Vue.component('uploadFile', resolve => require(['./common_assemblys/uploadFile.vue'], resolve)); // 上传展示成功文件。
Vue.component('previewImg', resolve => require(['./common_assemblys/previewImg.vue'], resolve)); // 预览pdf格式的上传文件
Vue.component('annexDownload', resolve => require(['./common_assemblys/annexDownload.vue'], resolve)); // 文件下载按钮


Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})