import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/style.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { Icon } from '@iconify/vue2'

Vue.component('i-icon', Icon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
