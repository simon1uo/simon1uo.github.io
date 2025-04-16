<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import { normalizeLink } from '../support/utils'

const { theme } = useData()
const route = useRoute()

// Get navigation items from theme config
const navItems = computed(() => theme.value.nav || [])

// Check if a link is active
function isActive(link: string) {
  if (link === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(link)
}
</script>

<template>
  <nav class="flex items-center">
    <div class="flex items-center">
      <div class="flex items-center gap-2">
        <div v-for="item in navItems" :key="item.text" class="relative transition-colors duration-1000">
          <!-- Regular nav link -->
          <a v-if="!item.items"
            class="hover:text-brand dark:hover:text-brand-dark block px-1 text-base font-medium no-underline"
            :class="{ 'text-brand dark:text-brand-dark': isActive(item.link) }" :href="normalizeLink(item.link)">
            {{ item.text }}
          </a>

          <!-- Dropdown menu -->
          <div v-else class="group relative">
            <button
              class="block cursor-pointer border-none bg-transparent px-1 text-base text-[var(--vp-c-text-2)] font-medium transition-colors duration-250 hover:text-[var(--vp-c-text-1)]">
              {{ item.text }}
            </button>
            <div
              class="absolute right-0 top-full z-100 hidden min-w-[150px] border-1 border-[var(--vp-c-divider)] rounded-md bg-[var(--vp-c-bg)] py-2 shadow-lg group-hover:block">
              <a v-for="subItem in item.items" :key="subItem.text"
                class="block px-4 py-2 text-sm text-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:bg-[var(--vp-c-bg-secondary)] hover:text-[var(--vp-c-text-1)]"
                :href="normalizeLink(subItem.link)">
                {{ subItem.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 768px) {

  /* Responsive adjustments */
  :deep(.gap-8) {
    gap: 1rem;
  }

  :deep(.text-base) {
    font-size: 0.9rem;
  }
}
</style>
