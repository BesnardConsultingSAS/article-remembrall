import { reactive, readonly } from "vue";
import { initialData } from "./initial-data";

const state = reactive({
  series: initialData
});

const getSeriesById = function(id) {
  const series = state.series.find(series => series.id === parseInt(id));

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

export default { state: readonly(state), getSeriesById, getStep };
