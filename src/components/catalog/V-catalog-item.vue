<template>
  <div class="V-catalog-item">
    <VPopup
      v-if="isInfoPopupVisible"
      right-btn-title="Add to cart"
      :popup-title="product_data.name"
      @closePopup="closePopupInfo"
      @rightBtnAction="addToCart"
      ><img
        class="V-catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
      <div>
        <p class="V-catalog-item__price">Price: {{ product_data.price }} &#8381;</p>
        <p class="V-catalog-item__category">{{ product_data.category }}</p>
      </div>
    </VPopup>
    <img
      class="V-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="V-catalog-item__name">{{ product_data.name }}</p>
    <p class="V-catalog-item__price">Price: {{ product_data.price }} &#8381;</p>
    <button class="V-catalog-item__show-info" @click="showPopupInfo">Show info</button>
    <button class="V-catalog-item__add_to_cart_btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
import VPopup from "../popup/V-popup";
export default {
  components: { VPopup },
  name: "V-catalog-item",
  created() {},
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopupInfo() {
      this.isInfoPopupVisible = false;
    },
  },
  // mounted() {
  //   const cartItemData = this.product_data;
  //   cartItemData.quantity = 1;
  // },
};
</script>

<style lang="scss">
.V-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
