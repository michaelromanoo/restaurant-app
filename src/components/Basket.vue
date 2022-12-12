<template>
	<div class="basket-info">
		<div class="basket-card">
			<!-- TODO: add view basket function for mobile view -->
			<!-- TODO: bind product quantity to the modal -->
			<template v-if="allProducts.length > 0">
				<h2>Your Order</h2>
				<div
					class="flex-container"
					v-for="product in allProducts"
					:key="product.id"
				>
					<p>{{ product.title }}</p>
					<div class="price">
						<div class="quantity">
							<button
								class="quantity__btn"
								@click="incrementQuantity(product.id)"
							>
								+
							</button>
							<p>
								{{ product.quantity }}
							</p>
							<button
								class="quantity__btn"
								@click="decrementQuantity(product.id)"
							>
								-
							</button>
						</div>
						<div>${{ product.price }}</div>
					</div>
				</div>
				<p v-if="totalPrice > 0">Subtotal: {{ totalPrice }}</p>
				<div>
					<button @click="clearCart">Clear Cart</button>
				</div>
			</template>
			<template v-else>
				<h3>Your basket is empty</h3>
				<font-awesome-icon
					class="cart-icon"
					icon="fa-cart-shopping"
					size="xl"
				/>
			</template>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Basket',
	computed: {
		...mapGetters(['allProducts', 'totalPrice', 'productsLength']),
	},
	methods: {
		...mapActions(['incrementQuantity', 'decrementQuantity', 'clearCart']),
	},
};
</script>

<style>
/* Mobile First CSS */
.basket-info {
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	/* z-index: 150; */
}
.basket-card {
	/* position: fixed; */
	padding: 5px;
	text-align: center;
	background-color: #00ccbc;
	/* margin: 20px; */
	border-radius: 1rem;
}

.basket-card > .flex-container {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 1rem;
}

.basket-card > .flex-container > button {
	border: none;
	background: none;
}

.basket-card > .flex-container > .price {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.quantity {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;
}

.quantity__btn {
	background-color: transparent;
	border: none;
}

/* Desktop CSS */
@media (min-width: 768px) {
	/* .basket-card > p {
    color: red;
  } */

	.basket-card {
		/* position: fixed; */
		padding: 25px 16px;
		text-align: center;
		background-color: #00ccbc;
		/* margin: 20px; */
		border-radius: 1rem;
	}

	.basket-info {
		flex: 1;
		/* reset positioning */
		position: static;
	}

	/* .basket-btn {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: #9a9a9a;
    border: none;
  }

  .basket-info {
    display: block;
    flex: 1 !important;
  } */
}
</style>
