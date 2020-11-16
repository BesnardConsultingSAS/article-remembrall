<template>
  <div class="footer">
    <p>Remembrall, 2020</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #eee;
  color: #333;
  text-align: center;
  padding: 10px;
}
</style>
