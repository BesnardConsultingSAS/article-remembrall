<template>
  <div class="article">
    {{ article.title }}
    <span v-bind:class="articleStatus" class="badge badge-pill">
      {{ article.status }}</span
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { BadgeStatus } from "@/data";
export default defineComponent({
  name: "Article",
  props: ["article"],
  computed: {
    articleStatus: function() {
      for (const key in BadgeStatus) {
        if (this.article.status === key) {
          return BadgeStatus[key];
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
