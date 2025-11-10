<script setup lang="ts">
import BottomBar from '~/components/BottomBar.vue'
import {Urls} from '~/data/Constants'
import {getDomIconElement} from '~/utils/utils'
import Avatar from "~/components/Avatar.vue";

const props = defineProps<{
    class?: string
    style?: string
}>()

document.title = '9猫猫 / MercuryGryph'
getDomIconElement().href = Urls.Images.Avatar

let x = document.body.style.getPropertyValue('--mousePosX')

</script>

<template>
    <Background class="z--10" />

    <BottomBar class="z-10" />

    <div :class="props.class" :style="props.style">
        <BlurCard class="relative mx-a mt-48 min-h-64 min-w-64 w-fit rounded-2xl bg-#3333 p-2 pt-0">
            <div class="relative mx-a h-16 w-32">
                <Avatar class="absolute! bottom-0 w-32" />
            </div>

            <div>
                <el-text
                    type="primary"
                    class="mx-a block text-center font-bold text-4xl!"
                >
                    Mercury Neko
                    <br>
                    9猫猫
                </el-text>
            </div>
        </BlurCard>
    </div>
</template>
