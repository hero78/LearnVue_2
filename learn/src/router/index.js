import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  
import TodoTask from '@/components/TodoTask' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TodoTask',
      component: TodoTask
    }
  ]
})
