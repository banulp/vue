const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: []
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
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})