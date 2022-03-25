<template>
  <div>
    <div class="card">
      <div class="card-content">
        <img src="https://dummyimage.com/200" alt="" />
        <div class="card-text">
          <h3>{{ item.title }}</h3>
          <p>${{ item.price }}</p>
        </div>
        <button type="button" class="order-btn" @click="showModal">
          Add to order
        </button>
      </div>
      <Modal
        :title="item.title"
        :description="item.description"
        :price="item.price"
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "Item",
  props: {
    item: Object,
  },
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
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
  emits: ["basket-data"],
};
</script>

<style scoped>
/* mobile first css */
.card {
  text-align: center;
  padding: 15px;
  margin: 20px;
  background-color: #f1f1f1;
}

.order-btn {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #9a9a9a;
  border: none;
}

@media (min-width: 768px) {
  .card {
    text-align: center;
    padding: 15px;
    margin: 20px;
    background-color: #f1f1f1;
  }

  .card > .card-content > img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
  }
}
</style>
