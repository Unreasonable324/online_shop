<template>
  <div class="v-main-wrapper">
    <p>main wrapper</p>
    <VCatalog />
    <VCart 
    v-if="CART.length"
    :cart_data="CART"
    />
  </div>
</template>

<script>
import VCart from "./V-cart";
import VCatalog from "./V-catalog";
import { mapGetters } from "vuex";
export default {
  components: {
    VCart,
    VCatalog,
  },
  name: "V-main-wrapper",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
// body{
//   background: #aaaaaa;
// }
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
