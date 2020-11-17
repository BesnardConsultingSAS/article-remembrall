<template>
  <div class="article-item">
    {{ item.name }}
    <span v-bind:class="articleItemStatus" class="badge badge-pill">
      {{ item.status }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticleItem",
  props: ["item"],
  computed: {
    articleItemStatus: function() {
      const articleItemStatuses = {
        "Not Started": "badge-dark",
        "In Progress": "badge-warning",
        Done: "badge-success"
      };

      for (const key in articleItemStatuses) {
        if (this.item.status === key) {
          return articleItemStatuses[key];
        }
      }

      return "badge-success";
    }
  }
});
</script>

<style scoped>
.article-item {
  margin: 5px 10px;
}
</style>
