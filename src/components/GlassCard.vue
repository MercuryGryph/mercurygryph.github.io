<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue'
import {v4 as uuidv4} from 'uuid'
import {OffsetProvider} from '~/components/GlassCard'
import {GlobalMouseEvent} from '~/data/GlobalEvent'


const props = withDefaults(defineProps<{
    color?: string | null
    lightSizePx?: number
    glassBorderWidthPx?: number
    offset?: OffsetProvider
    updatesPerSecond?: number
}>(), {
    color: null,
    lightSizePx: 256,
    glassBorderWidthPx: 2,
    offset: ((x: number, y: number) => { return {x, y} }) as OffsetProvider,
    updatesPerSecond: 60
})

const glassCardEffect = ref<HTMLElement | null>(null)

const uuid = uuidv4()
const id = `GlassCard-${uuid}`

let lastUpdateTime = Date.now()
const minimalUpdateTime = computed(()=> {
    return 1000 / props.updatesPerSecond
})

onMounted(() => {
    const cardEffect = glassCardEffect.value!!

    if (props.color) {
        cardEffect.style.setProperty('--glass-card-color', props.color)
    }

    GlobalMouseEvent.OnMouseMove.register(id, (e: MouseEvent): void => {
        const time = Date.now()
        if (time - lastUpdateTime < minimalUpdateTime.value) {
            return
        } else {
            lastUpdateTime = time
        }

        const rect = cardEffect.getBoundingClientRect()
        const x = e.clientX - rect.left - props.lightSizePx / 2
        const y = e.clientY - rect.top - props.lightSizePx / 2
        const pos = props.offset(x, y, e, rect)

        cardEffect.style.setProperty('--x', `${pos.x}px`)
        cardEffect.style.setProperty('--y', `${pos.y}px`)
        cardEffect.style.setProperty('--glass-card-size', `${props.lightSizePx}px`)
        cardEffect.style.setProperty('--glass-card-border-width', `${props.glassBorderWidthPx}px`)
    })
})

onUnmounted(() => {
    GlobalMouseEvent.OnMouseMove.unregister(id)
})

</script>

<template>
    <BlurCard class="GlassCard">
        <div ref="glassCardEffect"
             class="GlassCardBorder
             before:backdrop-blur-lg
             z--1
             absolute w-100% h-100% translate--50% top-50% left-50%
             rounded-inherit of-hidden"
        >
            <div class="GlassCardEffect
                 z--1
                 absolute w-100% h-100% translate--50% top-50% left-50%
                 rounded-inherit of-hidden"
            />
        </div>
        <slot />
    </BlurCard>
</template>

<style>
.GlassCardBorder::before {
    content: '';
    position: absolute;
    inset: 0;

    border-radius: inherit;

    padding: var(--glass-card-border-width);

    background-image: radial-gradient(white, var(--glass-card-color) 20%, transparent 60%);
    background-position: var(--x) var(--y);
    background-size: var(--glass-card-size) var(--glass-card-size);
    background-repeat: no-repeat;

    mask: linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff);
    mask-composite: exclude;

    -webkit-mask: -webkit-linear-gradient(#fff, #fff) content-box, -webkit-linear-gradient(#fff, #fff);
    -webkit-mask-composite: destination-out; /* safari issue */
    -webkit-mask-composite: exclude; /* firefox issue */
}

.GlassCardEffect::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: radial-gradient(var(--glass-card-color) 5%, transparent 50%);
    background-position: var(--x) var(--y);
    background-size: var(--glass-card-size) var(--glass-card-size);
    background-repeat: no-repeat;

    opacity: 0.6;
}
</style>