<template>
  <section class="place-items-centers justify-start grid grid-flow-col">
    <user-nav></user-nav>
    <router-view></router-view>
  </section>
</template>

<script>
import UserInfo from './UserInfo.vue'
import UserNav from './UserNav.vue'
import router from '../../router'
export default {
  components: { UserNav, UserInfo },
  name: 'User',
  data () {
    return {
      msg: 'This is user page.'
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
