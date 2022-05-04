<template>
  <div class="menu-grid">
    <div class="menu-item-card" :key="item.id" v-for="item in items">
      <Item :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Items",
  data() {
    return {
      quantity: String,
    };
  },
  props: {
    items: Array,
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
/* mobile first css */
.menu-grid {
  display: block;
}
@media (min-width: 768px) {
  .menu-grid {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: repeat(3, minmax(0, 1fr));
  }
}
</style>
