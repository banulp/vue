app.component('gif-box', {
    props: ['gif'],
    template:
    /*html*/
        `
    <div class="gif-box">
    <a :href="gif.url">
        <img class="gif-image" :src="gif.images.original.url">
    </a>
    <a
        class="gif-user"
        v-if="gif.user"
        :href="gif.user.profile_url">
        <img :src="gif.user.avatar_url" height="30" witdh="30">
        {{ gif.user.display_name}}
    </a>  
    </div>
  `
})