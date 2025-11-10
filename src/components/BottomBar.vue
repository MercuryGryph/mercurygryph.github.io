<script setup lang="ts">
import {Urls} from '~/data/Constants'
</script>

<template>

    <BlurCard class="fixed bottom-0 w-full flex justify-between bg-#3338 p-2">
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
    </BlurCard>

</template>

<style scoped>

</style>