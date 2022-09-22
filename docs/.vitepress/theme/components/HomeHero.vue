<script setup lang="ts">
import HeroActions from "./HeroActions.vue";
</script>

<template>
  <div class="home-hero">
    <div class="text-5xl flex">
      <icon-fluent-emoji-waving-hand />
      <icon-fluent-emoji-astronaut-light />
      <icon-fluent-emoji-thought-balloon />
    </div>
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
  @apply my-36
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
