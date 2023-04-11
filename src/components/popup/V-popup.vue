<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="V-popup">
      <div class="V-popup__header">
        <span>{{ popupTitle }}</span>
        <span class="closePopup" @click="closePopup">&#10006;</span>
      </div>
      <div class="V-popup__content">
        <slot></slot>
      </div>
      <div class="V-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button class="submit_btn" @click="rightBtnAction">{{ rightBtnTitle }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-popup",
  created() {},
  data() {
    return {};
  },
  props: {
    popupTitle: {
      type: String,
      default: "popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        console.log(123);
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

.V-popup {
  padding: $padding * 2;
  position: fixed;
  top: 50px;
  z-index: 10;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  .closePopup {
    cursor: pointer;
  }
  .closePopup:hover {
    transform: scale(1.5);
  }
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close_modal {
    border: 0;
    cursor: pointer;
    border-radius: $radius;
    padding: $padding;
    color: #fff;
    background: red;
  }
  .submit_btn {
    cursor: pointer;
    border: 0;
    border-radius: $radius;
    padding: $padding;
    color: #fff;
    background: $green_bg;
  }
}
</style>
