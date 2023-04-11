<template>
  <div class="V-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">{{ selected }}</p>
    <div class="options" v-if="areOptionsVisible">
      <p v-for="category in Categories" :key="category.value" @click="selectOption(category)">
        {{ category.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-select",
  created() {},
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  props: {
    Categories: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
    
  },
  methods: {
    selectOption(category) {
      console.log(category.name);
      this.$emit("select", category);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
   
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.V-select {
  width: 200px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
.V-select p {
  margin: 0;
}
.title {
  padding: $padding 0;
  border: 1px solid #aeaeae;
}
.options {
  box-sizing: border-box;
  border: 1px solid #aeaeae;
  position: absolute;
  top: 35px;
  right: 0;
  width: 100%;
}
.options p:hover {
  background: #e7e7e7;
}
.options p{
  padding: $padding 0;
  background: #fff;
}
</style>
