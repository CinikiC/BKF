<template>
    <section class="flex flex-row px-10 py-10 gap-6 text-gray-600 body-font">
      <catalog ></catalog>
      <div class="container mx-auto">
        <div class="grid grid-cols-3 grid-flow-row gap-3">
          <products-slot :id="1"></products-slot>
          <products-slot :id="2"></products-slot>
          <products-slot :id="3"></products-slot>
          <products-slot :id="4"></products-slot>
          <products-slot :id="5"></products-slot>
          <products-slot :id="6"></products-slot>
        </div>
      </div>
    </section>
</template>

<script>
import ProductsSlot from './ProductsSlot.vue'
import Catalog from '../../components/Catalog.vue'
export default {
  components: { ProductsSlot, Catalog },
}
</script>
