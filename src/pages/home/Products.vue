<template>
  <div>
    <products-slot :id="1"></products-slot>
    <products-slot :id="2"></products-slot>
    <products-slot :id="3"></products-slot>
  </div>
</template>

<script>
import ProductsSlot from './ProductsSlot.vue'
export default {
  components: { ProductsSlot },
}
</script>
