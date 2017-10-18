import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../pages/GoodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
