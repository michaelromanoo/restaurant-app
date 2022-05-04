// NEW CODE
<template>
  <div id="app">
    <Header />
    <div class="content">
      <div class="restaurant-info">
        <!-- <h1>Restaurant App</h1> -->
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
          <Items :items="items" />
        </div>
      </div>
      <Basket />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Items from "./components/Items.vue";
import Basket from "./components/Basket.vue";

export default {
  name: "App",
  components: {
    Header,
    Items,
    Basket,
  },
  data() {
    return {
      items: [],
      isModalVisible: false,
    };
  },
  created() {
    this.items = [
      {
        id: 1,
        title: "Classic Burger",
        description: "4oz beef patty, pickles, onion, lettuce, house sauce",
        price: 105,
      },
      {
        id: 2,
        title: "Cheese Burger",
        description:
          "4oz beef patty, cheese, pickles, onion, lettuce, house sauce",
        price: 115,
      },
      {
        id: 3,
        title: "Double Cheese Burger",
        description:
          "Double 4oz beef patty, double cheese, pickles, onion, lettuce, house sauce",
        price: 115,
      },
      {
        id: 4,
        title: "Classic Fries",
        description: "Fries homie",
        price: 35,
      },
      {
        id: 5,
        title: "Cheese Fries",
        description: "Fries homie but with hella cheese",
        price: 40,
      },
      {
        id: 6,
        title: "Chili Cheese Fries",
        description: "Spicy cheese fries on the dead homies",
        price: 45,
      },
    ];
  },
  methods: {
    showModal() {
      console.log("show modal");
      console.log("isVisible", this.isModalVisible);
      this.isModalVisible = true;
    },
    closeModal() {
      console.log("close modal");
      console.log("isVisible", this.isModalVisible);
      this.isModalVisible = false;
    },
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
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .content {
    display: flex;
  }

  .restaurant-info {
    flex: 2;
  }
}
</style>
