import { createStore } from "vuex";

export default createStore({
  state: {
    series: [
      {
        id: 1,
        title: "Django Testing",
        status: "Done",
        articles: [
          {
            title: "Django Testing #1: Create tests using Pytest",
            status: "In Progress",
            items: [
              {
                step: "Script Writing",
                status: "Done"
              },
              {
                step: "Video Recording",
                status: "Done"
              },
              {
                step: "Video Editing",
                status: "Done"
              },
              {
                step: "Video Annotations",
                status: "Done"
              },
              {
                step: "Youtube Publishing",
                status: "Done"
              },
              {
                step: "Article Writing",
                status: "Done"
              },
              {
                step: "Article Publishing",
                status: "Done"
              }
            ]
          },
          {
            title: "Django Testing #2: Introduction to Factory Boy",
            status: "In Progress"
          }
        ]
      },
      {
        id: 2,
        title: "Git Series",
        status: "Done",
        articles: [
          {
            title: "Git Series #1: How to update branch",
            status: "In Progress"
          },
          {
            title: "Git Series #2: How to rebase properly",
            status: "In Progress"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
