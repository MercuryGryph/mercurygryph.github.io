<script setup lang="ts">
import {ZOffset} from '~/components/GlassCard';

const props = defineProps<{
    class?: string
    style?: string
}>()

</script>

<template>
<!--    <Background class="z&#45;&#45;10" />-->
    <div :class="props.class" :style="props.style">
        <div class="absolute top-50% left-50% translate--50%">
            <GlassCard
                color="aqua"
                :glassBorderWidthPx="2"
                :lightSizePx="256 + 64"
                :posProvider="ZOffset(5)"
                class="absolute top-50% left-50% translate--50%
                    w-150 h-80
                    rounded-2rem
                "
            />
            <GlassCard
                color="lime"
                :glassBorderWidthPx="2"
                :lightSizePx="256"
                :posProvider="ZOffset(3)"
                class="absolute top-[calc(50%-50px)] left-[calc(50%+128px)] translate--50%
                    w-60 h-150
                "
            />
            <GlassCard
                color="pink"
                :glassBorderWidthPx="2"
                :lightSizePx="256 - 64"
                :posProvider="ZOffset(2)"
                class="absolute top-[calc(50%+100px)] left-[calc(50%-10px)] translate--50%
                    w-100 h-100
                    rounded-full
                "
            />
        </div>
    </div>
</template>
