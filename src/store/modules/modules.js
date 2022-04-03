// each module contains its own state, getters, actions & mutations
const state = {
  products: [],
};

// used to compute derived state based on store state
// computed properties for stores.
const getters = {
  allProducts: (state) => state.products,
  totalPrice: (state) =>
    state.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
};

// the only way to actually change state in a Vuex store
// by committing a mutation
// cannot directly call a mutation handler
// mutations are synchronous transactions
const mutations = {
  setProduct(state, newProduct) {
    // TODO: override data with same id
    // returns the index of the first element with the same id
    let index = state.products.findIndex(
      (product) => product.id == newProduct.id
    );
    console.log("duplicate index", state.products[index]);
    if (index !== -1) {
      // override value with new value, while not pushing a new value
      state.products.splice(index, 1, newProduct);
    } else {
      // push product object into state array
      state.products.push(newProduct);
    }
  },

  incrementQuantity(state, id) {
    console.log("product id", id);
    // find product in array with passed id
    let product = state.products.filter((product) => product.id == id);
    // increment quantity of product
    product[0].quantity++;
  },
  decrementQuantity(state, id) {
    // filter out product with passed id
    let product = state.products.filter((product) => product.id == id);
    console.log("quantity", product[0].quantity);
    // stop decrement when quantity = 0
    // TODO: code hella janky lmao needa fix
    product[0].quantity > 0
      ? product[0].quantity--
      : state.products.pop(product[0]);
  },
};

// actions commit mutations
// can contain arbitrary asynchronous operations
const actions = {
  setProduct({ commit }, newProduct) {
    commit("setProduct", newProduct);
  },
  incrementQuantity({ commit }, id) {
    commit("incrementQuantity", id);
  },
  decrementQuantity({ commit }, id) {
    commit("decrementQuantity", id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
