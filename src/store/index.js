import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productDetailsModal: {
      product: {}
    },
    showProductDetailsModal: false
  },
  mutations: {
    toggleProductDetailsModal(state, { show, product }) {
      state.showProductDetailsModal = show
      if (show) {
        state.productDetailsModal.product = product
        document.querySelector('body').classList.add('modal-visible')
      } else {
        document.querySelector('body').classList.remove('modal-visible')
      }
    }
  },
  actions: {},
  modules: {}
})
