<template>
  <div class="article-item">
    {{ item.step }}
    <span v-bind:class="articleItemStatus" class="badge badge-pill">
      {{ item.status }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { BadgeStatus } from "@/data";

export default defineComponent({
  name: "ArticleItem",
  props: ["item"],
  computed: {
    articleItemStatus: function() {
      for (const key in BadgeStatus) {
        if (this.item.status === key) {
          return BadgeStatus[key];
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
