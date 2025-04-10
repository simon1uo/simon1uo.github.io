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
        <div v-for="item in navItems" :key="item.text" class="relative">
          <!-- Regular nav link -->
          <a
            v-if="!item.items"
            class="block text-base font-medium px-1 transition-colors duration-250 text-[var(--vp-c-text-2)] no-underline hover:text-[var(--vp-c-text-1)]"
            :class="{ 'text-[var(--vp-c-brand)]': isActive(item.link) }"
            :href="normalizeLink(item.link)"
          >
            {{ item.text }}
          </a>

          <!-- Dropdown menu -->
          <div v-else class="relative group">
            <button class="block text-base font-medium px-1 transition-colors duration-250 text-[var(--vp-c-text-2)] bg-transparent border-none cursor-pointer hover:text-[var(--vp-c-text-1)]">
              {{ item.text }}
            </button>
            <div class="absolute top-full right-0 bg-[var(--vp-c-bg)] rounded-md py-2 min-w-[150px] hidden z-100 shadow-lg group-hover:block border-1 border-[var(--vp-c-divider)]">
              <a
                v-for="subItem in item.items"
                :key="subItem.text"
                class="block py-2 px-4 text-[var(--vp-c-text-2)] no-underline text-sm transition-colors duration-250 hover:text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-bg-secondary)]"
                :href="normalizeLink(subItem.link)"
              >
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
