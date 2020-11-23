<template>
  <div class="step">
    <router-link
      :to="{
        name: toComponent,
        params: {
          id: series.id,
          articleId: article.id
        }
      }"
      class="step-link"
      >{{ stepTitle }}</router-link
    >
    <span
      v-bind:class="stepStatus(step.status)"
      class="badge badge-pill d-inline-flex align-items-center"
    >
      {{ step.status }}
    </span>
  </div>
</template>

<script>
import { BadgeStatus } from "../data/enums";

export default {
  name: "SeriesDetailItem",
  props: ["series", "article", "stepTitle", "step", "toComponent", "url"],
  setup() {
    function stepStatus(status) {
      for (const key in BadgeStatus) {
        if (status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    }

    return {
      stepStatus
    };
  }
};
</script>

<style scoped>
.step {
  margin: 1em 0;
}

.step-link {
  margin-right: 0.5em;
}
</style>
