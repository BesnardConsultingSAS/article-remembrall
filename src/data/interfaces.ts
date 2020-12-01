export interface Series {
  id: string;
  title: string;
  status: string;
  articles: Article[];
}

export interface Article {
  id: number;
  title: string;
  status: string;
  steps: StepItem;
}

export interface StepItem {
  scriptWriting: StepItemDetail;
  videoRecording: StepItemDetail;
  videoEditing: StepItemDetail;
  videoAnnotations: StepItemDetail;
  videoPublishing: StepItemDetail;
  articleWriting: StepItemDetail;
  articlePublishing: StepItemDetail;
}

interface StepItemDetail {
  status: string;
  resources: Resource[];
}

export interface Resource {
  url: string;
  name: string;
}

export interface State {
  series: Series[];
}
