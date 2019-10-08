// index.js 是用来组装 actions.js 、 getters.js 、user.js 的，然后进行统一的导出
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import users from './modules/user'

// 导出 store 对象
export default new Vuex.Store({
    getters,
    actions,
    modules:{
        users
    }
})