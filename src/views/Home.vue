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
  data() {
    return {
      series: [
        {
          id: 1,
          title: "Django Testing",
          status: "Not started",
          items: [
            {
              id: 1,
              name: "Script Writing",
              status: "Done"
            },
            {
              id: 2,
              name: "Video Recording",
              status: "Done"
            },
            {
              id: 3,
              name: "Article Writing",
              status: "In Progress"
            }
          ]
        },
        {
          id: 2,
          title: "Git Series",
          status: "In Progress",
          items: [
            {
              id: 1,
              name: "Script Writing",
              status: "Done"
            },
            {
              id: 2,
              name: "Video Recording",
              status: "Done"
            },
            {
              id: 3,
              name: "Article Writing",
              status: "In Progress"
            }
          ]
        }
      ]
    };
  }
});
</script>
