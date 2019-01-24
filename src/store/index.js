import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import common from './modules/common'
import homePage from './modules/homePage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {

    common,
    homePage

  },
  getters
})

export default store
