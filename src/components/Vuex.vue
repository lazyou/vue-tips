<template>
  <div id="app">
    <button @click="increment">
      增加
    </button>
    <button @click="decrement">
      减少
    </button>
    <button @click="incrementAsync">
      延时增加
    </button>
    <p>{{ count }}</p>
    <p>{{ isEvenOrOdd }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'Vuex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:mapGetters([
    'count',
    'isEvenOrOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'incrementAsync'
  ])
}
</script>
