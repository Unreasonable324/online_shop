<template>
  <div class="V-cart">
    <router-link :to="{ name: 'catalog' }"
      ><div class="V-catalog__link_to_cart">Catalog</div>
    </router-link>
    <h1>CART</h1>
    <p v-if="!CART.length">There are no producrts in cart...</p>
    <VCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="V-cart__total">
      <p class="V-cart__total__name">Total: {{ cartTotalCoast }} &#8381; </p>
      <p>_</p>
      <p class="V-cart__total__name"> Count: {{ cartCount}}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import VCartItem from "./V-cart-item";
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCoast() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
          console.log(item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
    cartCount() {
      let count = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          count.push(item.quantity);
        }

        count = count.reduce(function (sum, el) {
          return sum + el;
        });
        return count;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREMENT_CART_ITEM", "DECREMENT_CART_ITEM"]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.V-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: $green_bg;
    color: #fff;
    font-size: 20px;
  }
  &__total__name {
    // margin-right: $margin;
  }
}
</style>
