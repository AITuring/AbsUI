import Vue from 'vue'
import App from './App.vue'
import LxUi from '../packages/index'
import '../packages/theme/lib/index.scss'

Vue.config.productionTip = false

Vue.use(LxUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
