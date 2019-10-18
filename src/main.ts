import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import composition api
import './composition-plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
