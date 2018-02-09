import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 跟状态对象
// 每个Vuex实例只是一个单一的状态树
const state = { // 初始的状态 => state
  count: 0
}
const mutations = {
  increment  (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd' // 通过判断初始状态 赋予evenOrOdd ，evenOrOdd派生出的状态
}
export default new Vuex.Store({ // 方法传参（对象传参）
  state,
  getters,
  actions,
  mutations
})
