<template>
  <div id="app">
    <UsersParent></UsersParent>
    <EmitOn></EmitOn>
  </div>
</template>

<script>
import UsersParent from "./components/UsersParent"
import EmitOn from "./components/EmitOn"

// 父组件通过props向下传递数据给子组件。
// 注：组件中的数据共有三种形式：data、props、computed.
export default {
  name: 'App',
  components:{
    UsersParent,
    EmitOn,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
