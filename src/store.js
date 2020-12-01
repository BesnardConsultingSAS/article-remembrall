import { reactive, readonly } from "vue";
import { initialData } from "./initial-data";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_SERIES_KEY = "series";
let seriesList = [];

const setupInitialData = () => {
  const seriesFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_SERIES_KEY);
  seriesList = seriesFromLocalStorage
    ? JSON.parse(seriesFromLocalStorage)
    : initialData;

  localStorage.setItem(LOCAL_STORAGE_SERIES_KEY, JSON.stringify(seriesList));
};

const getParsedSeriesFromLocalStorage = () => {
  const seriesFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_SERIES_KEY);
  return JSON.parse(seriesFromLocalStorage);
};

const state = reactive({
  series: seriesList
});

const getSeriesList = () => {
  return state.series;
};

const addSeries = function(series) {
  const parsedSeries = getParsedSeriesFromLocalStorage();
  series.id = uuidv4();
  parsedSeries.push(series);
  localStorage.setItem(LOCAL_STORAGE_SERIES_KEY, JSON.stringify(parsedSeries));
};

const getSeriesById = function(id) {
  const parsedSeries = getParsedSeriesFromLocalStorage();
  const series = parsedSeries.find(series => series.id === id);

  if (!series) {
    return;
  }

  return series;
};

const getSingleArticleFromSeries = function(seriesId, articleId) {
  const series = getSeriesById(seriesId);
  const article = series.articles.find(
    article => article.id === parseInt(articleId)
  );

  if (!article) {
    return;
  }

  return article;
};

const getStep = function(seriesId, articleId, step) {
  const article = getSingleArticleFromSeries(seriesId, articleId);

  for (const key in article.steps) {
    if (key == step) {
      return article.steps[key];
    }
  }
};

export default {
  state: readonly(state),
  getSeriesById,
  getStep,
  addSeries,
  getSeriesList,
  setupInitialData,
  LOCAL_STORAGE_SERIES_KEY,
  getParsedSeriesFromLocalStorage
};
