<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <router-link
          :to="{ name: 'SeriesDetail', params: { id: seriesItem.id } }"
          >{{ seriesItem.title }}</router-link
        >
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
import { defineComponent, computed } from "vue";
import Article from "../components/Article";
import { Article as ArticleInterface } from "../data/interfaces";
import { BadgeStatus } from "../data/enums";

export default defineComponent({
  name: "SeriesItem",
  components: {
    Article
  },
  props: { seriesItem: ArticleInterface },
  setup(props) {
    const seriesStatus = computed(() => {
      for (const key in BadgeStatus) {
        if (props.seriesItem.status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    });

    return {
      seriesStatus
    };
  }
});
</script>

<style scoped></style>
