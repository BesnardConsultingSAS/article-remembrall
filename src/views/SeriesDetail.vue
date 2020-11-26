<template>
  <div class="series-detail">
    <h2>{{ series.title }}</h2>
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
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.videoRecording"
            step-title="Script Writing"
            to-component="ScriptWriting"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.videoRecording"
            step-title="Video Recording"
            to-component="VideoRecording"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.videoEditing"
            step-title="Video Editing"
            to-component="VideoEditing"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.videoAnnotations"
            step-title="Video Annotations"
            to-component="VideoAnnotations"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.videoPublishing"
            step-title="Video Publishing"
            to-component="VideoPublishing"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.articleWriting"
            step-title="Article Writing"
            to-component="ArticleWriting"
          />
          <SeriesDetailItem
            v-bind:series="series"
            v-bind:article="article"
            v-bind:step="article.steps.articlePublishing"
            step-title="Article Publishing"
            to-component="ArticlePublishing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgeStatus } from "../enums/enums";
import { inject } from "vue";
import { useRoute } from "vue-router";
import SeriesDetailItem from "../components/SeriesDetailItem";
export default {
  name: "SeriesDetail",
  components: { SeriesDetailItem },
  setup() {
    const store = inject("store");
    const route = useRoute();

    const { getSeriesById } = store;
    const series = getSeriesById(route.params.id);

    function articleStatus(status) {
      for (const key in BadgeStatus) {
        if (status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    }

    return {
      series,
      articleStatus
    };
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 1em;
}
.series-detail {
  margin-top: 2em;
}
</style>
