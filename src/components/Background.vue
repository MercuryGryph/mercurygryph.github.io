<script setup lang="ts">
import {rand} from '@vueuse/core'
import {h, onMounted, ref, render} from 'vue'
import {ZOffset} from '~/components/GlassCard'
import GlassCard from '~/components/GlassCard.vue'
import {Urls} from '~/data/Constants'
import {randomHexColorInHSV} from '~/utils/Color'

const bgStyle = ""
                + `background-image: url(${Urls.Images.BingDailyWallpaper});`
                + 'background-position: center center;'

const background = ref<HTMLImageElement | null>(null)

onMounted(() => {
    const bgElement = background.value!!

    for (let chunk = 0; chunk < 4; chunk++) {
        const count = rand(2, 4)
        for (let i = 0; i < count; i++) {
            const item = document.createElement('div')
            render(
                h(GlassCard, {
                    color: randomHexColorInHSV(),
                    posProvider: ZOffset(1 + (count - i) * 0.5),
                }),
                item
            )
            const cardElement = item.firstElementChild as HTMLElement
            if (!cardElement) {
                break
            }
            bgElement.appendChild(item)
            item.style.position = 'fixed'
            item.style.height = '50%'
            item.style.width = '30%'
            switch (chunk) {
                case 0:
                    item.style.top = '50px'
                    item.style.left = '25%'
                    item.style.transform = 'translate(-50%, 0)'
                    break
                case 1:
                    item.style.top = '50px'
                    item.style.right = '25%'
                    item.style.transform = 'translate(50%, 0)'
                    break
                case 2:
                    item.style.bottom = '100px'
                    item.style.left = '25%'
                    item.style.transform = 'translate(-50%, 0)'
                    break
                case 3:
                    item.style.bottom = '100px'
                    item.style.right = '25%'
                    item.style.transform = 'translate(50%, 0)'
                    break
            }
            cardElement.style.position = 'absolute'
            cardElement.style.top = `${rand(0, 80)}%`
            cardElement.style.left = `${rand(0, 80)}%`
            cardElement.style.width = '100px'
            cardElement.style.height = '100px'
            cardElement.style.setProperty('--glass-card-rotate', `${rand(0, 180)}deg`)
        }
    }

})

</script>

<template>
<!--    <div class="pageBg fixed left-0 top-0 h-100vh w-100vw bg-cover blur" :style="bgStyle" />-->

    <div ref="background" class="Background fixed left-0 top-0 w-100vw h-100vh" />
</template>
