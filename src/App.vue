<template>
  <div id="app"></div>
  <VMainWrapper />
</template>
<script>
import VMainWrapper from "./components/V-main-wrapper.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    VMainWrapper,
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESKTOP"]),
  },
  methods: {
    ...mapActions(["SET_MOBILE", "SET_DESKTOP"]),
  },
  mounted() {
    let vm = this;
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
        console.log("desktop", vm.IS_DESKTOP);
        console.log("mobile", vm.IS_MOBILE);
      } else {
        vm.SET_MOBILE();
        console.log("mobile", vm.IS_MOBILE);
        console.log("desktop", vm.IS_DESKTOP);
      }
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
