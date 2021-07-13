import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DrButton from '@/components/button/src/button'
import './styles/index.scss'

Vue.component(DrButton.name, DrButton)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
