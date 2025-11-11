<script setup lang="ts">
import {onMounted, ref} from 'vue'

const props = withDefaults(defineProps<{
    bgColor?: string;
}>(), {

})

const blurCard = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (props.bgColor) {
        blurCard.value?.style.setProperty("--blur-card-background-color", props.bgColor)
    }
})

</script>

<template>
    <div ref="blurCard" class="BlurCard shadow-xl backdrop-blur-lg">
        <slot />
    </div>
</template>

<style>
.BlurCard {
    background-color: var(--blur-card-background-color);
}
</style>
