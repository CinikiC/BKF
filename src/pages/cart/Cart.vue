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
              checked
              v-bind:value="props.row.Price * props.row.Number"
              v-model="sum"
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
              <t-checkbox v-model="allChecked" @change="checkAll" />
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
import Vue from "vue";
export default {
  name: "Cart",
  data() {
    return {
      sum: [],
      cart: [
        {
          OrderNo: "00001",
          Product: "P1",
          Price: 27,
          Number: "3",
        },
        {
          OrderNo: "00002",
          Product: "P3",
          Price: 20,
          Number: "1",
        },
      ],
      allChecked: false,
      allCheckArr: [],
    };
  },
  computed: {
    total: function () {
      return eval(this.sum.join("+"));
    },
  },
  mounted() {
    console.log("mounted.");
    for (var index in this.cart) {
      this.allCheckArr.push(this.cart[index].Price * this.cart[index].Number);
      console.log(this.allCheckArr[index]);
    }
  },
  updated() {
    console.log("updated.");
    this.allCheckArr = [];
    this.sum = [];
    for (var index in this.cart) {
      this.allCheckArr.push(this.cart[index].Price * this.cart[index].Number);
      console.log(this.allCheckArr[index]);
    }
  },
  methods: {
    checkAll: function () {
      if (!this.allChecked) {
        this.sum = [];
      } else {
        this.sum = this.allCheckArr;
      }
    },
    addNumber(index) {
      this.cart[index].Number++;
      console.log(this.cart[index]);
      this.$forceUpdate();
    },
    decNumber(index) {
      this.cart[index].Number--;
      this.$forceUpdate();
    },
    deleteOrder(index) {
      this.cart.splice(index, 1);
      this.$modal.hide("delete");
      this.$forceUpdate();
    },
  },
};
</script>
