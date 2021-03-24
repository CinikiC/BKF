<template>
  <div class="w-full max-w-sm mx-auto overflow-hidden rounded-lg dark:bg-gray-800">
        <div class="px-6 py-4">
            <h2 @click="toHome" class="text-3xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

            <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Sign in</h3>

            <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Create a new account</p>

            <form>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address">
                </div>

                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password">
                </div>

                <button class="mt-4 px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none object-position:center" type="button">
                        Sign in
                </button>

            </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

            <a @click="toLogin" class="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Login</a>
        </div>
    </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'Register',
  data () {
    return {

    }
  },
  methods: {
    toHome: function () {
      router.push({
        path: "/"
      })
    },
    toLogin: function () {
      router.push({
        path: "/login"
      })
    }
  }
}
</script>

<style>
a:hover{
  cursor:pointer;
}
</style>
