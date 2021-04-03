<template>
  <div
    class="mr-5 shadow-lg mx-auto p-4 border-4 items-center flex flex-row rounded-lg"
    
  >
    <div class="w-48 flex flex-col">
      <p class="text-base font-semibold"
      @click="addressSelected(index)">
        {{ address.name }} <br />
        {{ address.tel }}
      </p>
      <p class="text-base">{{ address.address }}</p>
      <p class="text-sm">{{ address.zip }}</p>
    </div>
    <div class="ml-5 w-1/3 mx-auto flex flex-col gap-4">
      <button
        class="bg-gray-900 rounded text-white font-semibold hover:bg-gray-700 transition"
        @click="editAddress(index)"
      >
        EDIT
      </button>
      <button
        class="bg-red-800 rounded text-white font-semibold hover:bg-red-600 transition"
        @click="deleteAddress(index)"
      >
        DELETE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAddressSlot",
  props: ["address", "index"],
  data() {
    return {};
  },
  methods: {
    editAddress: function (index) {
      this.$store.commit("USER_MAINTAIN_ADDRESS",index)
      this.$emit('editAddress')
    },
    deleteAddress: function (index) {
      this.$store.commit("USER_MAINTAIN_ADDRESS",index)
      this.$emit('deleteAddress')
    },
    addressSelected: function (index){
      console.log('Slot'+ index)
      this.$emit('addressSelected', index)
    }
  },
};
</script>