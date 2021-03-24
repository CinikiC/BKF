<template>
  <div class="mx-auto grid grid-cols-3">
    
    <div
      class="mx-auto mt-3 py-6"
      v-for="(item, index) in addresses"
      :key="index"
    >
      <user-address-slot
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
  name: "UserAddress",
  data() {
    return {
      addresses: [
        {
          name: "username",
          tel: "133-3333-3333",
          address: "Wuhan",
          zip: "123456",
        },
        {
          name: "username1",
          tel: "131-2222-3343",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3533",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "username1",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
        {
          name: "deletethis",
          tel: "131-2222-3363",
          address: "Hubei",
          zip: "33333",
        },
      ],
    };
  },
  methods: {
    changeAddress: function (address, index) {
      console.log("changeindex" + index);
      this.addresses[index] = address;
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