<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
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
  max-width: 900px;
  margin: 0 auto;
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 100px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>
