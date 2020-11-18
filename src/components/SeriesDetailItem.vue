<template>
  <div>
    {{ stepTitle }}
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
  props: ["series", "article", "stepTitle", "status", "url"],
  computed: {
    stepsStatus: function() {
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
