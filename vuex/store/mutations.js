export const increment = state => { // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。定义该回调函数就是我们实际进行状态更改的地方
  state.count++
  state.history.push('increment')
  // console.log(state)
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
