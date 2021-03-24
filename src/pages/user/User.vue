<template>
  <section class="place-items-start justify-start grid grid-flow-col">
    <user-nav></user-nav>
    <router-view></router-view>
  </section>
</template>

<script>
import UserInfo from './UserInfo.vue'
import UserNav from './UserNav.vue'
export default {
  components: { UserNav, UserInfo },
  name: 'User',
  data () {
    return {
      msg: 'This is user page.'
    }
  }
}
</script>
