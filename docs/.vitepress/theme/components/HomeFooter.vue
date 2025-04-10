<script setup lang="ts">
import { useData } from 'vitepress'

const data = useData()
const { theme } = data
</script>

<template>
  <footer class="mx-auto max-w-960px md:px-6">
    <div>
      <p class="m-0 text-center leading-normal text-sm text-[var(--c-text-light)] opacity-60">
        {{ theme.footer.copyright }}
      </p>
      <p class="m-0 text-center leading-normal text-sm text-[var(--c-text-light)] opacity-60">
        Theme by
        <a href="https://github.com/simon1uo/simon1uo.github.io">simon1uo</a>
      </p>
    </div>
  </footer>
</template>

<!-- No style needed as we're using UnoCSS utility classes -->
