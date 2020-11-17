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
          status: "Done",
          articles: [
            {
              id: 1,
              title: "Django Testing #1 - Create tests using Pytest",
              status: "Done",
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
                  name: "Video Editing",
                  status: "Done"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Done"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Done"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Done"
                }
              ]
            },
            {
              id: 2,
              title: "Django Testing #2 - Introduction to Factory Boy",
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
                  name: "Video Editing",
                  status: "In Progress"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Not Started"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Not Started"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Not Started"
                }
              ]
            },
            {
              id: 3,
              title:
                "Django Testing #3 - Generating Random Datasets with Factory Boy",
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
                  name: "Video Editing",
                  status: "In Progress"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Not Started"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Not Started"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Not Started"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "Git Series",
          status: "Not Started",
          articles: [
            {
              id: 1,
              title: "Git Series #1 - How to Rebase",
              status: "Done",
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
                  name: "Video Editing",
                  status: "Done"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Done"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Done"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Done"
                }
              ]
            },
            {
              id: 2,
              title: "Git Series #2 - How to Cherry Pick",
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
                  name: "Video Editing",
                  status: "In Progress"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Not Started"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Not Started"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Not Started"
                }
              ]
            },
            {
              id: 3,
              title: "Git Series #3 - How to Update branch",
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
                  name: "Video Editing",
                  status: "In Progress"
                },
                {
                  id: 4,
                  name: "Video Annotations",
                  status: "Not Started"
                },
                {
                  id: 5,
                  name: "Youtube publishing",
                  status: "Not Started"
                },
                {
                  id: 6,
                  name: "Article Writing",
                  status: "Not Started"
                }
              ]
            }
          ]
        }
      ]
    };
  }
});
</script>
