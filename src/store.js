import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbs: [{
      label: 'Home',
      path: '/'
    }]
  },
  mutations: {
    setBreadcrumbs (state, crumbs) {
      state.breadcrumbs = crumbs
    },
    pushBreadcrumb (state, crumb) {
      state.breadcrumbs.push(crumb)
    },
    resetBreadcrumbs (state) {
      state.breadcrumbs = [{ label: 'Home', path: '/' }]
    }
  },
  actions: {

  }
})
