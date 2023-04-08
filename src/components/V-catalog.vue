<template>
  <div class="V-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="V-catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>
      <div class="V-catalog__link_to_cart_count">Count:{{ cartCount }}</div>

    <h1>Catalog</h1>
    <div class="V-catalog__list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./V-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { VCatalogItem },
  name: "V-catalog",
  created() {},
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
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
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.V-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
  &__link_to_cart_count{
     position: absolute;
    top: 10px;
    right: 100px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>
