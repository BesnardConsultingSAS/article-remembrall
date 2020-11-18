<template>
  <div>
    <router-link
      :to="{
        name: toComponent,
        params: {
          id: series.id,
          articleId: article.id,
          title: stepTitle,
          step: step
        }
      }"
      >{{ stepTitle }}</router-link
    >
    <span
      v-bind:class="stepsStatus"
      class="badge d-inline-flex align-items-center"
    >
      {{ status }}
    </span>
  </div>
</template>

<script>
import { BadgeStatus } from "@/data.ts";

export default {
  name: "SeriesDetailItem",
  props: ["series", "article", "stepTitle", "step", "toComponent", "url"],
  data: function() {
    return {
      status: this.step.status
    };
  },
  computed: {
    stepsStatus: function() {
      for (const key in BadgeStatus) {
        if (this.step.status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    }
  }
};
</script>

<style scoped></style>
