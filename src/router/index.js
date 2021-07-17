import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: (resolve) => {
      require(['@/views/Home'], resolve)
    }
  },
  {
    path: '/test',
    name: 'HomeOrigin',
    component: (resolve) => {
      require(['@/views/Home_build'], resolve)
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
