<template>
  <div
    class="mr-5 shadow-lg mx-auto p-4 border-4 items-center flex flex-row rounded-lg"
  >
    <div class="w-48 flex flex-col">
      <p class="text-base font-semibold">{{address.name}} <br> {{address.tel}}</p>
      <p class="text-base">{{address.address}}</p>
      <p class="text-sm">{{address.zip}}</p>
    </div>
    <div class="ml-5 w-1/3 mx-auto flex flex-col gap-4">
      <button
        class="bg-gray-900 rounded text-white font-semibold hover:bg-gray-700 transition"
        @click="$modal.show('edit')"
      >
        EDIT
      </button>
      <button
        class="bg-red-800 rounded text-white font-semibold hover:bg-red-600 transition"
        @click="$modal.show('delete')" 
      >
        DELETE
      </button>
    </div>

    <t-modal name="edit" header="Edit Address" hideCloseButton=true focusOnOpen=true>
        <div class="justify-items-auto items-center grid grid-cols-2 gap-2">
            
                <label class="text-base font-semibold">Name</label>
                <input class="w-full" v-model="editform.name" />
            
            
                <label class="text-base font-semibold">Phone</label>
                <input class="w-full" v-model="editform.tel" />
            
            
                <label class="text-base font-semibold">Address</label>
                <input class="w-full" v-model="editform.address" />
            
            
                <label class="text-base font-semibold">Zip</label>
                <input class="w-full" v-model="editform.zip" />
            
        </div>
        <template v-slot:footer>
            <button @click="$modal.hide('edit')" class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700">CANCEL</button>
            <button @click="changeAddress" class="transition w-1/4 h-1/2 bg-green-900 font-bold text-white rounded hover:bg-green-600">DONE</button>
        </template>
    </t-modal>

    <t-modal name="delete" header="Confirm Delete" hideCloseButton=true variant=danger>
        Delete this address?
        <template v-slot:footer>
            <button @click="deleteAddress" class="transition w-1/4 h-1/2 rounded bg-red-800 font-bold text-white hover:bg-red-600">YES</button>
            <button @click="$modal.hide('delete')" class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700">NO</button>
        </template>
    </t-modal>

  </div>
</template>

<script>
export default {
    name: 'UserAddressSlot',
    props: ['address'],
    data () {
        return {
            editform: {
                name: '',
                tel: '',
                address: '',
                zip: ''
            }
        };
    },
    methods: {
        changeAddress: function () {
            this.$emit('changed', this.editform)
            this.$modal.hide('edit')
            this.$forceUpdate()
        },
        deleteAddress: function () {
            console.log('Delete address')
            this.$emit('deleted')
            this.$modal.hide('delete')
            this.$forceUpdate()
        }
    }
}
</script>