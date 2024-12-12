<script setup lang="ts">
import { Urls } from '@/datas/Constants.ts'
import { LogoBilibili, LogoCompose, LogoGithub, LogoKotlin, LogoSteam, LogoVueJs, LogoX } from '@/assets/icons'
import { BlurCard, IconLink } from '@/components'

</script>

<template>
  <BlurCard class="max-w-128 p-8">
    <div class="w-fit h-0 mx-a relative">
      <el-image
        :src="Urls.Images.Avatar"
        class="rounded-full w-128px absolute bottom-120px b-solid b-[#88aaee] b-4 shadow-xl"
      />
    </div>

    <div class="h-4" />

    <el-text
      type="primary"
      class="font-bold w-fit mx-a! block text-4xl! text-center"
    >
      MercuryGryph<br/>
      9猫猫
    </el-text>

    <div class="h-4" />

    <BlurCard
      title="I can do:"
      title-color="var(--el-color-primary)"
      title-italic
      title-font-family="'JetBrains Mono', monospace"
      class="w-fit mx-a p-8px"
    >
      <IconLink
        :href="Urls.Official.Kotlin"
        class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg"
      >
        <LogoKotlin class="w-48px p-12px" />
      </IconLink>
      <IconLink
        :href="Urls.Official.ComposeMultiplatform"
        class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg"
      >
        <LogoCompose class="w-48px p-8px" />
      </IconLink>
      <IconLink
        :href="Urls.Official.VueJs"
        class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg"
      >
        <LogoVueJs class="w-48px h-48px p-8px pt-12px" />
      </IconLink>
    </BlurCard>

    <div class="h-4" />

    <BlurCard
      title="Find me at:"
      title-color="var(--el-color-primary)"
      title-italic
      title-font-family="'JetBrains Mono', monospace"
      class="w-fit mx-a p-8px"
    >
      <IconLink :href="Urls.MySpace.Github" class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg">
        <LogoGithub class="w-32px p-4px" />
      </IconLink>

      <IconLink :href="Urls.MySpace.Bilibili" class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg">
        <LogoBilibili class="w-32px p-6px" />
      </IconLink>

      <IconLink :href="Urls.MySpace.X" class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg">
        <LogoX class="w-32px p-6px" />
      </IconLink>

      <IconLink :href="Urls.MySpace.Steam" class="m-1 inline-block b-solid b-1 b-[#414243] shadow-lg">
        <LogoSteam class="w-32px p-4px" />
      </IconLink>
    </BlurCard>

  </BlurCard>
</template>

<style scoped>
.blur-card-title {
  font-family: 'JetBrains Mono', monospace !important;
}
</style>
