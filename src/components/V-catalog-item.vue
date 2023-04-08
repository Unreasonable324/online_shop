<template>
  <div class="V-catalog-item">
    <img
      class="V-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="V-catalog-item__name">{{ product_data.name }}</p>
    <p class="V-catalog-item__price">Price: {{ product_data.price }} &#8381;</p>
    <button class="V-catalog-item__add_to_cart_btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "V-catalog-item",
  created() {},
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    const cartItemData = this.product_data;
    cartItemData.quantity = 1;
  },
};
</script>

<style lang="scss">
.V-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
