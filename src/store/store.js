import { createStore } from 'vuex';
import modules from './modules/modules';

// create store
const store = createStore({
	modules: { modules, namespaced: true },
});

export default store;
