<template>
  <div class="hello">
    <ul>
      <li v-for="user in users" :key="user">
        {{user}}
      </li>

      <h1 @click="changeTitle">{{title}}</h1>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  props:{
    // 这个就是父组件中子标签自定义名字
    users:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      title:"Vue.js Demo",
    }
  },
  methods:{
    changeTitle() {
      // 自定义事件  传递值“子向父组件传值”
      this.$emit("titleChanged", "子向父组件传值");
    }
  }
}
</script>
