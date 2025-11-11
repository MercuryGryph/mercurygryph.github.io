<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue'
import {v4 as uuidv4} from 'uuid'
import {CursePos, PosProvider} from '~/components/GlassCard'
import {GlobalMouseEvent} from '~/data/GlobalEvent'


const props = withDefaults(defineProps<{
    color?: string | null
    lightSizePx?: number
    glassBorderWidthPx?: number
    posProvider?: PosProvider
    updatesPerSecond?: number
}>(), {
    color: null,
    lightSizePx: 256,
    glassBorderWidthPx: 2,
    posProvider: CursePos(),
    updatesPerSecond: 60
})

const glassCardEffect = ref<HTMLElement | null>(null)

const initStyleProps = () => {
    const cardEffect = glassCardEffect.value!!

    if (props.color) {
        cardEffect.style.setProperty('--glass-card-color', props.color)
    }
    cardEffect.parentElement?.style.setProperty('--glass-card-effect-size' , `${props.lightSizePx}px`)
    cardEffect.parentElement?.style.setProperty('--glass-card-border-width', `${props.glassBorderWidthPx}px`)
}

let lastUpdateTime = Date.now()
const minimalUpdateTime = computed(()=> {
    return 1000 / props.updatesPerSecond
})

const onMouseMove = (e: MouseEvent) => {
    const cardEffect = glassCardEffect.value!!

    const time = Date.now()
    if (time - lastUpdateTime < minimalUpdateTime.value) {
        return
    } else {
        lastUpdateTime = time
    }

    const rect = cardEffect.getBoundingClientRect()

    const pos = props.posProvider(e, rect, props.lightSizePx)

    cardEffect.style.setProperty('--glass-card-effect-pos-x', `${pos.x}px`)
    cardEffect.style.setProperty('--glass-card-effect-pos-y', `${pos.y}px`)
}

const uuid = uuidv4()
const id = `GlassCard-${uuid}`

onMounted(() => {
    initStyleProps()
    GlobalMouseEvent.OnMouseMove.register(id, onMouseMove)
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

    padding: var(--glass-card-border-top)
             var(--glass-card-border-right)
             var(--glass-card-border-bottom)
             var(--glass-card-border-left);

    background-image: radial-gradient(white, var(--glass-card-color) 20%, transparent 60%);
    background-position: var(--glass-card-effect-pos-x) var(--glass-card-effect-pos-y);
    background-size: var(--glass-card-effect-size) var(--glass-card-effect-size);
    background-repeat: no-repeat;

    opacity: var(--glass-card-effect-opacity);
    transition: opacity 0.6s ease;

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
    background-position: var(--glass-card-effect-pos-x) var(--glass-card-effect-pos-y);
    background-size: var(--glass-card-effect-size) var(--glass-card-effect-size);
    background-repeat: no-repeat;

    opacity: calc(0.6 * var(--glass-card-effect-opacity));
    transition: opacity 0.6s ease;
}
</style>