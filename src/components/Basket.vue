<template>
  <div class="basket-info">
    <div class="basket-card">
      <h2>Your Basket</h2>
      <p>Your Basket is empty....</p>
      <button type="button" class="basket-btn">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
};
</script>

<style>
.basket-info {
  flex: 1;
}
.basket-card {
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin: 20px;
  border-radius: 1rem;
}
@media (min-width: 768px) {
  .basket-card {
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    margin: 20px;
  }

  .basket-btn {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: #9a9a9a;
    border: none;
  }
}
</style>
