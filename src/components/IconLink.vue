<script setup lang="ts">
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    href: {type: String, default: ''},
    targetBlank: {type: Boolean, default: true},
    targetSelf: {type: Boolean, default: false},
  })

  const divRef = ref()

  const onMouseOver = () => {
    divRef.value.classList.add('hover-animation')
  }

  const onClick = () => {
    if (props.href != '') {
      if (props.targetSelf) {
        window.location.href = props.href
      } else if (props.targetBlank) {
        window.open(props.href, '_blank')
      } else {
        window.location.href = props.href
      }
    }
  }
</script>

<template>
  <div
    ref="divRef"
    @click="onClick"
    @mouseover="onMouseOver"
    class="w-fit h-fit rounded-50%"
  >
    <slot />
  </div>
</template>

<style scoped>
@keyframes on-hover {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: white;
  }
}
@keyframes off-hover {
  0% {
    background-color: white;
  }
  100% {
    background-color: transparent;
  }
}

.hover-animation:hover {
  animation: on-hover 0.5s;
  background-color: white;
}
.hover-animation {
  animation: off-hover 0.5s;
  background-color: transparent;
}
</style>
