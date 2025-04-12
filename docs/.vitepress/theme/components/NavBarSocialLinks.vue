<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()

const { socialLinks } = theme.value

function getIconClass(icon: string) {
  switch (icon) {
    case 'github':
      return 'i-akar-github-fill'
    case 'instagram':
      return 'i-akar-instagram-fill'
    default:
      return ''
  }
}
</script>

<template>
  <div class="flex items-center">
    <span v-for="{ link, icon, ariaLabel } in socialLinks" :key="link" class="icon-button" :class="getIconClass(icon)">

      <a :href="link" target="_blank" rel="noopener" :ariaLabel="ariaLabel" :title="ariaLabel" />
    </span>
  </div>
</template>
