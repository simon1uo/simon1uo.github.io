<script setup lang="ts">
import { useData } from 'vitepress'
import VPSwitch from 'vitepress/dist/client/theme-default/components/VPSwitch.vue'
import { inject, nextTick, ref, watchPostEffect } from 'vue'

const { isDark } = useData()
const switchTitle = ref('')

watchPostEffect(() => {
  switchTitle.value = isDark.value
    ? 'Switch To Light Mode'
    : 'Switch To Dark Mode'
})

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

async function toggleAppearance({ clientX: x, clientY: y }: MouseEvent) {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<template>
  <div class="flex items-center sm:hidden">
    <span class="i-akar-sun-fill dark:i-akar-moon-fill icon-button" @click="toggleAppearance" />
  </div>
</template>

<style scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
