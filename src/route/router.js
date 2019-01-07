import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'components/index/index'
import Rooms from 'components/rooms/rooms'
import Login from 'components/login/login'
// import Order from 'components/order/order'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      name: 'rooms',
      path: '/rooms',
      component: Rooms
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'index',
      path: '/order/:rid/:sid',
      component: Index
    },
    { path: '/', redirect: { name: 'rooms' } }
  ]
})
