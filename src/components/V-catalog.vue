<template>
  <div class="V-catalog">
    <h1>Catalog</h1>
    <div class="V-catalog__list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendDataToParent="showChildArticleInConsole"
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
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showChildArticleInConsole(data) {
      console.log(data);
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
}
</style>
