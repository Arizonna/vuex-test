export default {
    actions: {
        async fetchPosts (ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
            const posts = await res.json();
            this.posts = posts
            console.log(posts)

            ctx.commit('updatePosts', posts)
            
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.validPosts.length

        },
        validPosts (state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        }
    }
}