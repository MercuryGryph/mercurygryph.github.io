<script setup lang="ts">
import {ref, onMounted} from 'vue'

const card = ref<HTMLDivElement | null>(null)

onMounted(() => {
    card.value
})

</script>

<template>
    <div ref="card" class="blurCard shadow-xl backdrop-blur-2xl">
        <slot />
    </div>
</template>

<style>
.blurCard::before {
    content: '';
    position: absolute;

}
</style>
