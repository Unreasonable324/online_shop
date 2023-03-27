<template>
  <div  class="V-catalog" >
    <h1>Catalog</h1>
    <VCatalogItem/>

  </div>
</template>

<script>
import VCatalogItem from './V-catalog-item'
export default {
  components: { VCatalogItem },
  name: "V-catalog",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
