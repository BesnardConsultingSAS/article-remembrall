<template>
  <div class="home">
    <SeriesList v-bind:series="store.state.series" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { inject } from "vue";
import SeriesList from "@/components/SeriesList.vue";
export default defineComponent({
  name: "Home",
  components: {
    SeriesList
  },
  setup() {
    const store = inject("store");

    return {
      store
    };
  }
});
</script>
