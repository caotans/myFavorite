import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/homePageConfig'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: homePage
    }
  ]
})
