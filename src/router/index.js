import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import VCatalog from "../components/catalog/V-catalog"
import VCart from "../components/cart/V-cart"
const routes = [
  {
    path: '/',
    name: 'catalog',
    component: VCatalog
},
{
    path: '/cart',
    name: 'cart',
    component: VCart,
    props: true 
},

  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
