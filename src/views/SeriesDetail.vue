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
          step-title="Script Writing"
          v-bind:status="article.steps.scriptWriting.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Video Recording"
          v-bind:status="article.steps.videoRecording.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Video Editing"
          v-bind:status="article.steps.videoEditing.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Video Annotations"
          v-bind:status="article.steps.videoAnnotations.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Video Publishing"
          v-bind:status="article.steps.videoPublishing.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Article Writing"
          v-bind:status="article.steps.articleWriting.status"
        />
        <SeriesDetailItem
          v-bind:series="series"
          v-bind:article="article"
          step-title="Article Publishing"
          v-bind:status="article.steps.articlePublishing.status"
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
