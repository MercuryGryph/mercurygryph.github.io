<script setup lang="ts">
import {v4 as uuidv4} from 'uuid'
import {onMounted, onUnmounted, ref} from 'vue'
import {CursePos, PosProvider} from '~/components/GlassCard'
import {GlobalMouseEvent} from '~/data/GlobalEvent'
import {Vector, Vector2} from '~/utils/math/Vector'
import {rectInfo} from '~/utils/RectInfo'


const props = withDefaults(defineProps<{
    color?: string
    lightSizePx?: number
    glassBorderWidthPx?: number
    posProvider?: PosProvider
    updatesPerSecond?: number
}>(), {
    lightSizePx: 256,
    glassBorderWidthPx: 2,
    posProvider: CursePos(),
    updatesPerSecond: 120
})

const glassCardEffect = ref<HTMLElement | null>(null)
const anchorO = ref<HTMLElement | null>(null)
const anchorX = ref<HTMLElement | null>(null)
const anchorY = ref<HTMLElement | null>(null)
const mousePos = Vector2.Zero()



let lastUpdateTime = Date.now()
let lastRanderTime = Date.now()
const minimalUpdateTime = 1000 / props.updatesPerSecond

let rotateDeg = 0

const initStyleProps = () => {
    const cardEffect = glassCardEffect.value!!
    const card = cardEffect.parentElement!! as HTMLElement

    if (props.color) {
        cardEffect.style.setProperty('--glass-card-color', props.color)
    }
    card.style.setProperty('--glass-card-effect-size' , `${props.lightSizePx}px`)
    card.style.setProperty('--glass-card-border-width', `${props.glassBorderWidthPx}px`)

    rotateDeg = Number(window.getComputedStyle(card).getPropertyValue('--glass-card-rotate').replace('deg', ''))
}

const onMouseMove = (e: MouseEvent) => {
    const time = Date.now()
    if (time - lastUpdateTime < minimalUpdateTime) {
        return
    } else {
        lastUpdateTime = Date.now()
    }

    mousePos.x = e.clientX
    mousePos.y = e.clientY
}

const uuid = uuidv4()
const id = `GlassCard-${uuid}`

const animationFrame = () => {
    window.requestAnimationFrame(animationFrame)

    const cardEffect = glassCardEffect.value!!

    const pO = anchorO.value!!.getBoundingClientRect()
    const pX = anchorX.value!!.getBoundingClientRect()
    const pY = anchorY.value!!.getBoundingClientRect()

    const rect = rectInfo(
        Vector(pO.left, pO.top),
        Vector(pX.left, pX.top),
        Vector(pY.left, pY.top)
    )

    const pos = props.posProvider(mousePos, rect, props.lightSizePx, rotateDeg)

    cardEffect.style.setProperty('--glass-card-effect-pos-x', `${pos.x}px`)
    cardEffect.style.setProperty('--glass-card-effect-pos-y', `${pos.y}px`)
}

onMounted(() => {
    initStyleProps()
    window.requestAnimationFrame(animationFrame)
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
            <div ref="anchorO" class="absolute top-0    left-0  invisible w-0 h-0" />
            <div ref="anchorX" class="absolute top-0    right-0 invisible w-0 h-0" />
            <div ref="anchorY" class="absolute bottom-0 left-0  invisible w-0 h-0" />

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
.GlassCard {
    rotate: var(--glass-card-rotate);
}

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