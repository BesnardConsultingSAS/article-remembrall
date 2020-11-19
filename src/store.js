import { reactive, readonly } from "vue";
import { initialData } from "./initial-data";

const state = reactive({
  series: initialData
});

export default { state: readonly(state) };
