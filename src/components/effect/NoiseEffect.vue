<script setup lang="ts">

</script>

<template>
  <div class="noise absolute left-0 top-0 w-100% h-100%" />
</template>

<style scoped>
.noise {
  background:
      repeating-radial-gradient(rgb(0 0 0 / 0.01) 0 0.0001%, rgb(255 255 255 / 0.01) 0 0.0002%)
      60% 60%/3000px 3000px,
      repeating-conic-gradient(rgb(0 0 0 / 0.01) 0 0.0001%, rgb(255 255 255 / 0.01) 0 0.0002%)
      40% 40%/3000px 3000px;
  background-blend-mode: difference;
  pointer-events: none;
}
</style>