<template>
  <div class="basket-info">
    <div class="basket-card">
      <!-- TODO: allow users to edit product quantity using state -->
      <!-- add +/- buttons to allow users to make changes to order -->
      <h2>Your Basket</h2>
      <div
        class="flex-container"
        v-for="product in allProducts"
        :key="product.id"
      >
        <button @click="incrementQuantity(product.id)">+</button>
        <p>{{ product.quantity }} X {{ product.title }} ${{ product.price }}</p>
        <button @click="decrementQuantity(product.id)">-</button>
      </div>
      <!-- TODO: getter is not updating when state is changed  -->
      <p>Total Price: {{ totalPrice }}</p>
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
.basket-info {
  flex: 1;
}
.basket-card {
  /* position: fixed; */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
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
}

@media (min-width: 768px) {
  /* .basket-card {
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    margin: 20px;
  } */

  .basket-btn {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: #9a9a9a;
    border: none;
  }
}
</style>
