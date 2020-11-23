<template>
  <div class="add-series">
    <h2>New Series</h2>
    <form>
      <div class="form-group">
        <label for="seriesTitle">Series Title</label>
        <input
          type="text"
          class="form-control"
          id="seriesTitle"
          aria-describedby="series title"
          placeholder="Enter series title"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSeries"
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
