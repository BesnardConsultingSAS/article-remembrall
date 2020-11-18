<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "ArticleDetail",
  computed: {
    title: function() {
      return this.$route.params.title;
    }
  }
};
</script>

<style scoped></style>
