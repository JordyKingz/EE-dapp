import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contractAddress: "",
    contractAbi: [],
    chainId: "0x1",
  },
  getters: {
    contractAddress: state => {
      return state.contractAddress
    },
    contractAbi: state => {
      return state.contractAbi
    },
    chainId: state => {
      return state.chainId
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
