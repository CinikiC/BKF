<template>
  <div>
    <h1 class="font-bold text-xl mt-4">My Cart</h1>
    <t-table
      class="mt-10 mx-auto"
      :headers="[
        'Select All',
        'OrderNo',
        'Product',
        'Price',
        'Number',
        'Operations',
      ]"
      :data="this.cart"
    >
      <template slot="row" slot-scope="props">
        <tr
          :class="[
            props.trClass,
            props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
          ]"
        >
          <td :class="props.tdClass">
            <t-checkbox
              v-bind:value="props.row.OrderNo"
              v-model="sum"
              @change="check(props.rowIndex)"
            />
          </td>
          <td :class="props.tdClass">
            {{ props.row.OrderNo }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.Product }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.Price }}
          </td>
          <td :class="props.tdClass">
            <button
              class="w-1/5 rounded bg-green-600 hover:bg-green-300 text-center text-white font-bold font-mono"
              @click="decNumber(props.rowIndex)"
            >
              -
            </button>
            {{ props.row.Number }}
            <button
              class="w-1/5 rounded bg-red-600 hover:bg-red-300 text-center text-white font-bold font-mono"
              @click="addNumber(props.rowIndex)"
            >
              +
            </button>
          </td>
          <td :class="props.tdClass">
            <button
              class="w-1/2 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600"
              @click="
                $modal.show('delete', {
                  index: props.rowIndex,
                })
              "
            >
              DELETE
            </button>
          </td>
        </tr>
      </template>
      <template slot="tfoot" slot-scope="props">
        <tfoot :class="props.tfootClass">
          <tr :class="[props.trClass, 'bg-gray-200']">
            <td :class="props.tdClass">
              <button v-if="allChecked===false" @click="checkAll" class="w-3/4 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">SELECT ALL</button>
              <button v-else @click="checkAll" class="w-3/4 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">RESET</button>
            </td>
            <td colspan="3" :class="[props.tdClass, 'text-right']">
              <strong>Total:</strong>
            </td>
            <td>
              <strong class="text-lg">{{ total }}</strong>
            </td>
            <td colspan="4" :class="props.tdClass">
              <button
                class="w-3/4 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-red-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                @click="checkOut"
              >
                Check Out
              </button>
            </td>
          </tr>
        </tfoot>
      </template>
    </t-table>

    <t-modal
      name="delete"
      header="Confirm Delete"
      variant="danger"
      hideCloseButton="true"
    >
      Delete this order?
      <template v-slot:footer>
        <button
          @click="deleteOrder(index)"
          class="transition w-1/4 h-1/2 rounded bg-red-800 font-bold text-white hover:bg-red-600"
        >
          YES
        </button>
        <button
          @click="$modal.hide('delete')"
          class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700"
        >
          NO
        </button>
      </template>
    </t-modal>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: "Cart",
  data() {
    return {
      sum: [],
    };
  },
  computed: {
    total: function () {
      let amount = 0;
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].Checked === true) {
          amount = amount + this.cart[index].Price * this.cart[index].Number;
        }
      }
      return amount;
    },
    cart() {
      return this.$store.state.cart;
    },
    allChecked: function () {
      if (this.sum.length === this.cart.length) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    check(index) {
      this.$store.commit("CART_CHECK", index);
      
    },
    checkAll: function () {
      if (this.allChecked === true) {
        
        this.$store.commit("CART_RESET_ALL_CHECKS");
        this.sum = [];
      } else {
        
        this.$store.commit("CART_CHECK_ALL");
        this.sum=[]
        for (let index = 0; index < this.cart.length; index++) {
          this.sum.push(index+1);
        }
        
      }
    },
    addNumber(index) {
      this.$store.commit("CART_ADD", index);
    },
    decNumber(index) {
      this.$store.commit("CART_DEC", index);
    },
    deleteOrder(index) {
      this.$store.commit("CART_DELETE", index);
      this.$modal.hide("delete");
    },
    checkOut() {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].Checked === true) {
          this.$store.commit("USER_CREATE_ORDER", this.cart[index]);
        }
      }
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].Checked === true) {
          console.log(index)
          this.$store.commit("CART_DELETE", index);
          index--
        }
      }
    },
  },
  mounted() {
      if(JSON.stringify(this.$store.state.user)==='{}'){
        alert('Please login first')
        router.push('/login')
      }
  }
};
</script>
