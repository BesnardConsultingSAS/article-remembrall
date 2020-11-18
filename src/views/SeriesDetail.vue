<template>
  <h2>{{ series.title }}</h2>

  <div v-bind:key="article" v-for="article in series.articles">
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-between">
          {{ article.title }}
          <span
            v-bind:class="seriesStatus"
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
</template>

<script>
import { BadgeStatus } from "@/data.ts";
import SeriesDetailItem from "@/components/SeriesDetailItem";
export default {
  name: "SeriesDetail",
  components: {
    SeriesDetailItem
  },
  computed: {
    series() {
      const series = this.$store.state.series.find(
        series => series.id === parseInt(this.$route.params.id)
      );

      if (!series) {
        return;
      }
      return series;
    },
    seriesStatus: function() {
      for (const key in BadgeStatus) {
        if (this.status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    }
  }
};
</script>

<style scoped></style>
