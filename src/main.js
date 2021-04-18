import Vue from 'vue'

import App from './App.vue'
import { initLibrary } from './FontAwesome'

initLibrary()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
