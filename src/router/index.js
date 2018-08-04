import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 *  加载模块
 */
Vue.use(VueRouter)
/**
 *  路由配置
 */
const router = new VueRouter({
  base: __dirname,
  likActiveClass: 'link-active',
  routes: [
    {
      path: '/init',
      name: 'init',
      component: resolve => require(['../components/init.vue'], resolve),
      children: [
        {
          path: 'personal/userInfo',
          name: 'userInfo',
          component: resolve => require(['../components/personal/userInfo.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['../components/home.vue'], resolve),
          meta: {title: '主页'}
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve),
      meta: {title: '登录'}
    }
  ]
})

/**
 *  路由出口
 */
export default router
