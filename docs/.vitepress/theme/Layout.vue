<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;

// components
import HomeHero from "./components/HomeHero.vue";
import HomeFeatures from "./components/HomeFeatures.vue";
import Copyright from "./components/Copyright.vue";
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
