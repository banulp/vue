const app = Vue.createApp({
    // routes: router,
    data() {
        return {
            userget: 'default'
        }
    },
    methods: {
        getUser(id) {
            axios.get('/user', {
                params: {
                    id: 12345
                }
            }).then(response => {
                console.log(response);
                this.userget = response.data;
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            }).then(function () {
                // always executed ? 이거 어떻게 하더라
            });
        },
        postUser() {
            axios.post('/user', {
                firstName: 'Rainbow',
                lastName: 'Clover'
            }).then(response => {
                console.log(response);
                this.userget = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
})