<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  title: {type: String, default: ''},
  titleColor: {type: String, default: '#88aaee'},
  titleItalic: {type: Boolean, default: false},
  titleFontFamily: {type: String, default: ''},
})

const titleStyle = computed(() => {
  let style = `color: ${props.titleColor};`
  if (props.titleItalic) {
    style += 'font-style: italic;'
  }
  if (props.titleFontFamily) {
    style += `font-family: ${props.titleFontFamily};`
  }
  return style
})

</script>

<template>
  <div class="blur-card">
    <div v-if="props.title" class="blur-card-title-container">
      <span class="blur-card-title" :style="titleStyle">
        {{ props.title }}
      </span>
    </div>
    <slot />
  </div>
</template>

<style>
.blur-card {
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  overflow: visible;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
}
.blur-card-title-container {
  position: absolute;
  top: 0;
  left: 20px;
  width: fit-content;
  height: fit-content;
}
.blur-card-title {
  display: block;
  position: relative;
  width: fit-content;
  height: fit-content;
  left: 0;
  bottom: 12px;
  font-weight: bold;
  font-size: 18px;
}
</style>
