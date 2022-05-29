<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts"/>
    <EditPost @save="addPost"></EditPost>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import EditPost from '@/components/EditPost'
export default {
  name: 'ThreadShow',
  components: {
    PostList,
    EditPost
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    },
    thread () {
      return this.threads.find(thread => thread.id === this.id) // also available under this.$route.params.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      console.log(eventData)
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}

</script>
