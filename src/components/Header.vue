<template>
  <nav class="navbar">
    <h1>Remembrall</h1>
    <div id="nav">
      <router-link class="header-link" to="/">Home</router-link> |
      <router-link class="header-link" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped>
.navbar {
  margin-top: 2em;
  padding: 0;
}

h1 {
  font-weight: bold;
}

.header-link {
  color: black;
}
</style>
