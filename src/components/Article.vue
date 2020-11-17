<template>
  <div class="article">
    {{ article.title }}
    <span v-bind:class="articleStatus" class="badge badge-pill">
      {{ article.status }}</span
    >
    <div v-bind:key="item.id" v-for="item in article.items">
      <ArticleItem v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Article",
  props: ["article"],
  components: {
    ArticleItem
  },
  computed: {
    articleStatus: function() {
      const articleStatuses = {
        "Not Started": "badge-dark",
        "In Progress": "badge-warning",
        Done: "badge-success"
      };

      for (const key in articleStatuses) {
        if (this.article.status === key) {
          return articleStatuses[key];
        }
      }

      return "badge-success";
    }
  }
});
</script>

<style scoped>
.article {
  margin: 1em 0px;
}
</style>
