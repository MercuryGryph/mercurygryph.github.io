<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {OffsetZ} from '~/components/GlassCard'
import {Probabilities, Urls} from '~/data/Constants'
import {getDomIconElement} from '~/utils/utils'

const props = defineProps<{
    class?: string
    style?: string
}>()

document.title = '9猫猫 / MercuryGryph'
getDomIconElement().href = Urls.Images.Avatar

const avatar = ref<HTMLElement | null>(null)

onMounted(() => {
    console.debug('onMounted @ ~/pages/index.vue')

    if (Probabilities.AvatarRotating.try()) {
        console.info('roooooooootatinnnnnnnnng')
        avatar.value?.classList.add('rotating')
    }
})

</script>

<template>
<!--    <Background class="z&#45;&#45;10" />-->

    <BottomBar class="z-10" />

    <div :class="props.class" :style="props.style">

        <GlassCard
            style="--glass-card-color: pink"
            :offset="OffsetZ(2)"
            class="relative rounded-2xl mx-a mt-48 min-h-64 min-w-64 w-fit p-2 pt-0 "
        >
            <div class="relative mx-a h-16 w-32">
                <GlassCard
                    style="--glass-card-color: aqua"
                    :glassBorderWidthPx="4"
                    :offset="OffsetZ(2)"
                    class="relative rounded-full mx-a mt-48 p-4px absolute! bottom-0 w-32 h-32"
                >
                    <div ref="avatar" >
                        <Avatar />
                    </div>
                </GlassCard>
            </div>

            <div class="pt-4">
                <el-text
                    type="primary"
                    class="mx-a block text-center font-bold text-4xl! text-shadow-lg"
                >
                    ⑨猫猫
                </el-text>
            </div>
        </GlassCard>
    </div>
</template>

<style scoped>
.rotating {
    animation: rotate 10s infinite linear reverse;
}
</style>

<style>
</style>

