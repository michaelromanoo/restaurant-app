<template>
  <div class="card">
    <div class="card-content">
      <img src="https://dummyimage.com/200" alt="" />
      <div class="card-text">
        <h2>Menu Item</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis?
        </p>
      </div>
      <Button text="Add to Order" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Item",
  components: {
    Button,
  },
};
</script>

<style scoped>
.card {
  text-align: center;
  padding: 15px;
  margin: 20px;
  background-color: #f1f1f1;
}
</style>
