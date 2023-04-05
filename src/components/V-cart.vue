<template>
  <div class="V-cart">
    <h1>CART</h1>
    <VCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import VCartItem from "./V-cart-item";
import {mapActions} from 'vuex'
export default {
  components: { VCartItem },
  name: "V-cart",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART"
    ]),

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
};
</script>

<style lang="scss" scoped></style>
