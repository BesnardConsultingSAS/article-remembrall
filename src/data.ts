export interface Series {
  id: number;
  title: string;
  status: string;
  articles: Article[];
}

export interface Article {
  id: number;
  title: string;
  status: string;
  items: ArticleItem[];
}

export interface ArticleItem {
  step: string;
  status: string;
}

export enum ArticleStep {
  SCRIPT_WRITING = "Script Writing",
  VIDEO_RECORDING = "Video Recording",
  VIDEO_EDITING = "Video Editing",
  VIDEO_ANNOTATIONS = "Video Annotations",
  YOUTUBE_PUBLISHING = "Youtube Publishing",
  ARTICLE_WRITING = "Article Writing",
  ARTICLE_PUBLISHING = "Article Publishing"
}

export enum Status {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  DONE = "Done"
}

export const BadgeStatus = {
  "Not Started": "badge-dark",
  "In Progress": "badge-warning",
  Done: "badge-success"
};
