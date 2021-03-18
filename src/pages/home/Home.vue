<template>
  <div>
    <products></products>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Products from './Products.vue'
export default {
  components: { Products, Navbar },
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>
