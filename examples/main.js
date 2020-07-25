import Vue from 'vue'
import App from './App.vue'
import LxUi from '../packages/index'
import router from './router'
import '../packages/theme/lib/index.scss'

Vue.config.productionTip = false

Vue.use(LxUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
