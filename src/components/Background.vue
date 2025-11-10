<script setup lang="ts">

import {Urls} from '~/data/Constants'

const bgStyle = ""
                + `background-image: url(${Urls.Images.BingDailyWallpaper});`
                + 'background-position: center center;'
</script>

<template>
    <div class="pageBg fixed left-0 top-0 h-100vh w-100vw bg-cover blur" :style="bgStyle" />
</template>

<style scoped>

</style>