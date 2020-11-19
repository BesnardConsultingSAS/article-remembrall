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

export default { state: readonly(state), getSeriesById };
