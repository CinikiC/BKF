<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div v-show="addToCartSuccess">
      <t-alert variant="success" show> Added to your cart </t-alert>
    </div>

    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/400x400"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            BRAND NAME
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ this.product.productName }}
          </h1>
          <div class="flex mb-4"></div>
          <p class="leading-relaxed">{{ this.product.productDescp }}</p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
          ></div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >${{ this.product.productPrice }}</span
            >
            <button
              class="ml-14 w-7 h-7 rounded bg-green-600 hover:bg-green-300 text-center text-white font-bold font-mono"
              @click="decNumber"
            >
              -
            </button>
            {{ cartItem.Number }}
            <button
              class="w-7 h-7 rounded bg-red-600 hover:bg-red-300 text-center text-white font-bold font-mono"
              @click="addNumber"
            >
              +
            </button>
            <button
              @click="addToCart"
              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>

    <t-modal name="address" header="Select Address">
      <user-address @addressSelected="handleSelect($event)"></user-address>
    </t-modal>
  </section>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import UserAddress from "../user/UserAddress.vue";
export default {
  components: { Navbar, UserAddress },
  data() {
    return {
      cartItem: {
        OrderNo: null,
        Product: null,
        Price: null,
        Number: 0,
        Checked: false,
        Address: null,
      },
      addToCartSuccess: false,
    };
  },
  computed: {
    product() {
      return this.$store.state.products[this.$route.params.id - 1];
    },
    addresses() {
      return this.$store.state.addresses;
    },
  },
  methods: {
    addToCart: function () {
      this.$modal.show("address");
    },
    handleSelect: function (index) {
      console.log(this.addresses[index]);
      this.cartItem.Address = this.addresses[index];
      this.cartItem.Product = this.product.productName;
      this.cartItem.Price = this.product.productPrice;
      this.$store.commit("CART_CREATE", this.cartItem);
      this.$modal.hide("address");
      this.addToCartSuccess = true;
    },
    addNumber: function () {
      this.cartItem.Number++;
    },
    decNumber: function () {
      this.cartItem.Number--;
    },
  },
  watch: {
    addToCartSuccess: function (ne, oe) {
      setTimeout(() => {
        this.addToCartSuccess = false;
      }, 3000);
    },
  },
};
</script>
