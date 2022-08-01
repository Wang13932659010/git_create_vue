import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name:'App',
    redirect:'/home1',
  },
  {
    path: '/home1',
    name: 'home1',
    component: HomeView
  },
  {
    path:'/home2',
    name:'home2',
    component:()=>import("../views/HomeView2")
  }
]

const router = new VueRouter({
  routes
})

export default router
