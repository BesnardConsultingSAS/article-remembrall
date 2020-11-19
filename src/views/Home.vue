<template>
  <div class="home">
    <div v-bind:key="item.title" v-for="item in store.state.series">
      <p>{{ item.title }}</p>
    </div>
    <!--    <SeriesList v-bind:series="series" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { inject } from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    const store = inject("store");

    return {
      store
    };
  }
});
</script>
