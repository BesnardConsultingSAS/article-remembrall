<template>
  <header class="header">
    <h1>Remembrall</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
  .header {
    background: #eee;
    color: #333;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #333;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
