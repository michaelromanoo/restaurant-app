// each module contains its own state, getters, actions & mutations
const state = {
  products: [],
};

// used to compute derived state based on store state
// computed properties for stores.
const getters = {
  allProducts: (state) => state.products,
  totalPrice: (state) =>
    state.products.reduce((acc, curr) => acc + curr.price, 0),
};

// the only way to actually change state in a Vuex store
// by committing a mutation
// cannot directly call a mutation handler
// mutations are synchronous transactions
const mutations = {
  setProduct(state, product) {
    // push product object into state array
    state.products.push(product);
  },
};

// actions commit mutations
// can contain arbitrary asynchronous operations
const actions = {
  setProduct({ commit }, product) {
    // console.log("product", product);
    commit("setProduct", product);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
