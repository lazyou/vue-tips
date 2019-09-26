<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  name: 'emit-on-b',
  data() {
    return {
      age: 20
    }
  },
  methods: {
    send() {
      eventBus.$emit('data-b', this.age)
    }
  }
}
</script>
