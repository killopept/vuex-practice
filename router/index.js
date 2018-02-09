import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vuex from '@/components/Vuex'
import State from '@/components/VuexState'
import Counter from '@/components/Counter'
import Hot from '@/components/Counter-hot'
import Todo from '@/components/todo/Main'
import Chat from '@/components/chat/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }, {
      path: '/state',
      name: 'state',
      component: State
    }, {
      path: '/counter',
      name: 'counter',
      component: Counter
    }, {
      path: '/hot',
      name: 'hot',
      component: Hot
    }, {
      path: '/todo',
      name: 'todoMVC',
      component: Todo
    }, {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
