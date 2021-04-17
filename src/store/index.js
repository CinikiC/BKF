import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                productID: 1,
                productName: 'Product01',
                productDescp: 'This is Product001',
                productPrice: 25,
                productCat: 'cat01'
            },
            {
                productID: 2,
                productName: 'Product02',
                productDescp: 'This is Product002',
                productPrice: 35,
                productCat: 'cat01'
            },
            {
                productID: 3,
                productName: 'Product03',
                productDescp: 'This is Product003',
                productPrice: 55,
                productCat: 'cat01'
            },
            {
                productID: 4,
                productName: 'Product04',
                productDescp: 'This is Product004',
                productPrice: 85,
                productCat: 'cat02'
            },
            {
                productID: 5,
                productName: 'Product05',
                productDescp: 'This is Product005',
                productPrice: 5,
                productCat: 'cat02'
            },
            {
                productID: 6,
                productName: 'Product06',
                productDescp: 'This is Product006',
                productPrice: 15,
                productCat: 'cat03'
            }
        ],
        catalogs: ['cat01', 'cat02', 'cat03'],
        registerUser: {
            username: '',
            password: ''
        },
        user: {},
        orders: [
            {
                orderID: 1,
                product: "P1",
                price: "350",
                status: "Finished",
            },
            {
                orderID: 2,
                product: "P3",
                price: "50",
                status: "Finished",
            },
            {
                orderID: 3,
                product: "P5",
                price: "650",
                status: "Finished",
            },
            {
                orderID: 4,
                product: "P7",
                price: "250",
                status: "Delivering",
            },
            {
                orderID: 5,
                product: "P9",
                price: "350",
                status: "Delivering",
            }
        ],
        cart: [
            {
                OrderNo: 1,
                Product: "P1",
                Price: 27,
                Number: 3,
                Checked: false,
            },
            {
                OrderNo: 2,
                Product: "P3",
                Price: 20,
                Number: 1,
                Checked: false
            },
        ],
        addresses: [
            {
                addressID: 1,
                name: "username1",
                tel: "133-3333-3333",
                address: "Wuhan",
                zip: "123456",
            },
            {
                addressID: 2,
                name: "username2",
                tel: "131-2222-3343",
                address: "Hubei",
                zip: "33333",
            },
            {
                addressID: 3,
                name: "username3",
                tel: "131-2222-3443",
                address: "Hubei",
                zip: "33333",
            },
            {
                addressID: 4,
                name: "username4",
                tel: "131-2122-3363",
                address: "Hubei",
                zip: "33333",
            },
            {
                addressID: 5,
                name: "username5",
                tel: "151-2222-3363",
                address: "Hubei",
                zip: "33333",
            },
            {
                addressID: 6,
                name: "username6",
                tel: "131-2222-3363",
                address: "Hbei",
                zip: "33333",
            },
            {
                addressID: 7,
                name: "username7",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "3333",
            },
            {
                addressID: 8,
                name: "username8",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "33343",
            },
            {
                addressID: 9,
                name: "username9",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "333",
            },
            {
                addressID: 10,
                name: "deletethis",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "123333",
            },
        ],
        processingAddressIndex: null,
    },
    mutations: {
        USER_EDIT_ADDRESS(state, payload) {
            console.log(payload.address)
            state.addresses.splice(payload.index, 1, payload.address)
        },
        USER_MAINTAIN_ADDRESS(state, payload) {
            console.log(payload),
                state.processingAddressIndex = payload
        },
        USER_REMOVE_ADDRESS(state, payload) {
            console.log(payload)
            state.addresses.splice(payload, 1)
        },
        USER_ADD_ADDRESS(state, payload) {
            state.addresses.push(payload)
        },
        USER_RETURN_ORDER(state, payload) {
            const oldOrder = state.orders[payload]
            oldOrder.status = 'Returned'
            state.orders.splice(payload, 1, oldOrder)
        },
        USER_CANCEL_ORDER(state, payload) {
            const oldOrder = state.orders[payload]
            oldOrder.status = 'Cancelled'
            state.orders.splice(payload, 1, oldOrder)
        },
        USER_EDIT_USERNAME(state, payload) {
            const oldUser = state.user
            oldUser.username = payload
            state.user = oldUser
        },
        USER_EDIT_PASSWORD(state, payload) {
            const oldUser = state.user
            oldUser.password = payload
            state.user = oldUser
        },
        CART_ADD(state, payload) {
            const oldCartItem = state.cart[payload]
            oldCartItem.Number++
            state.cart.splice(payload, 1, oldCartItem)
        },
        CART_DEC(state, payload) {
            const oldCartItem = state.cart[payload]
            oldCartItem.Number--
            state.cart.splice(payload, 1, oldCartItem)
        },
        CART_CREATE(state, payload) {
            console.log(payload)
            payload.OrderNo = state.cart[state.cart.length - 1].OrderNo + 1
            state.cart.push(payload)
        },
        CART_DELETE(state, payload) {
            state.cart.splice(payload, 1)
        },
        CART_RESET_ALL_CHECKS(state) {
            const oldCart = state.cart
            for (let index = 0; index < oldCart.length; index++) {
                oldCart[index].Checked = false
            }
            state.cart = oldCart
        },
        CART_CHECK_ALL(state) {
            const oldCart = state.cart
            for (let index = 0; index < oldCart.length; index++) {
                oldCart[index].Checked = true
            }
            state.cart = oldCart
        },
        CART_CHECK(state, payload) {
            const oldCart = state.cart
            if (oldCart[payload].Checked === true) {
                oldCart[payload].Checked = false
            } else {
                oldCart[payload].Checked = true
            }
            state.cart = oldCart
        },
        USER_CREATE_ORDER(state, payload) {
            const newOrderId = state.orders[state.orders.length - 1].orderID + 1
            const newOrderProduct = payload.Product
            const newOrderPrice = payload.Price * payload.Number
            const newOrderStatus = 'Delivering'
            const newOrder = {
                orderID: newOrderId,
                product: newOrderProduct,
                price: newOrderPrice,
                status: newOrderStatus
            }
            state.orders.push(newOrder)
        },
        USER_REG(state, payload) {
            console.log(payload)
            state.registerUser = payload
        },
        USER_LOGIN(state, payload) {
            state.user = payload
        },
        USER_OUT(state) {
            const nullUser = {}
            state.user = nullUser
        }
    },
    actions: {
        USER_REGISTER(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('USER_REG', payload)
                axios.post('/user/register', context.state.registerUser)
                    .then(function (res) {
                        context.commit('USER_LOGIN', res.data)
                        resolve(res)
                    })
                    .catch(function (err) {
                        console.log('Register failed')
                        reject(err)
                    })
            })
        },
        USER_AUTH(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post('/user/login', payload)
                    .then(function (res) {
                        context.commit('USER_LOGIN', res.data)
                        resolve(res)
                    })
                    .catch(function (err) {
                        console.log('Login failed')
                        reject(err)
                    })
            })
        },
        USER_LOGOUT(context) {
            return new Promise((resolve, reject) => {
                const userState = context.state.user
                axios.post('/user', userState)
                    .then(function (res) {
                        context.commit('USER_OUT')
                        resolve(res)
                    })
                    .catch(function (err) {
                        reject(err)
                    })
            })
        },
        USER_CHANGE_USERNAME(context, payload) {
            return new Promise((resolve, reject) => {
                console.log(payload)
                const userState = context.state.user
                userState.username = payload
                axios.post('/user/editusername', userState).then(function (res) {
                    context.commit('USER_LOGIN', res.data)
                    resolve(res)
                }).catch(function (err) {
                    reject(err)
                })
            })
        },
        USER_CHANGE_PASSWORD(context, payload) {
            return new Promise((resolve, reject) => {
                const userState = context.state.user
                userState.password = payload
                axios.post('/user/editpassword', userState).then(function (res) {
                    context.commit('USER_LOGIN', res.data)
                    resolve(res)
                }).catch(function (err) {
                    reject(err)
                })
            })
        },
        USER_ADD_ADDRESS(context, payload) {
            return new Promise((resolve, reject) => {
                const postPayload = {
                    userID: context.state.user._id,
                    newAddress: payload
                }
                axios.post('/user/addaddress', postPayload).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        USER_GET_ADDRESSES(context) {
            return new Promise((resolve, reject) => {
                console.log(context.state.user._id)
                axios.post('/user/addresses', context.state.user._id).then((res) => {
                    console.log('resolve: ')
                    for (let index = 0; index < res.length; index++) {
                        context.commit("USER_ADD_ADDRESS", res[index])
                    }
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
})