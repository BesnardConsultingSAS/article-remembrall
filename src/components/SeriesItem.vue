<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <a href="">{{ series.title }}</a>
        <span v-bind:class="seriesStatus" class="badge badge-pill">
          {{ series.status }}
        </span>
      </div>
    </div>
    <div class="card-body">
      <div v-bind:key="item.id" v-for="item in series.items">
        <p>
          {{ item.name }}
          <span class="badge badge-pill badge-warning"> {{ item.status }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SeriesItem",
  props: ["series"],
  computed: {
    seriesStatus: function() {
      const seriesStatuses = {
        "Not Started": "badge-dark",
        "In Progress": "badge-warning",
        Done: "badge-success"
      };

      for (const key in seriesStatuses) {
        if (this.series.status === key) {
          return seriesStatuses[key];
        }
      }

      return "badge-success";
    }
  }
});
</script>

<style scoped></style>
