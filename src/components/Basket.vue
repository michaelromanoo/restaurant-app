<template>
  <div class="basket-info">
    <div class="basket-card">
      <!-- TODO: allow users to edit product quantity using state -->
      <!-- add +/- buttons to allow users to make changes to order -->
      <h2>Your Basket</h2>
      <div v-for="product in allProducts" :key="product.id">
        <p>{{ product.quantity }} X {{ product.title }} ${{ product.price }}</p>
      </div>
      <p>Total Price: {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Basket",
  computed: mapGetters(["allProducts", "totalPrice"]),
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
