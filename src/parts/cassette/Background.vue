<script setup lang="ts">

import NoiseEffect from "~/components/effect/NoiseEffect.vue";
</script>

<template>
  <div class="cassette-bg fixed left-0 top-0 w-100vw h-100vh" />
  <NoiseEffect />
</template>

<style>
.cassette-bg {
  background: radial-gradient(circle, #333533, #111511)
}
</style>