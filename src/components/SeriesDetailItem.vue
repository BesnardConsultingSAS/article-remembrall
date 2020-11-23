<template>
  <div class="step">
    <router-link
      :to="{
        name: stepMapper.routeName,
        params: {
          id: series.id,
          articleId: article.id
        }
      }"
      class="step-link"
      >{{ stepMapper.stepTitle }}</router-link
    >
    <span
      v-bind:class="stepStatus"
      class="badge badge-pill d-inline-flex align-items-center"
    >
      {{ step.status }}
    </span>
  </div>
</template>

<script>
import { BadgeStatus } from "../data/enums";
import { inject, computed } from "vue";
export default {
  name: "SeriesDetailItem",
  props: ["series", "article", "stepMapper"],
  setup(props) {
    const store = inject("store");
    const step = store.getStep(
      props.series.id,
      props.article.id,
      props.stepMapper.stepKey
    );

    const stepStatus = computed(() => {
      for (const key in BadgeStatus) {
        if (step.status === key) {
          return BadgeStatus[key];
        }
      }

      return "badge-success";
    });

    return {
      step,
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
