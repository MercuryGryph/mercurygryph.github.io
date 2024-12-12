<script setup lang="ts">
import { Urls } from '@/datas/Constants.ts'
</script>

<template>
  <div class="backdrop-blur-2xl! p-8px">
    <el-text type="info">
      &copy; MercuryGryph🏳️‍⚧
      <br/>

      <el-link :href="Urls.Project.License" target="_blank" type="info">
        LICENSE: GNU-GPL-3.0
      </el-link>
      <br/>

      Open Source:
      <el-link :href="Urls.Project.Repo" target="_blank" type="info">
        [Github Repo]
      </el-link>
    </el-text>
  </div>
</template>

<style scoped>
</style>
