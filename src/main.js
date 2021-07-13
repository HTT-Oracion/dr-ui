import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DrUI from './components'
import './styles/index.scss'

Vue.use(DrUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
