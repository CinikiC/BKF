<template>
    <t-modal name="add" header="Add Address" hideCloseButton=true focusOnOpen=true v-model="display">
        <div class="justify-items-auto items-center grid grid-cols-2 gap-2">
            
                <label class="text-base font-semibold">Name</label>
                <input class="w-1/2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" v-model="editForm.name" />
            
            
                <label class="text-base font-semibold">Phone</label>
                <input class="w-1/2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" v-model="editForm.tel" />
            
            
                <label class="text-base font-semibold">Address</label>
                <input class="w-1/2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" v-model="editForm.address" />
            
            
                <label class="text-base font-semibold">Zip</label>
                <input class="w-1/2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" v-model="editForm.zip" />
            
        </div>
        <template v-slot:footer>
            <button @click="abort" class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700">CANCEL</button>
            <button @click="addAddress" class="transition w-1/4 h-1/2 bg-green-900 font-bold text-white rounded hover:bg-green-600">DONE</button>
        </template>
    </t-modal>
</template>

<script>
export default {
    name: 'UserAddressAdd',
    props: ['display'],
    data() {
        return {
            editForm: {
                name: '',
                tel: '',
                address: '',
                zip: ''
            }
        }
    },
    methods: {
        addAddress: function () {
            this.$emit('addAddress', this.editForm)
            this.editForm=[]
        },
        abort: function () {
            this.$emit('abort')
            this.editForm=[]
        }
    }
}
</script>