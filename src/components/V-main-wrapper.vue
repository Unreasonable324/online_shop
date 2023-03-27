<template>
  <div class="v-main-wrapper">
    <p>main wrapper</p>
    <VCatalog />
    <VCart />
  </div>
</template>

<script>
import VCart from "./V-cart";
import VCatalog from "./V-catalog";
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
};
</script>

<style lang="scss">

.v-main-wrapper {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
