<template>
  <div id="app">
    <Users :users="users" @titleChanged="updateTitle"></Users>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import Users from "./Users"

// 父组件通过props向下传递数据给子组件。
// 注：组件中的数据共有三种形式：data、props、computed.
export default {
  name: 'UsersParent',
  data(){
    return{
      users: ["Henry", "Bucky", "Emily"],
      title: "传递的是一个值"
    }
  },
  components:{
    Users
  },
  methods:{
    updateTitle(e){   //声明这个函数
      this.title = e;
    }
  },
}
</script>
