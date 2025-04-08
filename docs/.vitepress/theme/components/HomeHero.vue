<script setup lang="ts">
import HeroActions from './HeroActions.vue'
</script>

<template>
  <div class="home-hero font-sans my-auto">
    <div class="flex text-5xl" />
    <div class="text-2xl font-light font-mono">
      hi(<span class="font-serif font-semibold italic">simon</span>)here
    </div>

    <div class="mt-5">
      <HeroActions />
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
