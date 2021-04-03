<template>
    <section class="px-12 py-10 place-items-start justify-start grid grid-flow-col mt-5">
      <catalog></catalog>
      <div class="container mx-auto">
        <div class="grid grid-cols-3 grid-flow-row gap-3">
          <products-slot
            v-for="(item, index) in products"
            :key="index"
            :product="item"></products-slot>
        </div>
      </div>
    </section>
</template>

<script>
import ProductsSlot from './ProductsSlot.vue'
import Catalog from '../../components/Catalog.vue'
export default {
  components: { ProductsSlot, Catalog },
  data () {
    return {
      
    }
  },
  computed:{
    products() {
      return this.$store.state.products
    }
  }
}
</script>
