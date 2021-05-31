import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'
import Gopay from '../views/Gopay.vue'
import Ovo from '../views/Ovo.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/gopay',
    name: 'gopay',
    component: Gopay
  },
  {
    path: '/ovo',
    name: 'ovo',
    component: Ovo
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

export default router
