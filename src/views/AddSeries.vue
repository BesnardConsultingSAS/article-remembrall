<template>
  <div class="add-series">
    <h2>New Series</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="seriesTitle">Series Title</label>
        <input
          type="text"
          class="form-control"
          id="seriesTitle"
          aria-describedby="series title"
          placeholder="Enter series title"
          v-model="newSeriesTitle"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { Status } from "../data/enums";

export default {
  name: "AddSeries",
  setup() {
    const store = inject("store");
    const router = useRouter();

    const newSeriesTitle = ref("");

    const handleSubmit = () => {
      store.addSeries({
        title: newSeriesTitle.value,
        status: Status.NOT_STARTED,
        articles: []
      });
      router.push({ name: "Home" });
    };

    return {
      handleSubmit,
      newSeriesTitle
    };
  }
};
</script>

<style scoped>
.add-series {
  margin-top: 2em;
}

h2 {
  margin-bottom: 1em;
}
</style>
