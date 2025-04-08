<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import Copyright from './components/Copyright.vue'
import HomeFeatures from './components/HomeFeatures.vue'
// components
import HomeHero from './components/HomeHero.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <HomeHero />
    </template>
    <template #home-features-after>
      <HomeFeatures />
    </template>

    <template #doc-footer-before>
      <Copyright />
    </template>
  </Layout>
</template>

<style scoped></style>
