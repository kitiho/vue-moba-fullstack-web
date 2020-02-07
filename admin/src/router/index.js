import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
import HeroEdit from '../views/HeroEdit'
import HeroList from '../views/HeroList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/create', name: 'CategoryEdit', component: CategoryEdit },
      { path: '/categories/list', name: 'CategoryList', component: CategoryList },
      { path: '/categories/edit/:id', props:true, component: CategoryEdit },
      
      { path: '/items/create', name: 'ItemEdit', component: ItemEdit },
      { path: '/items/list', name: 'ItemList', component: ItemList },
      { path: '/items/edit/:id', props:true, component: ItemEdit },

      { path: '/heros/create', name: 'HeroEdit', component: HeroEdit },
      { path: '/heros/list', name: 'HeroList', component: HeroList },
      { path: '/heros/edit/:id', props:true, component: HeroEdit },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
