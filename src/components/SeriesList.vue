<template>
  <div class="d-flex flex-row-reverse">
    <button class="btn btn-primary" @click="goToAddSeries">ADD SERIES</button>
  </div>

  <div
    v-bind:key="item.id"
    v-for="item in series"
    data-test="series-list"
    class="seriesList"
  >
    <SeriesItem v-bind:seriesItem="item" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import SeriesItem from "@/components/SeriesItem";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SeriesList",
  components: {
    SeriesItem
  },
  props: ["series"],
  setup() {
    const router = useRouter();
    const goToAddSeries = () => {
      router.push({ name: "AddSeries" });
    };

    return {
      goToAddSeries
    };
  }
});
</script>

<style scoped>
.seriesList {
  margin-top: 2em;
}
</style>
