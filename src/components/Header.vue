<template>
	<header>
		<nav class="navbar">
			<div class="brand-title">
				<h1>Restaurant App</h1>
			</div>
			<div class="shopping-cart">
				<font-awesome-icon
					class="cart-icon"
					icon="fa-cart-shopping"
					size="xl"
				/>
				<p v-if="productsLength > 0">{{ productsLength }}</p>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Header',
	computed: {
		...mapGetters(['productsLength']),
	},
};
</script>

<style scoped>
header {
	/* position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1; */
	margin-bottom: 15px;
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

h1 {
	color: #00ccbc;
}

.shopping-cart {
	display: flex;
	align-items: center;
	gap: 10px;
}

.cart-icon {
	color: #00ccbc;
}
</style>
