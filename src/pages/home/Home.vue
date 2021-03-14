<template>
  <div>
    <h1>{{msg}}</h1>
    <products></products>
  </div>
</template>

<script>
import Products from './Products.vue'
export default {
  components: { Products },
  name: 'Home',
  data () {
    return {
      msg: 'This is home page.'
    }
  }
}
</script>
