<template>
    <t-modal
      name="delete"
      header="Confirm Delete"
      hideCloseButton="true"
      variant="danger"
      v-model="display"
    >
      Delete this address?
      <template v-slot:footer>
        <button
          @click="deleteAddress"
          class="transition w-1/4 h-1/2 rounded bg-red-800 font-bold text-white hover:bg-red-600"
        >
          YES
        </button>
        <button
          @click="abort"
          class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700"
        >
          NO
        </button>
      </template>
    </t-modal>
</template>

<script>
export default {
    name: 'UserAddressDelete',
    props: ['display'],
    methods: {
        deleteAddress: function () {
            this.$emit('deleteAddress')
        },
        abort: function () {
            this.$emit('abort')
        }
    }
}
</script>