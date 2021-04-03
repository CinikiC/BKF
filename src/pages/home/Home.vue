<template>
  <div>
    <products></products>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import router from '../../router'
import Products from './Products.vue'
export default {
  components: { Products, Navbar },
  name: 'Home',
  data () {
    return {

    }
  },
  mounted() {
      if(JSON.stringify(this.$store.state.user)==='{}'){
        alert('Please login first')
        router.push('/login')
      }
  }
}
</script>
