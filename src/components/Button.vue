// Parent Component => Button // when user clicks add, show modal
<template>
  <div>
    <button type="button" class="order-btn" @click="showModal">
      {{ text }}
    </button>
  </div>
</template>

<script>
// import Modal from "./Modal.vue";
export default {
  name: "Button",
  components: {
    // Modal,
  },
  // data() {
  //   return {
  //     isModalVisible: false,
  //   };
  // },
  methods: {
    clickButton() {
      console.log("click bitch");
    },
    // showModal() {
    //   console.log("show modal");
    //   console.log("isVisible", this.isModalVisible);
    //   this.isModalVisible = true;
    // },
    // closeModal() {
    //   console.log("close modal");
    //   console.log("isVisible", this.isModalVisible);
    //   this.isModalVisible = false;
    // },
  },
  props: {
    text: String,
  },
};
</script>

<style scoped>
.order-btn {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #9a9a9a;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
}
</style>
