// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/reset.css'

import VueLazyload from 'vue-lazyload' //图片懒加载
Vue.use(VueLazyload)

import ElementUI from 'element-ui';//使用饿了么
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import VueVideoPlayer from 'vue-video-player' //引入视频播放器
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
