// user.js 内写该 user 组件内用到的 state 、 getters 、 actions 和 mutations，并最后统一导出（类似上个例子中的 store.js ）
// 导入 types.js 文件
import types from "@/store/types"

const state = {
    count:5
}

// 定义 getters
var getters = {
    count(state){
        return state.count
    }
}

const actions = {
    increment({ commit }){
        // 此处提交的事件与下方 mutations 中的 types.INCREMENT 对应
        //与原来 commit('increment') 的原理相同，只是把类型名换成了常量
        commit(types.INCREMENT)
    },
    decrement({commit,state}){
        if (state.count>10) {
            // 此处提交的事件与下方 mutations 中的 types.DECREMENT 对应
            commit(types.DECREMENT)
        }
    }
}

const mutations = {
    // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
    [types.INCREMENT](state){
        state.count++
    },
    // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
    [types.DECREMENT](state){
        state.count--
    }
}
// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}
