<script setup lang="ts">
import BioCard from '@/views/Root/components/BioCard.vue'
import { Urls } from '@/datas/Constants.ts'

document.title = 'MercuryGryph / 9猫猫'
document.querySelector('link[rel="icon"]').href = Urls.Images.Avatar

</script>

<template>
  <transition appear name="el-fade-in" class="of-hidden">
    <img
      :src="Urls.Images.BingDailyWallpaper"
      class="fixed h-100vh w-100vw z--10 of-hidden blur"
      alt="[background image]"
    />
  </transition>

  <div class="fixed left-0 top-0 w-full h-100vh of-x-hidden of-y-scroll scroll-smooth">
    <BioCard class="w-50% mx-a mt-32" />
  </div>
</template>

<style scoped>
</style>
