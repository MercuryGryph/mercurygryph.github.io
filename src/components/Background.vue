<script setup lang="ts">
import {rand} from '@vueuse/core'
import {onMounted, ref, h, render} from 'vue'
import GlassCard from '~/components/GlassCard.vue'
import {Urls} from '~/data/Constants'

const bgStyle = ""
                + `background-image: url(${Urls.Images.BingDailyWallpaper});`
                + 'background-position: center center;'

const background = ref<HTMLImageElement | null>(null)

onMounted(() => {
    const bgElement = background.value!!
    const count = rand(3, 7)

    const item = document.createElement('div')

    render(h(GlassCard), item)
    const cardElement = item.firstElementChild!! as HTMLElement
    bgElement.appendChild(cardElement)
    cardElement.style.position = 'absolute'
    cardElement.style.top = '20%'
    cardElement.style.left = '30%'
    cardElement.style.width = '100px'
    cardElement.style.height = '300px'
    cardElement.style.animation = 'rotate 10s infinite linear reverse'

    item.remove()
})

</script>

<template>
<!--    <div class="pageBg fixed left-0 top-0 h-100vh w-100vw bg-cover blur" :style="bgStyle" />-->

    <div ref="background" class="Background fixed left-0 top-0 w-100vw h-100vh z--10" />
</template>

<style scoped>

</style>