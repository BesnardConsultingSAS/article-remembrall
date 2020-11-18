<template>
  <div class="home">
    <SeriesList v-bind:series="series" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SeriesList from "@/components/SeriesList.vue";
export default defineComponent({
  name: "Home",
  components: {
    SeriesList
  },
  computed: {
    series() {
      return this.$store.state.series;
    }
  }
});
</script>
