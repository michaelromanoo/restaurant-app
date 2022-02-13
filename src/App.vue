// NEW CODE
<template>
  <div id="app">
    <div class="content">
      <div class="restaurant-info">
        <h1>Restaurant App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex quo
          eum commodi vero veritatis sit excepturi fugit sunt laboriosam odit
          suscipit, reprehenderit, placeat quisquam adipisci. Tempora assumenda
          ipsum repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ullam
          reprehenderit delectus mollitia sit recusandae ipsa aperiam maxime
          quae. Fugiat velit blanditiis, et optio maxime sequi natus,
          consequatur architecto, vel consectetur corporis? Praesentium iste
          dolore quae aliquid unde doloremque deleniti!
        </p>
        <div class="menu">
          <Item />
          <Item />
          <Item />
        </div>
        <div class="menu">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Basket />
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import Basket from "./components/Basket.vue";

export default {
  name: "App",
  components: {
    Item,
    Basket,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.content {
  display: flex;
}

.restaurant-info {
  flex: 2;
}

.menu {
  display: flex;
}
</style>
