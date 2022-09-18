<script setup lang="ts">
import HeroActions from "./HeroActions.vue";
</script>

<template>
  <div class="home-hero">
    <div class="text-4xl">👋👋👋</div>
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
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
