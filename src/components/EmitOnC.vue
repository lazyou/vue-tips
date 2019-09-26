<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  name: 'emit-on-c',
  data() {
    return {
      name: '',
      age: '',
    }
  },
  // 在模板编译完成后执行
  mounted() {
    console.log('emit-on-c mouted')

    // 监听事件
    eventBus.$on('data-a', name => {
      console.log('on data-a:', name)
      this.name = name; // 箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })

    eventBus.$on('data-b', age => {
      console.log('on data-b:', age)
      this.age = age;
    })
  },
}
</script>
