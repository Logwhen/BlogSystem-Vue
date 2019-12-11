import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
        id:"loading",
        userName:"loading",
        avatarUrl:"loading",
    },
  },
  setters:{

  },
  getters:{
  },
  mutations: {
    updateUser(state, user){
        state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
