const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: []
            ,userget: 'default'
            ,premium: true
            ,displaymodal: true
            ,details: ['details1','details2','details3']
            // ,apiUrl: 'http://api.giphy.com/v1/gifs'
            // ,apiKey: 'XKLtBQJNpJuak0ZX68u6Pl6XvuVzgmW7'
            ,gif: {
                url: 'http://urlgif'
                , images: {
                    original : {
                        url : '/assets/images/rumi.png'
                    }
                }
                , user: {
                    profile_url: 'http://profile_url'
                    , avatar_url: 'http://avatar_url'
                    , display_name: 'BanulpGifUserName'
                }
            }
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
            axios.get('/user', {
                params: {
                    id: 12345
                }
            })
            .then(response => {
                console.log(response);
                this.userget = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .then(function () {
                // always executed ? 이거 어떻게 하더라
            });
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})
//
// import Vue from 'vue';
// const axios = require('axios');
//
// alert(1);
// axios.get('/user', {
//     params: {
//         id: 12345
//     }
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });
// alert(2);
// // axios.post('/user', {
// //   firstName: 'Fred',
// //   lastName: 'Flintstone'
// // })
// // .then(function (response) {
// //   console.log(response);
// // })
// // .catch(function (error) {
// //   console.log(error);
// // });