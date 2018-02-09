<template>
  <div class = "demoVuex">
    <h1>vuex counter example</h1>
    <div>Clicked: {{$store.state.count}} times, count is {{ evenOrOdd }}</div>
    <br>
    <button @click = "increment">+</button>
    <button @click = "decrement">-</button>
    <button @click = "incrementIfOdd">increment if odd</button>
    <button @click = "incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Counter',
  computed: mapGetters([ // 状态
    'evenOrOdd'
  ]),
  methods: mapActions([ // 方法
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
