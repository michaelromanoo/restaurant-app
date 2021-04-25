<template>
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
        reprehenderit delectus mollitia sit recusandae ipsa aperiam maxime quae.
        Fugiat velit blanditiis, et optio maxime sequi natus, consequatur
        architecto, vel consectetur corporis? Praesentium iste dolore quae
        aliquid unde doloremque deleniti!
      </p>
      <div class="menu">
        <div class="card">
          <div class="card-content">
            <img src="https://dummyimage.com/200" alt="" />
            <div class="card-text">
              <h2>Menu Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quis?
              </p>
            </div>
            <button id="order-btn">Add to Order</button>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <img src="https://dummyimage.com/200" alt="" />
            <div class="card-text">
              <h2>Menu Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quis?
              </p>
            </div>
            <button id="order-btn">Add to Order</button>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <img src="https://dummyimage.com/200" alt="" />
            <div class="card-text">
              <h2>Menu Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quis?
              </p>
            </div>
            <button id="order-btn">Add to Order</button>
          </div>
        </div>
      </div>
              <div class="menu">
          <div class="card">
            <div class="card-content">
              <img src="https://dummyimage.com/200" alt="" />
              <div class="card-text">
                <h2>Menu Item</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, quis?
                </p>
              </div>
              <button id="order-btn">Add to Order</button>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <img src="https://dummyimage.com/200" alt="" />
              <div class="card-text">
                <h2>Menu Item</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, quis?
                </p>
              </div>
              <button>Add to Order</button>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <img src="https://dummyimage.com/200" alt="" />
              <div class="card-text">
                <h2>Menu Item</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, quis?
                </p>
                <button>Add to Order</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="basket-info">
      <div class="basket-card">
        <h2>Your Basket</h2>
        <p>Your Basket is empty....</p>
        <button>Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.restaurant-info {
  flex: 2;
}

.basket-info {
  flex: 1;
}

.basket-card {
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin: 20px;
}

.basket-card button {
  padding: 10px 30px;
  border-radius: 10px;
  background-color: gray;
  width: 100%;  
}

.menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
}

.card {
  flex: 1;
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin: 20px;
}

</style>
