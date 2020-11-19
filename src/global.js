import { reactive, readonly } from "vue";
import { SeriesData } from "./series";

const state = reactive({
  series: SeriesData
});

export default { state: readonly(state) };
