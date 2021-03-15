<template>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="grid grid-cols-4 grid-flow-row gap-3">
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
export default {
  components: { ProductsSlot },
}
</script>
