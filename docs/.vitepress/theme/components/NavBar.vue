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

function useLayout() {
  const { frontmatter } = useData()

  // Determine if current page is home page
  const isHome = computed(() => {
    return !!(frontmatter.value.isHome || frontmatter.value.layout === 'home')
  })

  return {
    isHome,
  }
}

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

const { isHome } = useLayout()
const { site } = useData()
const siteTitle = computed(() => site.value.title)
</script>

<template>
  <div class="pointer-events-none fixed left-0 top-0 z-10 w-full">
    <div class="h-nav w-full flex justify-between p-5"
      :class="`${isHome ? 'home' : ''} ${y > 0 ? 'bg-white/50 dark:bg-dark/80 backdrop-blur shadow' : 'bg-transparent'}`">
      <div class="pointer-events-auto flex items-center">
        <div class="mr-5 text-lg text-dark:70 font-bold dark:text-white/50 hover:text-dark:80">
          <a href="/" class="no-underline">{{ siteTitle }}</a>
        </div>
        <div class="hidden items-center md:flex">
          <NavBarMenu />
        </div>
      </div>

      <div class="pointer-events-auto flex items-center gap-2">
        <NavBarAppearanceSwitch />
        <NavBarSocialLinks />
      </div>
    </div>
  </div>
</template>
