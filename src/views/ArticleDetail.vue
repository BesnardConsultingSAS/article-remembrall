<template>
  <div class="step-details">
    <div class="d-flex align-items-center step-header">
      <h2>{{ stepTitle }}</h2>
      <span :class="stepStatus" class="badge d-inline-flex">{{
        step.status
      }}</span>
    </div>

    <h3>Resources</h3>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-bind:key="item.url"
        v-for="item in step.resources"
      >
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import { articleSteps } from "../data/data";
import { BadgeStatus } from "../data/enums";
export default {
  name: "ArticleDetail",
  setup() {
    const store = inject("store");
    const route = useRoute();
    let stepTitle = "";
    let stepKey = "";
    articleSteps.forEach(function(step) {
      if (step.routeName == route.name) {
        stepKey = step["stepKey"];
        stepTitle = step["stepTitle"];
      }
    });

    const step = store.getStep(
      route.params.id,
      route.params.articleId,
      stepKey
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
      stepStatus,
      stepTitle
    };
  }
};
</script>

<style scoped>
.step-header {
  margin-bottom: 2em;
}

.step-details {
  margin-top: 2em;
}

h2 {
  margin-right: 0.5em;
}
h3 {
  margin-bottom: 0.75em;
}
</style>
