const User = {
    props: ['userId'],
    template: `
    <div>User {{ $route.params.userId }}</div>
    <ul>
        <li v-for="(detail, index) in details" :key="index">
          {{ index }} - {{ detail }} 
        </li>
      </ul>
    `,
    data() {
        return {
            product: 'Socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
    mounted() {
        alert('mmm');
    },
    methods: {
        addToCart() {
            // this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        }
    }
}