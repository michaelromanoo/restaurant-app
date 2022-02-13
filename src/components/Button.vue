<template>
  <button type="button" class="order-btn" @click="clickButton">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    clickButton() {
      console.log("click bitch");
    },
  },
  props: {
    text: String,
  },
};
</script>

<style scoped></style>
