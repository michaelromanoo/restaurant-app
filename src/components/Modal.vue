<template>
  <div class="modal-overlay">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="$emit('close')">
          x
        </button>
      </header>
      <section class="modal-body">
        <slot name="body">
          <!-- TODO: disable submit when quantity = 0 -->
          <form class="order-form" @submit="onSubmit">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <img src="https://via.placeholder.com/150" alt="" />
            <br />
            <input
              type="number"
              v-model="quantity"
              placeholder="Insert Quantity..."
            />
            <!-- pass vue slot into a component -->
            <!-- todo: study vue slots -->
            <!-- TODO: change price as quantity changes -->
            <div class="modal-btns">
              <button type="submit" class="btn">Add for ${{ price }}</button>
            </div>
          </form>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <!-- <div class="modal-btns">
            <button type="button" class="btn">Cancel</button>
          </div> -->
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      quantity: "",
    };
  },
  props: {
    title: String,
    description: String,
    price: Number,
    id: Number,
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // close modal on form submit
      this.$emit("close");
      // send product info as object to state
      // triggers setProduct action
      this.$store.dispatch("setProduct", {
        id: this.id,
        title: this.title,
        quantity: Number(this.quantity),
        price: this.price,
      });
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
  /* height: 400px; */
  width: 400px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: #4aae9b;
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
  padding: 10px;
}

.modal-body {
  position: relative;
  padding: 0px 15px;
  text-align: left;
}

.modal-body > .order-form {
  text-align: center;
}

.modal-body img {
  display: block;
  margin: 0 auto;
}

.modal-body select {
  margin: 10px;
  width: 50%;
}

.modal-body .modal-radio,
.modal-body .modal-input {
  text-align: left;
  padding: 15px 0px;
}

input[type="number"] {
  border: none;
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
  font-weight: 700;
}
</style>
