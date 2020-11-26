<template>
  <div class="add-article">
    <h2>New Article</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="articleTitle">Article Title</label>
        <input
          type="text"
          class="form-control"
          id="articleTitle"
          aria-describedby="article title"
          placeholder="Enter article title"
          v-model="newArticleTitle"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Status } from "../data/enums";

export default {
  name: "AddArticle",
  setup() {
    const store = inject("store");
    const router = useRouter();
    const route = useRoute();

    const newArticleTitle = ref("");

    const handleSubmit = () => {
      router.push({ name: "Home" });
    };

    return {
      handleSubmit,
      newArticleTitle
    };
  }
};
</script>

<style scoped>
.add-article {
  margin-top: 2em;
}

h2 {
  margin-bottom: 1em;
}
</style>
