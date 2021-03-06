import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {//初始化数据
    showFooter: true,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}

const getters = {//监视数据变化，类似于vue中的computed
    isShow() {
        return state.showFooter
    }
}

const mutations = {//改变数据的方法
    show(state) {
        state.showFooter = true
    },
    hide(state) {
        state.showFooter = false
    },
    changeLogin (state, user) {// 修改token，并将token存入localStorage
        state.Authorization = user.Authorization;
        localStorage.setItem('Authorization', user.Authorization);
    }


}

const actions ={//触发数据改变方法的方法 context 和 store具有相同的属性和方法
    showFooter (context ){
        context.commit('show')
    },
    hideFooter (context){
        context.commit('hide')
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store