<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      onClick?: () => void
    }>(),
    {
      onClick: () => {}
    }
)
</script>

<template>
  <button @click="onClick" class="cassette-button">
    <slot />
  </button>
</template>

<style>
.cassette-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 64px;
  margin: 8px;
  padding: 8px;
  color: #111;
  background: radial-gradient(circle, #d8ccb5, #c0b195);
  border-radius: 16px;
  box-shadow:
      0 4px 0 0 #8a8274,
      0 8px 12px 0 rgb(0 0 0 / 0.2),
      2px 2px 0 0 #d8ccb5 inset,
      -2px -2px 0 0 #d8ccb5 inset;
  border: none;
}
.cassette-button:active {
  top: 2px;
  box-shadow:
      0 2px 0 0 #8a8274,
      0 6px 12px 0 rgb(0 0 0 / 0.6),
      2px 2px 0 0 #d8ccb5 inset,
      -2px -2px 0 0 #d8ccb5 inset;
}
</style>