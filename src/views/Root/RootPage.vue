<script setup lang="ts">
import BioCard from '@/views/Root/components/BioCard.vue'
import { Urls } from '@/datas/Constants.ts'
import Copyright from '@/views/Root/components/Copyright.vue'

document.title = 'MercuryGryph / 9猫猫'
document.querySelector('link[rel="icon"]').href = Urls.Images.Avatar

const backgroundImgStyle =
  `background-image: url('${Urls.Images.BingDailyWallpaper}'); ` +
  'background-size: cover; ' +
  'background-position: center center;'

</script>

<template>
  <transition appear name="el-fade-in" class="of-hidden">
    <div
      id="background"
      class="fixed h-100vh w-100vw z--10 of-hidden blur"
      :style="backgroundImgStyle"
    />
  </transition>

  <div class="fixed left-0 top-0 flex flex-col w-full h-100vh of-x-hidden of-y-auto scroll-smooth">
    <BioCard class="w-50% mx-a mt-32 cancel" />

    <div class="h-4 mt-4" />

    <Copyright class="w-100vw mt-a" />
  </div>
</template>

<style scoped>
@keyframes on-hover {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: var(--el-color-primary);
  }
}
@keyframes off-hover {
  0% {
    background-color: var(--el-color-primary);
  }
  100% {
    background-color: transparent;
  }
}
</style>
