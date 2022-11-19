// a centralized store for all the components in an application
// with rules ensuring that the state can only be mutated in a predictable fashion
// each module contains its own state, getters, actions & mutations

// single source of truth
const state = {
	strict: true,
	products: [],
};

// used to compute derived state based on store state
// computed properties for stores.
const getters = {
	// get all products
	allProducts: (state) => state.products,
	// get products length
	productsLength: (state) => state.products.length,
	// get price of all products
	totalPrice: (state) =>
		state.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
};

// the only way to actually change state in a Vuex store is by committing a mutation
// cannot directly call a mutation handler
// mutations are synchronous transactions
const mutations = {
	setProduct(state, newProduct) {
		// update the value of an existing item in the cart
		// returns the index of the first element with the same id
		let index = state.products.findIndex(
			(product) => product.id == newProduct.id
		);
		console.log('duplicate index', state.products[index]);
		if (index !== -1) {
			// override value with new value, while not pushing a new value
			state.products.splice(index, 1, newProduct);
		} else {
			// push product object into state array
			state.products.push(newProduct);
		}
	},

	incrementQuantity(state, id) {
		console.log('product id', id);
		// find product in array with passed id
		let product = state.products.filter((product) => product.id == id);
		console.log('product', product);
		// increment quantity of product
		product[0].quantity++;
	},
	decrementQuantity(state, id) {
		let index = state.products.findIndex((product) => product.id == id);
		let product = state.products[index];
		console.log('index', index);
		console.log('product', state.products[index]);

		console.log('before decrement quantity', product.quantity);
		if (product.quantity > 0) {
			product.quantity--;
		}

		if (product.quantity == 0) {
			state.products.splice(index, 1);
		}

		console.log('after decrement quantity', product.quantity);

		// product[0].quantity > 0
		//   ? product[0].quantity--
		//   : state.products.pop(product[0]);
		// if quantity before decrement > 0, decrease by 1
		// if (product[0].quantity > 0) {
		//   product[0].quantity--;
		// }
		// stop decrement when quantity = 0
		// if (product[0].quantity == 0) {
		//   // state.products.pop(product[0]);
		// }
	},
};

// actions commit mutations
// can contain arbitrary asynchronous operations
const actions = {
	setProduct({ commit }, newProduct) {
		commit('setProduct', newProduct);
	},
	incrementQuantity({ commit }, id) {
		commit('incrementQuantity', id);
	},
	decrementQuantity({ commit }, id) {
		commit('decrementQuantity', id);
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
