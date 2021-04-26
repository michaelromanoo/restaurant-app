<template>
  <div class="modal-overlay">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">x</button>
      </header>
      <section class="modal-body">
        <img src="https://via.placeholder.com/150" alt="" />
        <h2>Menu Item</h2>
        <select>
          <option value="" disabled selected>Qty</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div class="modal-radio">
          <input type="radio" id="radio-one" value="Product Option 1" v-model="picked">
          <label for="one">Product Option 1</label>
          <br>
          <input type="radio" id="radio-two" value="Product Option 2" v-model="picked">
          <label for="two">Product Option 2</label>
          <br>
          <input type="radio" id="radio-three" value="Product Option 3" v-model="picked">
          <label for="two">Product Option 3</label>
          <br>
        </div>
        <div class="modal-input">
          <input type="checkbox" id="input-1" value="Product Option 1"  v-model="checkedNames">
          <label for="jack">Product Option 1</label>
          <br>
          <input type="checkbox" id="input-2" value="Product Option 2" v-model="checkedNames">
          <label for="john">Product Option 2</label>
          <br/>
          <input type="checkbox" id="input-3" value="Product Option 3" v-model="checkedNames">
          <label for="mike">Product Option 3</label>
        </div>
      </section>
      <footer class="modal-footer">
        <div class="modal-btns">
          <button type="button" class="btn" @click="close"> Cancel </button>
          <button type="button" class="btn" @click="add"> Add to Order</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-btns {
  display: flex;
  flex-direction: row;
}

.modal-btns button {
  flex: 1;
  margin: 10px;
  padding: 5px 10px;
}

.modal-body {
  position: relative;
  padding: 0px 15px;
  text-align: left;
}

.modal-body img {
  display: block;
  margin: 0 auto;
}

.modal-body select {
  width: 100%;
}

.modal-body .modal-radio,
.modal-body .modal-input {
  text-align: left;
  padding: 15px 0px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #9a9a9a;
  background: transparent;
}

.btn {
  color: black;
  background: #9a9a9a;
  border: 1px solid #9a9a9a;
  border-radius: 5px;
}

</style>