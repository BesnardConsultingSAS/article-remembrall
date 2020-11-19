import { Series, Status } from "@/data.ts";

export const SeriesData: Series[] = [
  {
    id: 1,
    title: "Django Testing",
    status: "Done",
    articles: [
      {
        id: 1,
        title: "Django Testing #1: Create tests using Pytest",
        status: Status.IN_PROGRESS,
        steps: {
          scriptWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Document 1"
              },
              {
                url: "www.test.com",
                name: "Document 2"
              }
            ]
          },
          videoRecording: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoEditing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoAnnotations: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoPublishing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articleWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articlePublishing: {
            status: Status.IN_PROGRESS,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          }
        }
      },
      {
        id: 2,
        title: "Django Testing #2: Introduction to Factory boy",
        status: Status.IN_PROGRESS,
        steps: {
          scriptWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Document 1"
              },
              {
                url: "www.test.com",
                name: "Document 2"
              }
            ]
          },
          videoRecording: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoEditing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoAnnotations: {
            status: Status.IN_PROGRESS,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoPublishing: {
            status: Status.NOT_STARTED,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articleWriting: {
            status: Status.NOT_STARTED,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articlePublishing: {
            status: Status.NOT_STARTED,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          }
        }
      }
    ]
  },
  {
    id: 2,
    title: "Git Series",
    status: Status.NOT_STARTED,
    articles: [
      {
        id: 3,
        title: "Git Series #1: How to rebase",
        status: Status.IN_PROGRESS,
        steps: {
          scriptWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Document 1"
              },
              {
                url: "www.test.com",
                name: "Document 2"
              }
            ]
          },
          videoRecording: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoEditing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoAnnotations: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoPublishing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articleWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articlePublishing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          }
        }
      },
      {
        id: 4,
        title: "Git Series #2: How to update branch",
        status: Status.IN_PROGRESS,
        steps: {
          scriptWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Document 1"
              },
              {
                url: "www.test.com",
                name: "Document 2"
              }
            ]
          },
          videoRecording: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoEditing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoAnnotations: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          videoPublishing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articleWriting: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          },
          articlePublishing: {
            status: Status.DONE,
            resources: [
              {
                url: "www.test.com",
                name: "Video 1.mp4"
              }
            ]
          }
        }
      }
    ]
  }
];
