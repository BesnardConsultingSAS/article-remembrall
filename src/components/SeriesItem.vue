<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <a href="">{{ series.title }}</a>
        <span class="badge badge-pill badge-warning">
          {{ series.status }}
        </span>
      </div>

    </div>
    <div class="card-body">
      <div v-bind:key="item.id" v-for="item in series.items">
        <p>{{ item.name }} <span class="badge badge-pill badge-warning"> {{ item.status }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesItem",
  props: ["series"],
}
</script>

<style scoped>

</style>
