<template>
  <div class="V-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="V-catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>

    <div class="V-catalog__link_to_cart_count">Count:{{ cartCount }}</div>

    <h1>Catalog</h1>
    <VSelect :Categories="Categories" @select="sortByCatigories" :selected="selected" />
    <div class="V-catalog__list">
      <VCatalogItem
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VSelect from "../V-select";
import VCatalogItem from "./V-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    VSelect,
    VCatalogItem,
  },
  name: "V-catalog",
  created() {},
  data() {
    return {
      Categories: [
        { name: "Мужские", value: "М" },
        { name: "Женские", value: "Ж" },
        { name: "Все", value: "all" },
      ],
      selected: "Все",
      sortedProducts: [],
    };
  },

  props: {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
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
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCatigories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.name
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
  &__link_to_cart_count {
    position: absolute;
    top: 10px;
    right: 100px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
  &__link_to_cart_select {
    position: absolute;
    top: 10px;
    right: 200px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>
