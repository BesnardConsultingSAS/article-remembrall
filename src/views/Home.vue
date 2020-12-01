<template>
  <div class="home">
    <SeriesList v-bind:series="series" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import SeriesList from "@/components/SeriesList.vue";
export default defineComponent({
  name: "Home",
  components: {
    SeriesList
  },
  setup() {
    const store: any = inject("store");
    const { setupInitialData, getParsedSeriesFromLocalStorage } = store;
    setupInitialData();
    const series = getParsedSeriesFromLocalStorage();
    return {
      series
    };
  }
});
</script>
