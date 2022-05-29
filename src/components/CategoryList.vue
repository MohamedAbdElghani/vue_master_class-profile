<template>

  <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsCategory(category)"
      :categoryName="category.name"
      :categoryId="category.id"
  ></ForumList>
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  name: 'CategoryList',
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  components: {
    ForumList
  },
  methods: {
    getForumsCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
