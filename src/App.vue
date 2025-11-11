<script setup lang="ts">
import {GlobalMouseEvent} from '~/data/GlobalEvent'

document.onmousemove = (e: MouseEvent): void => {
    GlobalMouseEvent.OnMouseMove.all().forEach((handler) => {
        handler(e)
    })
}

</script>

<template>
    <RouterView class="h-full max-w-100vw w-full of-x-clip" />
</template>
