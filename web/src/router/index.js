import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/home', name: 'home', component: Home }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
