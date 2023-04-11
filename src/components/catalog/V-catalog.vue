<template>
  <div class="V-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="V-catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>

    <div class="V-catalog__link_to_cart_count">Count:{{ cartCount }}</div>

    <h1>Catalog</h1>
    <div class="filters">
      <VSelect
        :Categories="Categories"
        @select="sortByCatigories"
        :selected="selected"
        :isExpanded="IS_MOBILE"
      />
      <div class="range-slider">
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="10000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="10000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

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
      minPrice: 0,
      maxPrice: 10000,
    };
  },

  props: {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "IS_MOBILE", "IS_DESKTOP"]),
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
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCatigories();
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCatigories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name;
          return e.category === category.name;
        });
      }
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data arrived");
        this.sortByCatigories();
      }
    });
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
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -4px;
}
</style>
