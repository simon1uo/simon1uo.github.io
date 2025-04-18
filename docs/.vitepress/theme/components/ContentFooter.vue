<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <div class="my-10 w-full flex-col slide-enter-5 animate-delay-500">
    <div v-if="!isHome" class="flex items-center gap-2 hover:underline">
      <span class="i-akar-chevron-right" />
      <a href="/">back to main</a>
    </div>
    <div class="flex items-center gap-2 opacity-80 text-base">
      <span class="i-emoji-contrast-copyright" /> COPYRIGHT <span class="font-bold">simon1uo</span>
    </div>
    <div class="flex items-center gap-2 opacity-50 text-base">
      <span class="i-emoji-contrast-fire" /> POWERED by <span class="font-bold">vitepress</span>
    </div>
  </div>
</template>
