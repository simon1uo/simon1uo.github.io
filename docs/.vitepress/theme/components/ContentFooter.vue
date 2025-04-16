<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <div class="slide-enter-5 my-10 w-full">
    <template v-if="!isHome">
      <a href="/">
        back to home
      </a>
    </template>
    <span class="text-base opacity-50">copyright(c) simon1uo (present)</span>
  </div>
</template>

<style scoped></style>se
