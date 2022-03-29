import Vuex from "vuex";
import Vue from "vue";
import modules from "./modules/modules";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  // can have multiple modules
  modules: {
    modules,
  },
});
