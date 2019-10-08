<template>
  <div id="app">
    <p>================== 父组件通过props向下传递数据给子组件: ==================</p>
    <UsersParent/>
    <hr>

    <p>================== 组件间通信：任意组件间使用 eventBus 的 emit, on: ==================</p>
    <EmitOn/>
    <hr>

    <p>================== 组件间通信：vuex 模块化: ==================</p>
    <Vuex/>
    <hr>
  </div>
</template>

<script>
import UsersParent from "./components/UsersParent"
import EmitOn from "./components/EmitOn"
import Vuex from "./components/Vuex"

// 父组件通过props向下传递数据给子组件。
// 注：组件中的数据共有三种形式：data、props、computed.
export default {
  name: 'App',
  components:{
    UsersParent,
    EmitOn,
    Vuex,
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
