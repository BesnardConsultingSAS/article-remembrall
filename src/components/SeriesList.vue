<template>
  <div class="d-flex flex-row-reverse">
    <button class="btn btn-primary">ADD SERIES</button>
  </div>

  <div v-bind:key="item.id" v-for="item in series" class="seriesList">
    <SeriesItem v-bind:series="item" />
  </div>

</template>

<script>
import SeriesItem from "@/components/SeriesItem";

export default {
  name: "SeriesList",
  components: {
    SeriesItem
  },
  props: ["series"]
}
</script>

<style scoped>
.seriesList {
  margin-top: 2em;
}
</style>
