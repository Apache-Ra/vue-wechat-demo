import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
import router from './router'
import App from './App'
/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
/**
 * 设置vuex
 */
const store = new Vuex.Store({})
store.registerModule('vux', {
  state: {
    loading: false,
    showBack: true,
    title: '',
    number: ''
  },
  mutations: {
    updateLoading (state, loading) {
      state.loading = loading
    },
    updateShowBack (state, showBack) {
      state.showBack = showBack
    },
    updateTitle (state, title) {
      state.title = title
    },
    updateNumber (state, number){
      let num = ''
      if(number <= 0){
        state.number = num
      }else {
        num = number.toString()
        state.number = num
      }

    }
  }
})
/**
 * 公用组件
 */
Vue.prototype.updateTitle = function (value) {
  this.$store.commit('updateTitle', value)
}
/**
 *  日志输出开关
 */
Vue.config.productionTip = true
/**
 *  点击延迟
 */
FastClick.attach(document.body)
/**
 *  创建实例
 */

// test
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
