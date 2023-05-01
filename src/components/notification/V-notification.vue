<template>
  <div class="V-notification">
    <transition-group name="V-transition-animate" tag="div" class="massages_list">
      <div class="V-notification__content" v-for="massage in massages" :key="massage.id">
        <div class="content__text">
          <span>{{ massage.name }}</span>
          <span>ㅤ &#10003;</span>
        </div>
        <div class="content__buttons">
          <button v-if="rightButton.length">{{ rightButton }}</button>
          <button v-if="leftButton.length">{{ leftButton }}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "V-notification",
  created() {},
  data() {
    return {};
  },
  props: {
    massages: {
      type: Array,
      default: () => {
        return [];
      },
    },
    rightButton: {
      type: String,
      default: "",
    },
    leftButton: {
      type: String,
      default: "",
    },
    timeout:{
      type: Number,
      default: 3000
    }
  },
  methods: {
    hideNotification() {
      let vm = this;

      if (this.massages.length) {
        setTimeout(function () {
          vm.massages.splice(vm.massages.length - 1, 1);
        }, vm.timeout);
      }
    },
  },
  watch: {
    massages: {
      handler() {
        this.hideNotification();
      },
      deep: true,
    },
  },
  mounted() {
    this.hideNotification();
  },
};
</script>

<style lang="scss">
.V-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;

  &__massages_list {
    display: flex;
    flex-direction: column-reverse;
  }
  &__content {
    padding: 16px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    background: green;
  }
  .content {
    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.V-transition-animate {
  &-enter-from {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.6s ease;
  }
  &-enter-to {
    opacity: 1;
  }
  &-leave-from {
    height: 50px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }
  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move {
    transition: transform 0.6s ease;
  }
}
</style>
