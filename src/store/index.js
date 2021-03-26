import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                productID: '00001',
                productName: 'Product01',
                productDescp: 'This is Product001',
                productPrice: 25,
                productCat: 'cat01'
            },
            {
                productID: '00002',
                productName: 'Product02',
                productDescp: 'This is Product002',
                productPrice: 35,
                productCat: 'cat01'
            },
            {
                productID: '00003',
                productName: 'Product03',
                productDescp: 'This is Product003',
                productPrice: 55,
                productCat: 'cat01'
            },
            {
                productID: '00004',
                productName: 'Product04',
                productDescp: 'This is Product004',
                productPrice: 85,
                productCat: 'cat02'
            },
            {
                productID: '00005',
                productName: 'Product05',
                productDescp: 'This is Product005',
                productPrice: 5,
                productCat: 'cat02'
            },
            {
                productID: '00006',
                productName: 'Product06',
                productDescp: 'This is Product006',
                productPrice: 15,
                productCat: 'cat03'
            }
        ],
        catalogs: ['cat01', 'cat02', 'cat03'],
        user: {
            username: 'user',
            password: 'chen1234'
        },
        orders: [
            {
                orderID: "0001",
                product: "P1",
                price: "350",
                status: "Finished",
            },
            {
                orderID: "0002",
                product: "P3",
                price: "50",
                status: "Finished",
            },
            {
                orderID: "0003",
                product: "P5",
                price: "650",
                status: "Finished",
            },
            {
                orderID: "0004",
                product: "P7",
                price: "250",
                status: "Delivering",
            },
            {
                orderID: "0005",
                product: "P9",
                price: "350",
                status: "Delivering",
            }
        ],
        cart: [
            {
                OrderNo: "00001",
                Product: "P1",
                Price: 27,
                Number: "3",
            },
            {
                OrderNo: "00002",
                Product: "P3",
                Price: 20,
                Number: "1",
            },
        ],
        addresses: [
            {
                name: "username1",
                tel: "133-3333-3333",
                address: "Wuhan",
                zip: "123456",
            },
            {
                name: "username2",
                tel: "131-2222-3343",
                address: "Hubei",
                zip: "33333",
            },
            {
                name: "username3",
                tel: "131-2222-3443",
                address: "Hubei",
                zip: "33333",
            },
            {
                name: "username4",
                tel: "131-2122-3363",
                address: "Hubei",
                zip: "33333",
            },
            {
                name: "username5",
                tel: "151-2222-3363",
                address: "Hubei",
                zip: "33333",
            },
            {
                name: "username6",
                tel: "131-2222-3363",
                address: "Hbei",
                zip: "33333",
            },
            {
                name: "username7",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "3333",
            },
            {
                name: "username8",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "33343",
            },
            {
                name: "username9",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "333",
            },
            {
                name: "deletethis",
                tel: "131-2222-3363",
                address: "Hubei",
                zip: "123333",
            },
        ],
        
    },
    mutations: {
        USER_EDIT_ADDRESS(state, payload){
            console.log(payload.address)
            state.addresses.splice(payload.index, 1, payload.address)
        }
    }
})