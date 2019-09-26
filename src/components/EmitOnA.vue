<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  name: 'emit-on-a',
  data() {
    return {
      name: 'tom',
    }
  },
  methods: {
    send() {
      eventBus.$emit('data-a', this.name)
    }
  }
}
</script>
