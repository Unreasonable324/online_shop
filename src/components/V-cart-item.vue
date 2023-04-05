<template>
  <div class="V-cart-item">
    <img
      class="V-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="V-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="V-cart-item__quantity">
    <p>Qty:</p>
    {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "V-cart-item",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    const cartItemData = this.cart_item_data;
    cartItemData.quantity = 1;
  },
};
</script>

<style lang="scss">
.V-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 50px;
  }
}
</style>
