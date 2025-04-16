<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ContentWrapper from './components/ContentWrapper.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-full w-full">
    <NavBar />
    <ContentWrapper />

  </div>
</template>
