<template>
  <div class="mx-auto">
    <button @click="addAddress" class="bg-gray-900 mt-10 w-1/4 rounded text-white font-semibold hover:bg-gray-700 transition">NEW ADDRESS</button>
    <div class="mx-auto mt-3 py-6 grid grid-cols-3 gap-4">
      <user-address-slot
        v-for="(item, index) in addresses"
        :key="index"
        :address="item"
        :index="index"
        @editAddress="editAddress"
        @deleteAddress="deleteAddress"
        @addressSelected="handleSelect($event)"
      ></user-address-slot>
    </div>
    <user-address-edit
      :display="editModal"
      @editAddress="changeAddress($event)"
      @abort="hideEdit"
    ></user-address-edit>
    <user-address-delete
      :display="deleteModal"
      @deleteAddress="removeAddress"
      @abort="hideDelete"
    ></user-address-delete>
    <user-address-add
    :display="addModal"
    @addAddress="newAddress($event)"
    @abort="hideAdd"></user-address-add>
  </div>
</template>

<script>
import UserAddressDelete from "./UserAddressDelete.vue";
import UserAddressEdit from "./UserAddressEdit.vue";
import UserAddressSlot from "./UserAddressSlot";
import UserAddressAdd from "./UserAddressAdd"
export default {
  components: { UserAddressSlot, UserAddressEdit, UserAddressDelete, UserAddressAdd },
  computed: {
    addresses() {
      return this.$store.state.user.addresses;
    },
  },
  name: "UserAddress",
  data() {
    return {
      editModal: false,
      deleteModal: false,
      addModal: false
    };
  },
  mounted() {
    this.$store.dispatch('USER_GET_ADDRESSES')
  },
  methods: {
    changeAddress: function (newAddress) {
      console.log("changeindex" + this.$store.state.processingAddressIndex);
      this.$store.commit("USER_EDIT_ADDRESS", {
        index: this.$store.state.processingAddressIndex,
        address: newAddress,
      });
      this.editModal = false;
    },
    deleteAddress: function () {
      this.deleteModal=true
    },
    hideDelete: function () {
      this.deleteModal=false
    },
    removeAddress: function () {
      this.$store.commit("USER_REMOVE_ADDRESS", this.$store.state.processingAddressIndex)
      this.deleteModal=false
    },
    editAddress: function () {
      this.editModal = true;
    },
    hideEdit: function () {
      this.editModal = false;
    },
    addAddress: function () {
      this.addModal=true
    },
    newAddress: function (newAddress) {
      const self=this
      this.$store.dispatch("USER_ADD_ADDRESS", newAddress).then(()=>{
        self.addModal=false
      }).catch(()=>{
        alert('Add address failed')
      })
      
    },
    hideAdd: function () {
      this.addModal=false
    },
    handleSelect: function (index) {
      console.log('address'+index)
      this.$emit('addressSelected', index)
    }
  },
};
</script>