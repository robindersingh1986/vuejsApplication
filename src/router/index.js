import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
