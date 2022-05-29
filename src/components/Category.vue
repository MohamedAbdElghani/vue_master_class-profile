<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ category.name }}</h1>
        <p class="text-lead">{{ category.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ForumList
        :forums="forums"
        :categoryName="category.name"

    />
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList'
export default {
  name: 'Category',
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    },
    forums () {
      return this.$store.state.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<style scoped>

</style>
