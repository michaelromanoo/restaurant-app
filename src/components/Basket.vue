<template>
  <div class="basket-info">
    <div class="basket-card">
      <!-- TODO: add view basket function -->
      <!-- TODO: allow users to edit product quantity using state -->
      <template v-if="allProducts.length > 0">
        <h2>Your Order</h2>
        <div
          class="flex-container"
          v-for="product in allProducts"
          :key="product.id"
        >
          <button @click="incrementQuantity(product.id)">+</button>
          <p>
            {{ product.quantity }} X {{ product.title }} ${{ product.price }}
          </p>
          <button @click="decrementQuantity(product.id)">-</button>
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
      <!-- TODO: getter is not updating when state is changed  -->
      <p v-if="totalPrice > 0">Total Price: {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Basket",
  computed: mapGetters(["allProducts", "totalPrice"]),
  methods: {
    ...mapActions(["incrementQuantity", "decrementQuantity"]),
    // incrementQuantity(product_id) {
    //   // console.log("increment quantity");
    //   // console.log("product id", product_id);
    //   this.$store.dispatch("incrementQuantity", product_id);
    // },
    // decrementQuantity() {
    //   console.log("decrement quantity");
    // },
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
  justify-content: space-around;
  margin-bottom: 1rem;
}

.basket-card > .flex-container > button {
  border: none;
  background: none;
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
