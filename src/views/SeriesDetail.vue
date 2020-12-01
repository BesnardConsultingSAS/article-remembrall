<template>
  <div class="series-detail">
    <div class="series-detail-header d-flex justify-content-between">
      <h2>{{ series.title }}</h2>
      <button class="btn btn-primary" @click="goToAddArticle">
        ADD ARTICLE
      </button>
    </div>
    <div v-if="series.articles.length > 0">
      <div v-bind:key="article" v-for="article in series.articles">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              {{ article.title }}
              <span
                v-bind:class="articleStatus(article.status)"
                class="badge d-inline-flex align-items-center"
              >
                {{ article.status }}
              </span>
            </div>
          </div>
          <div class="card-body">
            <div :key="item.stepTitle" v-for="item in articleSteps">
              <SeriesDetailItem
                :series="series"
                :article="article"
                :step-mapper="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="no-articles">No articles added into the series yet!</p>
    </div>
  </div>
</template>

<script>
import { BadgeStatus } from "../data/enums";
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import SeriesDetailItem from "../components/SeriesDetailItem";
import { articleSteps } from "../data/data";
export default {
  name: "SeriesDetail",
  components: { SeriesDetailItem },
  setup() {
    const store = inject("store");
    const router = useRouter();
    const route = useRoute();

    const { getSeriesById } = store;
    const series = getSeriesById(route.params.id);

    const goToAddArticle = () => {
      router.push({ name: "AddArticle" });
    };

    function articleStatus(status) {
      for (const key in BadgeStatus) {
        if (status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    }

    return {
      goToAddArticle,
      articleSteps,
      series,
      articleStatus
    };
  }
};
</script>

<style scoped>
.series-detail-header {
  margin-bottom: 1em;
}
.series-detail {
  margin-top: 2em;
}

.no-articles {
  font-weight: bold;
  color: maroon;
}
</style>
