import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Environment from './plugin/Environment.plugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Notification from './plugin/Notification.plugin';


Vue.config.productionTip = false

Vue.use(Environment);
Vue.use(Notification);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
