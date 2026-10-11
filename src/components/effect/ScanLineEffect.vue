<script setup lang="ts">

</script>

<template>
  <div class="scan-line absolute left-0 top-0 w-100% h-100%" />
</template>

<style>
@keyframes scan-line-frames {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 var(--scan-line-cycle-height);
  }
}
.scan-line {
  --scan-line-cycle-height: 4px;
  background: linear-gradient(to bottom, transparent 0%, rgb(15 65 36 / 0.3) 30%, transparent 60%);
  background-size: 100% var(--scan-line-cycle-height);
  animation: scan-line-frames 0.5s infinite linear;
  overflow: hidden;
  pointer-events: none;
}
</style>