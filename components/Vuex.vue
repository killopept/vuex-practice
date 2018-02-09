<template>
  <div>
    <h1>{{count}}</h1>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // increment: state => state.count++,
    increment  (state, payload) { // 提供一个payload 对象参数
      state.count += payload.amount
    },
    decrement: state => state.count--
  }
})
export default {
  name: 'vuex',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment', { // 更改store的状态 => 提交mutations
        amount: 5
      })
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>
