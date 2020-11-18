import { createStore } from "vuex";
import { ArticleStep, Status } from "@/data";

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
            status: Status.IN_PROGRESS,
            items: [
              {
                step: ArticleStep.SCRIPT_WRITING,
                status: Status.DONE
              },
              {
                step: ArticleStep.VIDEO_RECORDING,
                status: Status.DONE
              },
              {
                step: ArticleStep.VIDEO_EDITING,
                status: Status.DONE
              },
              {
                step: ArticleStep.VIDEO_ANNOTATIONS,
                status: Status.DONE
              },
              {
                step: ArticleStep.YOUTUBE_PUBLISHING,
                status: Status.DONE
              },
              {
                step: ArticleStep.SCRIPT_WRITING,
                status: Status.DONE
              },
              {
                step: ArticleStep.ARTICLE_PUBLISHING,
                status: Status.IN_PROGRESS
              }
            ]
          },
          {
            title: "Django Testing #2: Introduction to Factory Boy",
            status: Status.NOT_STARTED
          }
        ]
      },
      {
        id: 2,
        title: "Git Series",
        status: Status.NOT_STARTED,
        articles: [
          {
            title: "Git Series #1: How to update branch",
            status: Status.NOT_STARTED
          },
          {
            title: "Git Series #2: How to rebase properly",
            status: Status.NOT_STARTED
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
