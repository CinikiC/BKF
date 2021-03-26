<template>
  <div class="mx-auto">
    <div class="mx-auto mt-3 py-6 grid grid-cols-3 gap-4">
      <user-address-slot
        v-for="(item, index) in addresses"
        :key="index"
        :address="item"
        v-on:changed="changeAddress($event, index)"
        v-on:deleted="deleteAddress(index)"
      ></user-address-slot>
    </div>
  </div>
</template>

<script>
import UserAddressSlot from "./UserAddressSlot";
export default {
  components: { UserAddressSlot },
  computed: {
    addresses() {
      return this.$store.state.addresses;
    },
  },
  name: "UserAddress",
  data() {
    return {};
  },
  methods: {
    changeAddress: function (newAddress, editIndex) {
      console.log("changeindex" + editIndex);
      this.$store.commit("USER_EDIT_ADDRESS", {
        index: editIndex,
        address: newAddress,
      });
      this.$forceUpdate();
    },
    deleteAddress: function (index) {
      console.log("deleteindex " + index);
      this.addresses.splice(index, 1);
      this.$forceUpdate();
    },
  },
};
</script>