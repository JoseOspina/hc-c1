import Vue from 'vue'
import Vuex from 'vuex'

import contextNav from './modules/contextNav'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},

  modules: {
    contextNav
  }
})
