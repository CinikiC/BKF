<template>
  <div class="flex flex-col px-12 py-10 text-left antialiased">
    <div class="justify-items-center flex px-3 flex-col">
      <ul class="flex px-12 flex-col gap-4">
        <li @click="toInfo" class="text-base font-semibold hover:text-blue-600">User info</li>
        <li @click="toAddress" class="text-base font-semibold hover:text-blue-600">Address</li>
        <li @click="toOrders" class="text-base font-semibold hover:text-blue-600">Orders</li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
    name: 'UserNav',
    methods: {
      toInfo: function () {
        router.push('/user/info')
      },
      toAddress: function () {
        router.push('/user/address')
      },
      toOrders: function () {
        router.push('/user/orders')
      }
    }
}
</script>