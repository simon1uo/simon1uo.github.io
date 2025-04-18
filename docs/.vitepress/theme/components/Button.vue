<script setup lang="ts">
import { computed } from 'vue'
import { normalizeLink } from '../support/utils'
import { EXTERNAL_URL_RE } from '../utils/common'

const props = defineProps<{
  theme?: 'brand' | 'alt' | 'sponsor'
  tag?: string
  text: string
  href?: string
}>()

const classes = computed(() => [props.theme ?? 'brand'])

const isExternal = computed(
  () => props.href && EXTERNAL_URL_RE.test(props.href),
)

const component = computed(() => {
  if (props.tag) {
    return props.tag
  }

  return props.href ? 'a' : 'button'
})
</script>

<template>
  <component
    :is="component"
    class="inline-block border-1 border-solid border-transparent text-center font-medium whitespace-nowrap transition-all duration-200 rounded-[20px] px-5 leading-[38px] text-sm"
    :class="{
      'border-[var(--vp-button-brand-border)] text-[var(--vp-button-brand-text)] bg-[var(--vp-button-brand-bg)] hover:border-[var(--vp-button-brand-hover-border)] hover:text-[var(--vp-button-brand-hover-text)] hover:bg-[var(--vp-button-brand-hover-bg)] hover:drop-shadow-lg active:border-[var(--vp-button-brand-active-border)] active:text-[var(--vp-button-brand-active-text)] active:bg-[var(--vp-button-brand-active-bg)]': theme === 'brand',
      'border-[var(--vp-button-alt-border)] text-[var(--vp-button-alt-text)] bg-[var(--vp-button-alt-bg)] hover:border-[var(--vp-button-alt-hover-border)] hover:text-[var(--vp-button-alt-hover-text)] hover:bg-[var(--vp-button-alt-hover-bg)] hover:drop-shadow-lg active:border-[var(--vp-button-alt-active-border)] active:text-[var(--vp-button-alt-active-text)] active:bg-[var(--vp-button-alt-active-bg)]': theme === 'alt',
      'border-[var(--vp-button-sponsor-border)] text-[var(--vp-button-sponsor-text)] bg-[var(--vp-button-sponsor-bg)] hover:border-[var(--vp-button-sponsor-hover-border)] hover:text-[var(--vp-button-sponsor-hover-text)] hover:bg-[var(--vp-button-sponsor-hover-bg)] hover:drop-shadow-lg active:border-[var(--vp-button-sponsor-active-border)] active:text-[var(--vp-button-sponsor-active-text)] active:bg-[var(--vp-button-sponsor-active-bg)]': theme === 'sponsor'
    }"
    :href="href ? normalizeLink(href) : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
  >
    {{ text }}
  </component>
</template>

<!-- No style needed as we're using UnoCSS utility classes -->
