<template>
  <div class="home">
    <SeriesList v-bind:series="series" />
  </div>
</template>

<script>
// @ is an alias to /src
import SeriesList from "@/components/SeriesList";
export default {
  name: 'Home',
  components: {
    SeriesList
  },
  data() {
    return {
      series: [
        {
          "id": 1,
          "title": "Django Testing",
          "status": "Not started",
          "items": [
            {
              "id": 1,
              "name": "Script Writing",
              "status": "Done"
            },
            {
              "id": 2,
              "name": "Video Recording",
              "status": "Done"
            },
            {
              "id": 3,
              "name": "Article Writing",
              "status": "In Progress"
            }
          ]
        },
        {
          "id": 2,
          "title": "Git Series",
          "status": "In Progress",
          "items": [
            {
              "id": 1,
              "name": "Script Writing",
              "status": "Done"
            },
            {
              "id": 2,
              "name": "Video Recording",
              "status": "Done"
            },
            {
              "id": 3,
              "name": "Article Writing",
              "status": "In Progress"
            }
          ]
        }
      ]
    }
  }
}
</script>
