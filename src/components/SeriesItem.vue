<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <router-link :to="{ name: 'Series', params: { id: seriesItem.id } }">{{
          seriesItem.title
        }}</router-link>
        <span
          v-bind:class="seriesStatus"
          class="badge d-inline-flex align-items-center"
        >
          {{ seriesItem.status }}
        </span>
      </div>
    </div>
    <div class="card-body">
      <div v-bind:key="article.id" v-for="article in seriesItem.articles">
        <Article v-bind:article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Article from "@/components/Article";
export default defineComponent({
  name: "SeriesItem",
  components: {
    Article
  },
  props: ["seriesItem"],
  computed: {
    seriesStatus: function() {
      const seriesStatuses = {
        "Not Started": "badge-dark",
        "In Progress": "badge-warning",
        Done: "badge-success"
      };

      for (const key in seriesStatuses) {
        if (this.seriesItem.status === key) {
          return seriesStatuses[key];
        }
      }

      return "badge-success";
    }
  }
});
</script>

<style scoped></style>
