const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: [],
            premium: true,
            displaymodal: true,
            details: ['details1','details2','details3']
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