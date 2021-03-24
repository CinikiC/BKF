import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import User from '@/pages/user/User'
import Cart from '@/pages/cart/Cart'
import ProductsDetail from '@/pages/home/ProductsDetail'
import UserInfo from '@/pages/user/UserInfo.vue'
import UserAddress from '@/pages/user/UserAddress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      redirect: '/user/info',
      children: [
        {
          path: 'info',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: 'address',
          name: 'UserAddress',
          component: UserAddress
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/products/:id',
      component: ProductsDetail
    }
  ]
})
