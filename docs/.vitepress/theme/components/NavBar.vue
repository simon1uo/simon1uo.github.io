<script setup lang="ts">
import { useData } from 'vitepress'
import VPNavBarAppearance from 'vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue'
import VPNavBarExtra from 'vitepress/dist/client/theme-default/components/VPNavBarExtra.vue'
import VPNavBarHamburger from 'vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue'
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

import NavBarAppearanceSwitch from './NavBarAppearanceSwitch.vue'
import NavBarHamburger from './NavBarHamburger.vue'
import NavBarMenu from './NavBarMenu.vue'
import NavBarSocialLinks from './NavBarSocialLinks.vue'

defineProps<{
  isScreenOpen: boolean
}>()

defineEmits<{
  (e: 'toggleScreen'): void
}>()

// Create our own implementation of useLayout based on VitePress source code
function useLayout() {
  const { frontmatter, theme } = useData()

  // Determine if current page is home page
  const isHome = computed(() => {
    return !!(frontmatter.value.isHome || frontmatter.value.layout === 'home')
  })

  // Determine if the page has a sidebar
  const hasSidebar = computed(() => {
    // Check if sidebar is explicitly disabled in frontmatter
    if (frontmatter.value.sidebar === false)
      return false

    // Check if we're on the home page (home doesn't have sidebar by default)
    if (isHome.value)
      return false

    // Check if there's a sidebar configuration for this page
    return theme.value.sidebar !== false
  })

  return {
    isHome,
    hasSidebar,
  }
}

// Get scroll position
const y = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    y.value = window.scrollY
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
    y.value = window.scrollY
  })
})

// Use our layout composable
const { isHome, hasSidebar } = useLayout()

// Get site data for the title
const { site } = useData()
const siteTitle = computed(() => site.value.title)

// Create a reactive classes object for the navbar
const classes = computed(() => ({
  'home': isHome.value,
  'has-sidebar': hasSidebar.value,
  'top': y.value > 0,
}))
</script>

<template>
  <div class="w-full flex justify-between p-5" :class="classes">
    <div class="pointer-events-auto flex items-center">
      <!-- Logo and site title -->
      <div
        class="mr-5 text-lg text-dark:70 font-bold transition-colors duration-250 dark:text-white/50 hover:text-dark:80">
        <a href="/" class="no-underline">{{ siteTitle }}</a>
      </div>
      <!-- Navigation menu -->
      <div class="hidden items-center md:flex">
        <NavBarMenu />
      </div>
    </div>

    <div class="pointer-events-auto flex items-center gap-2">
      <!-- <VPNavBarAppearance /> -->
      <NavBarAppearanceSwitch />
      <NavBarSocialLinks />
      <NavBarHamburger :active="isScreenOpen" @click="$emit('toggleScreen')" />
      <!-- <VPNavBarSocialLinks /> -->
      <!-- <VPNavBarExtra /> -->
      <!-- <VPNavBarHamburger :active="isScreenOpen" @click="$emit('toggleScreen')" /> -->
    </div>
  </div>
</template>
