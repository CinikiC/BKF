<template>
  <div class="mx-auto">
    <h1 class="font-bold text-xl mt-4">My Orders</h1>
    <t-table
      class="mt-10 mx-auto"
      :headers="['OrderID', 'Product', 'Price', 'Status', 'Operations']"
      :data="this.orders"
    >
        <template slot="row" slot-scope="props">
            <tr
                :class="[
                props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
                <td :class="props.tdClass">
                    {{ props.row.orderID }}
                </td>
                <td :class="props.tdClass">
                    {{ props.row.product }}
                </td>
                <td :class="props.tdClass">
                    {{ props.row.price }}
                </td>
                <td :class="props.tdClass">
                    <t-tag tag-name="p" variant="badge" v-if="props.row.status === 'Finished'" class="bg-green-300">{{ props.row.status }}</t-tag>
                    <t-tag tag-name="p" variant="badge" v-else-if="props.row.status === 'Delivering'" class="bg-yellow-300">{{ props.row.status }}</t-tag>
                    <t-tag tag-name="p" variant="badge" v-else-if="props.row.status === 'Returned'" class="bg-gray-300">{{ props.row.status }}</t-tag>
                    <t-tag tag-name="p" variant="badge" v-else class="bg-red-300">{{ props.row.status }}</t-tag>
                </td>
                <td :class="props.tdClass">
                    <button @click="returned(props.rowIndex)" v-if="props.row.status === 'Finished'" class="text-center w-20 font-bold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">Return</button>
                    <button @click="cancel(props.rowIndex)" v-else-if="props.row.status !== 'Cancelled'" class="w-20 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">Cancel</button>
                </td>
            </tr>
        </template>
    </t-table>
  </div>
</template>

<script>
export default {
  name: "UserOrder",
  data() {
    return {
      
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders
    }
  },
  methods: {
    returned: function (index) {
      this.$store.commit('USER_RETURN_ORDER', index)
    },
    cancel: function (index) {
      this.$store.commit('USER_CANCEL_ORDER', index)
    }
  }
};
</script>