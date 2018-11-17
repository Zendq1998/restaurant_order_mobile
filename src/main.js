import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import './cube-ui'
import './register'
import './common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
