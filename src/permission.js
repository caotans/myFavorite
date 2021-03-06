import router from './router'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false })// NProgress Configuration

// const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // NProgress.start() // start progress bar
  // if (window.localStorage.getItem('token')) store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  // if (store.getters.token) { // determine if there has token
  //   next()
  // } else {
  //   /* has no token*/
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next('/login') // 否则全部重定向到登录页
  //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //   }
  // }
  next();
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
