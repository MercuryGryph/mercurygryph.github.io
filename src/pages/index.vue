<script setup lang="ts">
import {Urls} from '~/data/Constants'
import {getDomIconElement} from '~/utils/utils'

const props = defineProps<{
    class?: string
    style?: string
}>()

document.title = '9猫猫 / MercuryGryph'
getDomIconElement().href = Urls.Images.Avatar

const bgStyle
    = `background-image: url(${Urls.Images.BingDailyWallpaper});`
    + 'background-position: center center;'

</script>

<template>
    <div class="pageBg fixed left-0 top-0 z--10 h-100vh w-100vw bg-cover blur" :style="bgStyle" />

    <div class="fixed bottom-0 w-full flex justify-between bg-#3338 p-2 backdrop-blur-2xl">
        <el-text type="info">
            © MercuryGryph🏳️‍⚧
            <br>
            Page Source:
            <el-link :href="Urls.Project.Repo" type="info" target="_blank">
                [Github]
            </el-link>
        </el-text>

        <el-text type="info" class="text-end">
            <br>
            Background:
            <el-link href="https://bing.com" type="info" target="_blank">
                [Bing]
            </el-link>
        </el-text>
    </div>

    <div :class="props.class" :style="props.style">
        <div class="relative mx-a mt-32 min-h-64 min-w-64 w-fit rounded-2xl bg-#3333 p-2 pt-6 shadow-xl backdrop-blur-2xl">
            <div class="relative mx-a mb-2 h-1px w-32">
                <img
                    :src="Urls.Images.Avatar"
                    alt="avatar"
                    class="absolute bottom-0 w-32 b-4 b-#88aaee rounded-full b-solid shadow-xl"
                >
            </div>
            <div>
                <el-text
                    type="primary"
                    class="mx-a block text-center font-bold text-4xl!"
                >
                    MercuryGryph
                    <br>
                    9猫猫
                </el-text>
            </div>
        </div>
    </div>
</template>
